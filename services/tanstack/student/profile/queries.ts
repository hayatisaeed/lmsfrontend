//React-Query
import { useQuery } from "@tanstack/react-query";

//key
import { getStudentIdentityKey, getStudentEducationKey } from "./key";

//API
import { getStudentIdentityApi, getStudentEducationApi } from "./api";

export function useGetStudentIdentity() {
  return useQuery({
    queryKey: getStudentIdentityKey(),
    queryFn: getStudentIdentityApi,
  });
}

export function useGetStudentEducation() {
  return useQuery({
    queryKey: getStudentEducationKey(),
    queryFn: getStudentEducationApi,
  });
}
