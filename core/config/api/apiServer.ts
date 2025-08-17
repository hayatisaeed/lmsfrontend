"use server";
//core/config/api.ts
import axios from "axios";

//cookie
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  async (request) => {
    const access = (await cookies()).get("access");
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
    if (originalRequest.url.includes("/api/token/refresh/")) {
      logout();
    }

    if (error?.response?.status === 401) {
      const refresh = (await cookies()).get("refresh");

      if (refresh) {
        try {
          const response = await api.post("/api/token/refresh/", { refresh });
          const data = response.data;

          if (data) {
            (await cookies()).set("access", data.access);
            (await cookies()).set("access", data.refreshD);

            error.config.headers["Authorization"] = `Bearer ${data?.access}`;

            return api.request(error.config);
          } else {
            logout();
          }
        } catch (err) {
          console.error("Refresh request failed:", err);
          logout();
        }
      } else {
        logout();
      }
    }

    return Promise.reject(error);
  }
);

async function logout() {
  // Remove token cookie
  (await cookies()).delete("access");
  (await cookies()).delete("refresh");

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
