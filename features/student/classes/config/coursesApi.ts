// core/config/coursesApi.ts
import axios, { AxiosResponse, AxiosError } from "axios";
import {
  setTokens,
  getAccessToken,
  getRefreshToken,
  clearTokens,
} from "@/core/utils/token";

const coursesApi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

coursesApi.interceptors.request.use(
  (request) => {
    const access = getAccessToken();
    if (access) request.headers!["Authorization"] = `Bearer ${access}`;
    return request;
  },
  (error) => Promise.reject(error)
);

coursesApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    const originalRequest = error.config;

    if (originalRequest?.url?.includes("/api/token/refresh/")) {
      logout();
    }

    if (error?.response?.status === 401) {
      const refresh = getRefreshToken();

      if (refresh) {
        try {
          const response = await coursesApi.post("/api/token/refresh/", {
            refresh,
          });
          const data = response.data;

          if (data) {
            setTokens(data);
            originalRequest!.headers![
              "Authorization"
            ] = `Bearer ${data.access}`;
            return coursesApi.request(originalRequest!);
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

coursesApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => {
    if (error.response?.status === 403) {
      const url = error.config?.url || "";
      if (url.includes("/enroll")) {
        window.location.href = url.replace("enroll", "content");
      } else {
        window.location.href = url.replace("content", "enroll");
      }
    }
    return Promise.reject(error);
  }
);

function logout() {
  clearTokens();

  if (typeof window !== "undefined") {
    const currentPath = window.location.pathname;
    if (currentPath !== "/login") {
      window.location.href = "/login";
    }
  }
}

export default coursesApi;
