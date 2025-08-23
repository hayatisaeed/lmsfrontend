import api from "@/core/config/api/api";

export async function getCoursesApi() {
  try {
    const response = await api.get("/api/v1/courses/courses/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
