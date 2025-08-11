//React-Query
import { useQuery } from "@tanstack/react-query";

//key
import { getStudentIdentityKey } from "./key";

//API
import { getStudentEducationApi } from "./api";

export function useGetStudentIdentity() {
  return useQuery({
    queryKey: getStudentIdentityKey(),
    queryFn: getStudentEducationApi,
  });
}
