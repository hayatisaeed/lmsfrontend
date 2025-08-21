import { useQuery } from "@tanstack/react-query";
import { getUserProfileKey } from "./key";
import { getUserProfileApi } from "./api";

export function useGetUserProfile() {
  return useQuery({
    queryKey: getUserProfileKey(),
    queryFn: getUserProfileApi,
  });
}
