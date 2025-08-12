import api from "@/core/config/api";

//types
import { TStudentIdentity } from "@/types/student";

export async function postStudentEducationApi(data: {
  national_id: string;
  date_of_birth: string;
}) {
  try {
    const response = await api.post("/api/users/profile/identity/", data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getStudentEducationApi(): Promise<TStudentIdentity> {
  try {
    const response = await api.get("/api/users/profile/identity/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
