import { OTPInput } from "@/shared/components";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { Button } from "@/shared/ui";
import { useState } from "react";

interface IWindowInputOTPProps {
  onClose?: () => void;
}

export default function WindowInputOTP({ onClose }: IWindowInputOTPProps) {
  const [code, setCode] = useState<string>("");

  const isSmUp = useMediaQuery("(min-width: 640px)");

  function onComplete(code: number) {
    setCode(String(code));
  }

  async function handleClickEnter() {
    console.log(code);

    onClose?.();
  }

  function handleClickCancel() {
    onClose?.();
  }

  return (
    <div className="flex flex-col justify-start gap-5 sm:w-[420px]">
      <h3 className="text-text-primary font-semibold">
        کد ارسال شده را وارد کنید.
      </h3>
      <div className="flex w-full justify-center">
        <OTPInput
          color="PRIMARY"
          size={isSmUp ? "LG" : "SM"}
          onComplete={onComplete}
        />
      </div>

      <div className="flex justify-start gap-2">
        <Button
          color="PRIMARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickEnter}
        >
          تایید کد
        </Button>
        <Button
          color="SECONDARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickCancel}
        >
          انصراف
        </Button>
      </div>
    </div>
  );
}
