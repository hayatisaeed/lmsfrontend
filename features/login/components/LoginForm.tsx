"use client";

//Next
import { useRouter } from "next/navigation";

//React
import { useState } from "react";

//Cumponents Custom
import { OTPCodeStep, PhoneStep } from "@/features/login/components/";

//react-query
import {
  usePostSendOtpToPhone,
  usePostVerifyOtpForRegistration,
} from "@/services/tanstack/login/mutation";

//toast
import toast from "react-hot-toast";

//token
import { setAccessToken } from "@/core/utils/token";

export default function LoginForm() {
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);

  const [phone, setPhone] = useState("");

  const router = useRouter();

  //api
  const { mutate: sendOtpToPhone, isPending: isPendingSendOtpToPhone } =
    usePostSendOtpToPhone();

  const {
    mutate: verifyOtpForRegistration,
    isPending: isPendingVerifyOtpForRegistration,
    isError: isErrorVerifyOtpForRegistration,
  } = usePostVerifyOtpForRegistration();

  function handlePhoneComplete(phone: string) {
    setPhone(phone);
    setIsPhoneValid(true);
  }

  async function handleSendCode() {
    sendOtpToPhone(phone, {
      onSuccess: () => {
        setIsCodeSent(true);
        toast.success("کد تایید با موفقیت برای شما ارسال شد.");
      },
      onError: () => {
        toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
      },
    });
  }

  function handleCodeComplete(code: string) {
    verifyOtpForRegistration(
      { phone, code: String(code) },
      {
        onSuccess: (data) => {
          toast.success("ورود شما با موفقیت انجام شد.");

          setAccessToken(data.access_token, data.access_expires_in * 1000);

          router.push("/");
        },
        onError: (err) => {
          console.log(err.message === "Request failed with status code 400");

          if (err.message === "Request failed with status code 400") {
            toast.error("کد وارد شده صحیح نمی باشد.");
            return;
          }
          toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
        },
      }
    );
  }

  return isCodeSent ? (
    <OTPCodeStep
      onCompleteCode={handleCodeComplete}
      disabled={isPendingVerifyOtpForRegistration || isPendingSendOtpToPhone}
      isLoading={isPendingVerifyOtpForRegistration}
      isError={isErrorVerifyOtpForRegistration}
    />
  ) : (
    <PhoneStep
      isPhoneValid={isPhoneValid || isPendingVerifyOtpForRegistration}
      isLoading={isPendingSendOtpToPhone}
      onComplete={handlePhoneComplete}
      onSendCode={handleSendCode}
    />
  );
}
