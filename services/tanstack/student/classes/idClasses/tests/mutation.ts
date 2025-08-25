import { useMutation } from "@tanstack/react-query";
import {
  postStudentClassesTestsAttemptsKey,
  postSubmitExampKey,
  putAutoSaveAnswerKey,
} from "./kay";
import {
  postStudentClassesTestsAttemptsApi,
  postSubmitExampApi,
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

export function usePostSubmitExamp() {
  return useMutation({
    mutationKey: postSubmitExampKey(),
    mutationFn: postSubmitExampApi,
  });
}
