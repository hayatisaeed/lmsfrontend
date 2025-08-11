//API
import api, { requestWrapper } from "@/core/config/api";

//types
import { TVerifyOtpForRegistration } from "./types";

export async function postSendOtpToPhoneApi(phone: string) {
  return requestWrapper(api.post("/api/users/auth/login/", { phone }));
}

export async function postVerifyOtpForRegistrationApi({
  phone,
  code,
}: {
  phone: string;
  code: string;
}) {
  return requestWrapper<TVerifyOtpForRegistration>(
    api.post("/api/users/auth/verify/otp/", { phone, code })
  );
}
