import api from "@/core/config/api/api";

//types
import { ICourse } from "./type";

export async function getCoursesApi():Promise<ICourse[]> {
  try {
    const response = await api.get("/courses/courses/");
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function getCourseItemApi(course_id: string) {
  try {
    const response = await api.get(`/courses/courses/${course_id}/`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postEnrollInCourseApi(course_id: number | string) {
  try {
    const response = await api.post(`/courses/courses/`, { course_id });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
