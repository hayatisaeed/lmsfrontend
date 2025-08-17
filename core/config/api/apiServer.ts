"use server";
import axios from "axios";
import { cookies } from "next/headers";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  withCredentials: true,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

async function getAccessToken() {
  const cookieStore = await cookies();
  return cookieStore.get("access")?.value;
}

async function setTokens({
  access,
  refresh,
}: {
  access: string;
  refresh: string;
}) {
  const cookieStore = await cookies();
  cookieStore.set("access", access, {
    httpOnly: true,
    path: "/",
    maxAge: 24 * 60 * 60,
  });
  cookieStore.set("refresh", refresh, {
    httpOnly: true,
    path: "/",
    maxAge: 7 * 24 * 60 * 60,
  });
}

async function logout() {
  const cookieStore = await cookies();
  cookieStore.delete("access");
  cookieStore.delete("refresh");
}

api.interceptors.request.use(async (request) => {
  const access = await getAccessToken();
  if (access) request.headers["Authorization"] = `Bearer ${access}`;
  return request;
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (originalRequest.url.includes("/api/token/refresh/")) {
      await logout();
      return Promise.reject(error);
    }

    if (error?.response?.status === 401) {
      const cookieStore =await cookies();
      const refresh = cookieStore
      
      .get("refresh")?.value;

      if (refresh) {
        try {
          const response = await api.post("/api/token/refresh/", { refresh });
          const data = response.data;

          if (data) {
            await setTokens({ access: data.access, refresh: data.refresh });
            originalRequest.headers["Authorization"] = `Bearer ${data.access}`;
            return api.request(originalRequest);
          } else {
            await logout();
          }
        } catch (err) {
          console.error("Refresh request failed:", err);
          await logout();
        }
      } else {
        await logout();
      }
    }

    return Promise.reject(error);
  }
);

export default api;
