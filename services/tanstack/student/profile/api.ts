import api from "@/core/config/api";

//types
import { TStudentIdentity } from "@/types/student";
import { AxiosError } from "axios";

export async function postStudentIdentityApi(data: {
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

export async function getStudentIdentityApi(): Promise<TStudentIdentity> {
  try {
    const response = await api.get("/api/users/profile/identity/");
    return response.data;
  } catch (error) {
    console.error(error);
    if ((error as AxiosError).response?.status === 404) {
      return {
        date_of_birth: "",
        father_name: "",
        first_name: "",
        gender: "M",
        is_verified: false,
        last_name: "",
        national_id: "",
        submission_count: 0,
      };
    }
    throw error;
  }
}

export async function postStudentEducationApi(data: {
  national_id: string;
  date_of_birth: string;
}) {
  try {
    const response = await api.post("/api/users/profile/education/", data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getStudentEducationApi(): Promise<TStudentIdentity> {
  try {
    const response = await api.get("/api/users/profile/education/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
