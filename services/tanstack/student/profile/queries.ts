//react-query
import { useQuery } from "@tanstack/react-query";

//key
import { getStudentEducationKey } from "@/services/tanstack/student/profile/key";

//api
import { getStudentEducationApi } from "@/services/tanstack/student/profile/api";

export function useGetStudentEducation() {
  return useQuery({
    queryKey: getStudentEducationKey(),
    queryFn: getStudentEducationApi,
  });
}
