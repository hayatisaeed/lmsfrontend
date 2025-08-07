//react-query
import { useMutation } from "@tanstack/react-query";

//key
import {
  sendOtpToPhoneKey,
  verifyOtpForRegistrationKey,
} from "@/services/tanstack/login/key";

//api
import {
  sendOtpToPhoneApi,
  verifyOtpForRegistrationApi,
} from "@/services/tanstack/login/api";

export function useSendOtpToPhone() {
  return useMutation({
    mutationKey: sendOtpToPhoneKey(),
    mutationFn: sendOtpToPhoneApi,
  });
}

export function useVerifyOtpForRegistration() {
  return useMutation({
    mutationKey: verifyOtpForRegistrationKey(),
    mutationFn: verifyOtpForRegistrationApi,
  });
}
