import { useMutation } from "@tanstack/react-query";
import { postStupostdentClassesTestsAttemptsKey } from "./kay";
import { postStupostdentClassesTestsAttemptsApi } from "./api";

export function usePostStupostdentClassesTestsAttempts() {
  return useMutation({
    mutationKey: postStupostdentClassesTestsAttemptsKey(),
    mutationFn: postStupostdentClassesTestsAttemptsApi,
  });
}
