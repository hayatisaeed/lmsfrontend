import { useMutation } from "@tanstack/react-query";
import {
  postStudentClassesTestsAttemptsKey,
  putAutoSaveAnswerKey,
} from "./kay";
import {
  postStudentClassesTestsAttemptsApi,
  putAutoSaveAnswerApi,
} from "./api";

export function usePostStudentClassesTestsAttempts() {
  return useMutation({
    mutationKey: postStudentClassesTestsAttemptsKey(),
    mutationFn: postStudentClassesTestsAttemptsApi,
  });
}

export function usePutAutoSaveAnswer() {
  return useMutation({
    mutationKey: putAutoSaveAnswerKey(),
    mutationFn: putAutoSaveAnswerApi,
  });
}
