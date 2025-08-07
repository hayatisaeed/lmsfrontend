//react-query
import { useMutation } from "@tanstack/react-query";

//key
import {
  postSendOtpToPhoneKey,
  postVerifyOtpForRegistrationKey,
} from "@/services/tanstack/login/key";

//api
import {
  postSendOtpToPhoneApi,
  postVerifyOtpForRegistrationApi,
} from "@/services/tanstack/login/api";

export function usePostSendOtpToPhone() {
  return useMutation({
    mutationKey: postSendOtpToPhoneKey(),
    mutationFn: postSendOtpToPhoneApi,
  });
}

export function usePostVerifyOtpForRegistration() {
  return useMutation({
    mutationKey: postVerifyOtpForRegistrationKey(),
    mutationFn: postVerifyOtpForRegistrationApi,
  });
}
