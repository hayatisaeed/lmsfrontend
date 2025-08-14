"use client";

import { InputEdit } from "@/features/student/profile/components";
import { ReactNode } from "react";

interface IAccountItemProps {
  label?: string;
  icon?: ReactNode;
  value: string;
  labelModal: string;
  sendCode?: boolean;
  id: string;
  mutate?: (value: string, onClose?: () => void) => void;
  isPending?: boolean;
  isNum?: boolean;
  pattern?: RegExp;
  error?: string;
}

export default function EducationItem({
  label,
  labelModal,
  value,
  icon,
  sendCode,
  id: idModal,
  mutate,
  isPending,
  isNum,
  pattern,
  error,
}: IAccountItemProps) {
  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">{label}</h3>
      </div>
      <InputEdit
        mutate={mutate}
        isNum={isNum}
        defaultValue={value}
        label={labelModal}
        icon={icon}
        sendCode={sendCode}
        id={idModal}
        isPending={isPending}
        pattern={pattern}
        error={error}
      />
    </div>
  );
}
