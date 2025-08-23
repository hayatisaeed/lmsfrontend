import { useQuery } from "@tanstack/react-query";
import { getCoursesKey } from "./type";
import { getCoursesApi } from "./api";

export function useGetCourses() {
  return useQuery({ queryKey: getCoursesKey(), queryFn: getCoursesApi });
}
