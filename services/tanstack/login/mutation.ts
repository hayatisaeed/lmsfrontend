//react-query
import { useMutation } from "@tanstack/react-query";

//key
import {
  postLogoutKey,
  postSendOtpToPhoneKey,
  postVerifyOtpForRegistrationKey,
} from "@/services/tanstack/login/key";

//api
import {
  postLogoutApi,
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

export function usePostLogout() {
  return useMutation({
    mutationKey: postLogoutKey(),
    mutationFn: postLogoutApi,
  });
}
