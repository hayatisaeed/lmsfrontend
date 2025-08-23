import { useQuery } from "@tanstack/react-query";
import { getUserSessionKey } from "./key";
import { getUserSessionApi } from "./api";

export function useGetUserSession() {
  return useQuery({
    queryKey: getUserSessionKey(),
    queryFn: getUserSessionApi,
  });
}
