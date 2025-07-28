"use client";

//import ui
import { Button } from "@/shared/ui";

//import icons
import { Logout } from "@/shared/icons";

//import components
import OTPInput from "@/shared/components/OTPInput";

interface IOTPCodeStepProps {
  onCompleteCode: (code: number) => void;
}

export default function OTPCodeStep({ onCompleteCode }: IOTPCodeStepProps) {
  return (
    <div className="w-full flex flex-col gap-5 items-center sm:gap-6">
      <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
        <h3 className="text-text-primary">کد ارسال شده را وارد کنید.</h3>
        <OTPInput color="DARK" size="LG" onComplete={onCompleteCode} />
      </div>

      <Button
        type="button"
        color="PRIMARY"
        size="XXL"
        icon={<Logout size="SM" color="LIGHT" />}
      >
        تایید
      </Button>
    </div>
  );
}
