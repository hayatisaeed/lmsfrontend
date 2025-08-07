//react-query
import { useMutation } from "@tanstack/react-query";

//key
import { postStudentEducationKey } from "@/services/tanstack/student/profile/key";

//api
import { postStudentEducationApi } from "@/services/tanstack/student/profile/api";

export function usePostStudentEducation() {
  return useMutation({
    mutationKey: postStudentEducationKey(),
    mutationFn: postStudentEducationApi,
  });
}
