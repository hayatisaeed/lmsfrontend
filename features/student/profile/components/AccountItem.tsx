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
}

export default function AccountItem({
  label,
  type,
  labelModal,
  value,
  icon,
  sendCode,
  id,
}: IAccountItemProps) {
  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">{label}</h3>
        {}
      </div>
      <InputEdit
        defaultValue={value}
        label={labelModal}
        icon={icon}
        sendCode={sendCode}
        id={id}
      />
    </div>
  );
}
