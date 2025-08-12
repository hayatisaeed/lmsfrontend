//core/config/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use(
  (request) => {
    const access = localStorage.getItem("access_token");
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
      window.location.href = "/login";
    }

    if (error?.response?.status === 401) {
      const refresh = localStorage.getItem("refresh_token");

      if (refresh) {
        try {
          const response = await api.post("/api/token/refresh/", { refresh });
          const data = response.data;

          if (data) {
            localStorage.setItem("access_token", data?.access);
            localStorage.setItem("refresh_token", data?.refresh);

            error.config.headers["Authorization"] = `Bearer ${data?.access}`;

            return api.request(error.config);
          }
        } catch (err) {
          console.error("Refresh request failed:", err);
        }
      } else {
        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

export default api;
