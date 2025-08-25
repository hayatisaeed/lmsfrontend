//import input
import { InputEdit } from "@/features/student/profile/components";

//import types
import { ReactNode } from "react";

interface IAccountItemProps {
  label?: string;
  type?: "none" | "reject" | "pendding";
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
  readOnly?: boolean;
}

export default function AccountItem({
  readOnly = false,
  label,
  type,
  labelModal,
  value,
  icon,
  sendCode,
  id,
  error,
  isNum,
  isPending,
  mutate,
  pattern,
}: IAccountItemProps) {
  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">{label}</h3>
      </div>
      {
        <InputEdit
          readOnly={readOnly}
          defaultValue={value}
          label={labelModal}
          icon={icon}
          sendCode={sendCode}
          id={id}
          isPending={isPending}
          pattern={pattern}
          error={error}
          isNum={isNum}
          mutate={mutate}
        />
      }
    </div>
  );
}
