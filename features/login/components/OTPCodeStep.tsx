"use client";

// import ui
import { Button } from "@/shared/ui";

// import icons
import { Logout } from "@/assets/icons";

// import components
import { OTPInput } from "@/shared/components/";

// import hook
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

interface IOTPCodeStepProps {
  onCompleteCode: (code: string) => void;
  disabled?: boolean;
  isLoading?: boolean;
  isError?: boolean;
}

export default function OTPCodeStep({
  onCompleteCode,
  disabled,
  isLoading = false,
  isError = false,
}: IOTPCodeStepProps) {
  const isSmUp = useMediaQuery("(min-width: 640px)"); // Tailwind 'sm' breakpoint

  const otpSize = isSmUp ? "LG" : "SM";

  return (
    <div className="w-full flex flex-col gap-5 items-center sm:gap-6">
      <div className="w-full flex flex-col items-center gap-4 sm:gap-5">
        <h3 className="text-text-primary">کد ارسال شده را وارد کنید.</h3>
        <OTPInput
          color="DARK"
          size={otpSize}
          onComplete={onCompleteCode}
          disabled={disabled}
          isError={isError}
        />
      </div>

      <Button
        type="button"
        color="PRIMARY"
        size="XL"
        disabled={disabled}
        loading={isLoading}
        icon={<Logout size="SM" color="LIGHT" />}
      >
        تایید
      </Button>
    </div>
  );
}
