//api
import coursesApi from "@/features/student/classes/config/coursesApi";

//types
import { TClassesTests } from "./types";

export async function getStudentClassesTestsApi(
  course_id: string
): Promise<TClassesTests[]> {
  try {
    const response = await coursesApi.get(
      `/my/active-exams/?course_id=${course_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
