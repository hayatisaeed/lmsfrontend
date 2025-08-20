import { useQuery } from "@tanstack/react-query";

//keys
import { getStudentClassesTestsKey } from "./kay";

//api
import { getStudentClassesTestsApi } from "./api";

export function useGetStudentClassesTests(course_id: string) {
  return useQuery({
    queryKey: getStudentClassesTestsKey(course_id),
    queryFn: () => getStudentClassesTestsApi(course_id),
  });
}
