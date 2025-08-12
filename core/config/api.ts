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
    if (localStorage.getItem("access_token"))
      request.headers.Authorization = `Bearer ${localStorage.getItem(
        "access_token"
      )}`;

    return request;
  },
  (error) => Promise.reject(error)
);

export default api;
