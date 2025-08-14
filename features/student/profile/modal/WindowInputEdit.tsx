"use client";

import { useModal } from "@/shared/components/Modal";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { Button } from "@/shared/ui";
import clsx from "clsx";
import { useEffect, useRef, useState, ChangeEvent, ReactNode } from "react";

interface IWindowInputEditProps {
  defaultValue: string;
  icon?: ReactNode;
  label: string;
  sendCode?: boolean;
  onClose?: () => void;
  id: string;
  muate?: (value: string, onClose?: () => void) => void;
  isPending?: boolean;
  isNum?: boolean;
  pattern?: RegExp;
  error?: string;
}

export default function WindowInputEdit({
  defaultValue,
  label,
  icon,
  sendCode = true,
  onClose,
  id,
  muate,
  isPending = false,
  isNum = false,
  pattern = /.*/,
  error: errorText,
}: IWindowInputEditProps) {
  const [value, setValue] = useState<string>(defaultValue);
  const [error, setError] = useState<string>("");

  const { open } = useModal();
  const refInput = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    refInput.current?.focus();
  }, []);

  const isSmUp = useMediaQuery("(min-width: 640px)");

  function changeValue(e: ChangeEvent<HTMLInputElement>) {
    let { value } = e.target;
    if (isNum) value = value.replace(/\D/g, "");
    setValue(value);
  }

  async function handleClickEnter() {
    if (pattern.test(value)) {
      setError("");
      muate?.(value, onClose);

      if ((id === "email" || id === "phone") && isPending === false) {
        setTimeout(() => {
          open(`verify-code`);
        }, 250);
      }
    } else {
      setError(`فرمت ${errorText} وارد شده صحیح نمی باشد.`);
    }
  }

  function handleClickCancel() {
    onClose?.();
  }

  return (
    <div className="flex flex-col justify-start gap-3 sm:w-[420px]">
      <h3 className="text-text-primary font-semibold mb-2">{label}</h3>
      <div className="flex justify-between items-center gap-1 w-full bg-box-primary p-4 rounded-2xl">
        <input
          type="text"
          className={clsx(
            "outline-0 border-0",
            isNum ? "font-shabnam" : "font-kalameh"
          )}
          value={value}
          ref={refInput}
          onChange={changeValue}
        />
        {icon}
      </div>
      <h3 className="text-sm text-errors">{error}</h3>
      <div className="flex justify-start gap-2">
        <Button
          color="PRIMARY"
          size={isSmUp ? "MD" : "SM"}
          loading={isPending}
          disabled={isPending}
          onClick={handleClickEnter}
        >
          {sendCode ? "ارسال کد تایید" : "ثبت"}
        </Button>
        <Button
          color="SECONDARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickCancel}
          disabled={isPending}
        >
          انصراف
        </Button>
      </div>
    </div>
  );
}
