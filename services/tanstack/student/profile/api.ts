import api from "@/core/config/api";

export async function getStudentEducationApi() {
  try {
    const response = await api.get("/api/users/profile/education/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postStudentEducationApi() {
  try {
    const response = await api.post("/api/users/profile/education/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
