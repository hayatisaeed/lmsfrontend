"use client";

import { useModal } from "@/shared/components/Modal";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { Button } from "@/shared/ui";
import { ChangeEvent, ReactNode, useEffect, useRef, useState } from "react";

interface IWindowInputEditProps {
  defaultValue: string;
  icon?: ReactNode;
  label: string;
  sendCode?: boolean;
  onClose?: () => void;
  id: string;
}

export default function WindowInputEdit({
  defaultValue,
  label,
  icon,
  sendCode = true,
  onClose,
  id,
}: IWindowInputEditProps) {
  const [value, setValue] = useState<string>(defaultValue);
  const { open } = useModal();
  const refInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    refInput.current?.focus();
  }, []);

  const isSmUp = useMediaQuery("(min-width: 640px)");

  function changeValue(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setValue(value);
  }

  async function handleClickEnter() {
    onClose?.();

    if (id === "email" || id === "phone") {
      setTimeout(() => {
        open(`verify-code`);
      }, 250);
    }
  }

  function handleClickCancel() {
    onClose?.();
  }

  return (
    <div className="flex flex-col justify-start gap-5 sm:w-[420px]">
      <h3 className="text-text-primary font-semibold">{label}</h3>
      <div className="flex justify-between items-center gap-1 w-full bg-box-primary p-4 rounded-2xl">
        <input
          type="text"
          className="outline-0 border-0"
          value={value}
          ref={refInput}
          onChange={changeValue}
        />
        {icon}
      </div>
      <div className="flex justify-start gap-2">
        <Button
          color="PRIMARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickEnter}
        >
          {sendCode ? "ارسال کد تایید" : "ثبت"}
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
