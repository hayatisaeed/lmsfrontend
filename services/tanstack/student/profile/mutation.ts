//react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";

//key
import {
  postStudentIdentityKey,
  postStudentEducationKey,
  postStudentParentKey,
  postLocationKey,
  getStudentParentKey,
} from "@/services/tanstack/student/profile/key";

//api
import {
  postStudentIdentityApi,
  postStudentEducationApi,
  postStudentParentApi,
  postLocationApi,
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

export function usePostStudentParent() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: postStudentParentKey(),
    mutationFn: postStudentParentApi,

    onMutate: (phone: string) => {
      const prevParent = queryClient.getQueryData(getStudentParentKey());

      queryClient.setQueryData(getStudentParentKey(), {
        phone,
        relation: "father",
        is_verified: true,
      });

      return { prevParent };
    },

    onError: (_err, _phone, context) => {
      if (context?.prevParent) {
        queryClient.setQueryData(getStudentParentKey(), context.prevParent);
      }
    },
  });
}

export function usePostLocation() {
  return useMutation({
    mutationKey: postLocationKey(),
    mutationFn: postLocationApi,
  });
}
