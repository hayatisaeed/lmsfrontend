import { useQuery } from "@tanstack/react-query";

//keys
import { getExamsAttemptsKey, getStudentClassesTestsKey } from "./kay";

//api
import { getExamsAttemptsApi, getStudentClassesTestsApi } from "./api";

export function useGetStudentClassesTests(course_id: string) {
  return useQuery({
    queryKey: getStudentClassesTestsKey(course_id),
    queryFn: () => getStudentClassesTestsApi(course_id),
  });
}

export function useGetExamsAttempts(attempt_id: string) {
  return useQuery({
    queryKey: getExamsAttemptsKey(attempt_id),
    queryFn: () => getExamsAttemptsApi(attempt_id),
    enabled: false,
  });
}
