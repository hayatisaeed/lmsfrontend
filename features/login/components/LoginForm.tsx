"use client";
//import hooks
import { useState } from "react";

//import components
import { OTPCodeStep, PhoneStep } from "@/features/login/components/";
import {
  useSendOtpToPhone,
  useVerifyOtpForRegistration,
} from "@/services/tanstack/login/mutation";

export default function LoginForm() {
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [phone, setPhone] = useState("");

  //api
  const { mutate: sendOtpToPhone, isPending: isPendingSendOtpToPhone } =
    useSendOtpToPhone();

  const {
    mutate: verifyOtpForRegistration,
    isPending: isPendingVerifyOtpForRegistration,
  } = useVerifyOtpForRegistration();

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
      disabled={isPendingVerifyOtpForRegistration}
    />
  ) : (
    <PhoneStep
      isPhoneValid={isPhoneValid || isPendingSendOtpToPhone}
      onComplete={handlePhoneComplete}
      onSendCode={handleSendCode}
    />
  );
}
