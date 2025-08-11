//React-Query
import { useQuery } from "@tanstack/react-query";

//Key
import { getProfileUserKey } from "./key";

//API
import { getProfileUserApi } from "./api";

export function useGetProfileUser() {
  return useQuery({
    queryKey: getProfileUserKey(),
    queryFn: getProfileUserApi,
  });
}
