//React-Query
import { useQuery } from "@tanstack/react-query";

//key
import {
  getStudentIdentityKey,
  getStudentEducationKey,
  getLocationKey,
  getOlympiadsKey,
  getEducationalLevelsKey,
  getStudyBranchesKey,
  getStudentParentKey,
  getScrolTypeKey,
} from "./key";

//API
import {
  getStudentIdentityApi,
  getStudentEducationApi,
  getLocationApi,
  getOlympiadsApi,
  getEducationalLevelsApi,
  getStudyBranchesApi,
  getStudentParentApi,
  getScrolTypeApi,
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

export function useGetStudentParent() {
  return useQuery({
    queryKey: getStudentParentKey(),
    queryFn: getStudentParentApi,
  });
}

export function useGetLocation(id?: number) {
  return useQuery({
    queryKey: getLocationKey(id),
    queryFn: () => getLocationApi(id),
  });
}

export function useGetOlympiads() {
  return useQuery({
    queryKey: getOlympiadsKey(),
    queryFn: getOlympiadsApi,
    select: (items) => items.map((item) => ({ id: item.id, label: item.name })),
  });
}

export function useGetEducationalLevels() {
  return useQuery({
    queryKey: getEducationalLevelsKey(),
    queryFn: getEducationalLevelsApi,
    select: (items) => items.map((item) => ({ id: item.id, label: item.name })),
  });
}

export function useGetStudyBranches(id?: number) {
  return useQuery({
    queryKey: getStudyBranchesKey(id),
    queryFn: () => getStudyBranchesApi(id),
    select: (items) => items.map((item) => ({ id: item.id, label: item.name })),
    enabled: !!id,
  });
}

export function useGetScrollType() {
  return useQuery({ queryKey: getScrolTypeKey(), queryFn: getScrolTypeApi });
}
