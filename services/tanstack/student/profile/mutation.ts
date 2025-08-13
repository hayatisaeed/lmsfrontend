//react-query
import { useMutation } from "@tanstack/react-query";

//key
import {
  postStudentIdentityKey,
  postStudentEducationKey,
} from "@/services/tanstack/student/profile/key";

//api
import {
  postStudentIdentityApi,
  postStudentEducationApi,
} from "@/services/tanstack/student/profile/api";

export function usePostStudentIdentity() {
  return useMutation({
    mutationKey: postStudentIdentityKey(),
    mutationFn: postStudentIdentityApi,
  });
}

export function usePostStudentEducation() {
  return useMutation({
    mutationKey: postStudentEducationKey(),
    mutationFn: postStudentEducationApi,
  });
}
