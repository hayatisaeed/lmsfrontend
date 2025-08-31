import api from "@/core/config/api/api";

//types
import {
  IEducation,
  IProfile,
  TEducationalLevels,
  TLocation,
  TOlympiads,
  TStudentType,
  TStudyBranches,
} from "@/services/tanstack/student/profile/types";

export async function getStudentProfileApi(): Promise<IProfile> {
  try {
    const response = await api.get("/profile");

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postStudentIdentityApi(data: {
  national_id: string;
  date_of_birth: string;
}) {
  try {
    const response = await api.post("/profile/identity", data);

    return response.data;
  } catch (error) {
    console.error(error);

    throw error;
  }
}

export async function putStudentEducationApi(data: {
  level?: number;
  grade?: number;
  study_branch?: number;
  olympiad_ids?: number[];
  school_name?: string;
  school_type?: number;
  province_id?: number;
  city_id?: number;
  province?: string;
  city?: string;
}) {
  try {
    const response = await api.patch("/profile/education", data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getOlympiadsApi(): Promise<TOlympiads[]> {
  try {
    const response = await api.get(`/olympiads`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getLocationApi(
  id?: number | string
): Promise<TLocation[]> {
  try {
    const query = id ? `?province=${id}&all=false` : "";
    const response = await api.get(`/locations${query}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getScrolTypeApi(): Promise<TStudentType[]> {
  try {
    const response = await api.get(`/school-types`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getEducationalLevelsApi(): Promise<TEducationalLevels[]> {
  try {
    const response = await api.get("/educational-levels");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getEducationApi(): Promise<IEducation> {
  try {
    const response = await api.get("/profile/education");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getStudyBranchesApi(
  id?: number | string
): Promise<TStudyBranches[]> {
  try {
    const response = await api.get(`/study-branches?level=${id}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postLocationApi(location: {
  province: string;
  city: string;
  province_id: number;
  city_id: number;
}) {
  try {
    const response = await api.post("/profile/location", location);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postStudentParentApi(phone: string) {
  try {
    const response = await api.post("/profile/parent", {
      phone,
      relation: "father",
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function putStudentProfileApi(data: {
  display_name?: string;
  email?: string;
}) {
  try {
    const response = await api.put("/profile", data);

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postAvatarProfileApi(data: FormData) {
  try {
    const response = await api.post("/profile/avatar", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
