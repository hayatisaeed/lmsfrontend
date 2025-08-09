"use client";
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

  //api
  const { mutate: sendOtpToPhone, isPending: isPendingSendOtpToPhone } =
    usePostSendOtpToPhone();

  const {
    mutate: verifyOtpForRegistration,
    isPending: isPendingVerifyOtpForRegistration,
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
    verifyOtpForRegistration({ phone, code: String(code) });
  }

  return isCodeSent ? (
    <OTPCodeStep
      onCompleteCode={handleCodeComplete}
      disabled={isPendingVerifyOtpForRegistration || isPendingSendOtpToPhone}
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
