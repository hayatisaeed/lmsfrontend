//react-query
import { useMutation, useQueryClient } from "@tanstack/react-query";

//key
import {
  postLocationKey,
  postStudentIdentityKey,
  postStudentParentKey,
  putStudentEducationKey,
  putStudentProfileKey,
} from "@/services/tanstack/student/profile/key";

//api

import {
  postLocationApi,
  postStudentIdentityApi,
  postStudentParentApi,
  putStudentEducationApi,
  putStudentProfileApi,
} from "@/services/tanstack/student/profile/api";

export function usePostStudentIdentity() {
  return useMutation({
    mutationKey: postStudentIdentityKey(),
    mutationFn: postStudentIdentityApi,
  });
}

export function usePutStudentEducation() {
  return useMutation({
    mutationKey: putStudentEducationKey(),
    mutationFn: putStudentEducationApi,
  });
}

export function usePostLocation() {
  return useMutation({
    mutationKey: postLocationKey(),
    mutationFn: postLocationApi,
  });
}

export function usePostStudentParent() {
  return useMutation({
    mutationKey: postStudentParentKey(),
    mutationFn: postStudentParentApi,
  });
}

export function usePutStudentProfile() {
  return useMutation({
    mutationFn: putStudentProfileApi,
    mutationKey: putStudentProfileKey(),
  });
}
