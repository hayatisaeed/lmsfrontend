//API
import api from "@/core/config/api";

export async function sendOtpToPhoneApi(phone: string) {
  try {
    const response = await api.post("/api/users/auth/login/otp/", { phone });
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}

export async function verifyOtpForRegistrationApi({
  phone,
  code,
}: {
  phone: string;
  code: string;
}) {
  try {
    const response = await api.post("/api/users/auth/register/", {
      phone,
      code,
    });
    return { success: true, data: response.data };
  } catch (error) {
    console.error(error);
    throw error;
  }
}
