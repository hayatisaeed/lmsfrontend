//React-Query
import { useQuery } from "@tanstack/react-query";

//key
import {
  getEducationalLevelsKey,
  getEducationKey,
  getLocationKey,
  getOlympiadsKey,
  getScrolTypeKey,
  getStudentProfileKey,
  getStudyBranchesKey,
} from "./key";

//API
import {
  getEducationalLevelsApi,
  getEducationApi,
  getLocationApi,
  getOlympiadsApi,
  getScrolTypeApi,
  getStudentProfileApi,
  getStudyBranchesApi,
} from "./api";

export function useGetStudentProfile() {
  return useQuery({
    queryKey: getStudentProfileKey(),
    queryFn: getStudentProfileApi,
  });
}

export function useGetOlympiads() {
  return useQuery({
    queryKey: getOlympiadsKey(),
    queryFn: getOlympiadsApi,
    select: (items) => items.map((item) => ({ id: item.id, label: item.name })),
  });
}

export function useGetLocation(id?: number | string) {
  return useQuery({
    queryKey: getLocationKey(id),
    queryFn: () => getLocationApi(id),
    select: (items) => items.map((item) => ({ id: item.id, label: item.name })),
  });
}

export function useGetScrollType() {
  return useQuery({
    queryKey: getScrolTypeKey(),
    queryFn: getScrolTypeApi,
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

export function useGetStudyBranches(id?: number | string) {
  return useQuery({
    queryKey: getStudyBranchesKey(id),
    queryFn: () => getStudyBranchesApi(id),
    select: (items) => items.map((item) => ({ id: item.id, label: item.name })),
    enabled: !!id,
  });
}

export function useGetEducation() {
  return useQuery({ queryKey: getEducationKey(), queryFn: getEducationApi });
}
