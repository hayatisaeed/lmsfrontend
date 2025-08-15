//React-Query
import { useQuery } from "@tanstack/react-query";

//key
import {
  getStudentIdentityKey,
  getStudentEducationKey,
  getStatesKey,
  getCitiesKey,
} from "./key";

//API
import {
  getStudentIdentityApi,
  getStudentEducationApi,
  getStatesApi,
  getCitiesApi,
} from "./api";

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

export function useGetStates() {
  return useQuery({
    queryKey: getStatesKey(),
    queryFn: getStatesApi,
  });
}

export function useGetCities(id?: number) {
  return useQuery({
    queryKey: getCitiesKey(id),
    queryFn: () => getCitiesApi(id),
    enabled: !!id,
  });
}
