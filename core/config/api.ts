//core/config/api.ts
import axios from "axios";
import { AxiosError } from "axios";

type ApiResult<T, E> =
  | { success: true; data: T }
  | { success: false; error: E };

type ApiError = {
  message: string;
  status?: number;
};

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

export async function requestWrapper<T>(
  request: Promise<{ data: T }>
): Promise<ApiResult<T, ApiError>> {
  try {
    const response = await request;
    return { success: true, data: response.data };
  } catch (error) {
    const axiosError = error as AxiosError<{ message: string }>;
    return {
      success: false,
      error: {
        message: axiosError.response?.data?.message || "Unknown error",
        status: axiosError.response?.status,
      },
    };
  }
}

export default api;
