//types
import api from "@/core/config/api/apiClient";
import { TClassesTests } from "./types";

export async function getStudentClassesTestsApi(
  course_id: string
): Promise<TClassesTests[]> {
  try {
    const response = await api.get(
      `/api/v1/courses/my/active-exams/?course_id=${course_id}`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postStupostdentClassesTestsAttemptsApi({
  course_id,
  exam_id,
}: {
  course_id: string;
  exam_id: string;
}): Promise<TClassesTests[]> {
  try {
    const response = await api.get(
      `/api/v1/courses/${course_id}/exams/${exam_id}/attempts/start/
`
    );
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
