//api
import api from "@/core/config/api/api";

export async function refreshToken() {
  try {
    const response = await api.post("/auth/refresh");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function logout() {
  try {
    const response = await api.post("/auth/logout");
    return response.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
