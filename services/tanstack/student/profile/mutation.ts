//react-query
import { useMutation } from "@tanstack/react-query";

//key
import { postStudentIdentityKey } from "@/services/tanstack/student/profile/key";

//api
import { postStudentEducationApi } from "@/services/tanstack/student/profile/api";

export function usePostStudentIdentity() {
  return useMutation({
    mutationKey: postStudentIdentityKey(),
    mutationFn: postStudentEducationApi,
  });
}
