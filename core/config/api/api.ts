//core/config/api.ts
import axios from "axios";

// cookie
import {
  getAccessToken,
  setAccessToken,
  removeAccessToken,
} from "@/core/utils/token";
import { refreshToke } from "@/services/api/api";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const access = getAccessToken();
    if (access) request.headers["Authorization"] = `Bearer ${access}`;

    return request;
  },
  (error) => Promise.reject(error)
);

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Skip refresh attempt if it's already the refresh request
    if (originalRequest.url.includes("/auth/refresh")) {
      logout();
    }
    if (error?.response?.status === 401) {
      try {
        const data = await refreshToke();

        if (data) {
          setAccessToken(data);

          error.config.headers["Authorization"] = `Bearer ${data?.access}`;

          return api.request(error.config);
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

async function logout() {
  // Remove token cookie
  removeAccessToken();
  await logout();

  // If in browser, redirect user to login page only if not already on login page
  if (typeof window !== "undefined") {
    // Check if already on login page
    const currentPath = window.location.pathname;
    if (currentPath !== "/login") {
      window.location.href = "/login";
    }
  }
}

export default api;
