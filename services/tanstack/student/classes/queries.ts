import { useQuery } from "@tanstack/react-query";
import { getCourseItemKey, getCoursesKey } from "./key";
import { getCourseItemApi, getCoursesApi } from "./api";

export function useGetCourses() {
  return useQuery({ queryKey: getCoursesKey(), queryFn: getCoursesApi });
}

export function useGetCourseItem(course_id: string) {
  return useQuery({
    queryKey: getCourseItemKey(course_id),
    queryFn: () => getCourseItemApi(course_id),
  });
}
