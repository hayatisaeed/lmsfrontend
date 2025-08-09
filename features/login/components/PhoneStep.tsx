"use client";

//import ui
import { Button } from "@/shared/ui";

//import icons
import { Logout } from "@/assets/icons";

//import components login
import { GoogleLoginButton, PhoneInput } from "@/features/login/components/";
import { useState } from "react";

interface IPhoneStepProps {
  isPhoneValid: boolean;
  onComplete: (phone: string) => void;
  onSendCode: () => void;
  isLoading?: boolean;
}

export default function PhoneStep({
  isLoading = false,
  isPhoneValid,
  onComplete,
  onSendCode,
}: IPhoneStepProps) {
  const [loadingGoogle, setLoadingGoogle] = useState<boolean>(false);

  return (
    <div className="w-full flex flex-col gap-5 sm:gap-6">
      <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
        <h3 className="text-text-primary">شماره تلفن خود را وارد کنید.</h3>
        <PhoneInput onComplete={onComplete} />
      </div>
      <div className="w-full flex flex-col sm:flex-row justify-center items-center gap-3">
        <Button
          type="button"
          color="PRIMARY"
          size="XXL"
          disabled={!isPhoneValid || isLoading}
          onClick={onSendCode}
          icon={<Logout size="SM" color="LIGHT" />}
          loading={isLoading}
        >
          ارسال رمز یکبار مصرف
        </Button>
        <GoogleLoginButton
          disabeld={isLoading}
          loadingGoogle={loadingGoogle}
          setLoadingGoogle={setLoadingGoogle}
        />
      </div>
    </div>
  );
}
