//API
import api from "@/core/config/api/api";

//types
import { TVerifyOtpForRegistration } from "./types";

export async function postSendOtpToPhoneApi(phone: string) {
  try {
    const response = await api.post("/auth/request-otp", { phone });
    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function postVerifyOtpForRegistrationApi({
  phone,
  code,
}: {
  phone: string;
  code: string;
}): Promise<TVerifyOtpForRegistration> {
  try {
    const response = await api.post("/auth/request-otp", {
      phone,
      code,
    });

    return response.data;
  } catch (error) {
    console.error(error);
    throw error;
  }
}
