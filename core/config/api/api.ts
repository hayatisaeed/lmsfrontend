// core/config/api.ts
import axios from "axios";

// cookie
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "@/core/utils/token";
import { refreshToken } from "@/services/api/api";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

// ----------------- REQUEST INTERCEPTOR -----------------
api.interceptors.request.use(
  (request) => {
    const access = getAccessToken();
    if (access) {
      request.headers["Authorization"] = `Bearer ${access}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

// ----------------- RESPONSE INTERCEPTOR -----------------
api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (!originalRequest || !originalRequest.url) {
      return Promise.reject(error);
    }

    if (originalRequest.url.includes("/auth/refresh")) {
      logout();
      return Promise.reject(error);
    }

    if (error?.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const data = await refreshToken();

        if (data?.access) {
          setAccessToken(data.access);

          originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
          return api.request(originalRequest);
        } else {
          logout();
        }
      } catch (err) {
        console.error("Refresh request failed:", err);
        logout();
      }
    }

    return Promise.reject(error);
  }
);

// ----------------- LOGOUT HANDLER -----------------
async function logout() {
  removeAccessToken();

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname;
    if (currentPath !== "/login") {
      window.location.href = "/login";
    }
  }
}

export default api;
