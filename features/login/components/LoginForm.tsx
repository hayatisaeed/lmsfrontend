"use client";
//import hooks
import { useState } from "react";

//import components
import { OTPCodeStep, PhoneStep } from "@/features/login/components/";

export default function LoginForm() {
  const [isPhoneValid, setIsPhoneValid] = useState(false);
  const [isCodeSent, setIsCodeSent] = useState(false);
  const [phone, setPhone] = useState("");

  function handlePhoneComplete(phone: string) {
    setPhone(phone);
    setIsPhoneValid(true);
  }

  async function handleSendCode() {
    setIsCodeSent(true);
    await fetch("api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ phone }),
    });
  }

  function handleCodeComplete(code: number) {
    console.log(code);
  }

  return isCodeSent ? (
    <OTPCodeStep onCompleteCode={handleCodeComplete} />
  ) : (
    <PhoneStep
      isPhoneValid={isPhoneValid}
      onComplete={handlePhoneComplete}
      onSendCode={handleSendCode}
    />
  );
}
