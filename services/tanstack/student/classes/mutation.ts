import { useMutation } from "@tanstack/react-query";
import { postEnrollInCourseKey } from "./key";
import { postEnrollInCourseApi } from "./api";

export function usePostEnrollInCourse() {
  return useMutation({
    mutationKey: postEnrollInCourseKey(),
    mutationFn: postEnrollInCourseApi,
  });
}
