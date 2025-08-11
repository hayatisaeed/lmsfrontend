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
      },
    });
  }

  function handleCodeComplete(code: number) {
    verifyOtpForRegistration(
      { phone, code: String(code) },
      {
        onSuccess: (data) => {
          localStorage.setItem("access_token", data.access);
          localStorage.setItem("refresh_token", data.refresh);
          console.log(data);

          router.push("/");
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
