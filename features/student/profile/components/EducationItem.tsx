//import input
import { InputEdit } from "@/features/student/profile/components";

//import types
import { ReactNode } from "react";

//import id modal
import { id } from "@/features/student/profile/types/idModal";

interface IAccountItemProps {
  label?: string;
  icon?: ReactNode;
  value: string;
  labelModal: string;
  sendCode?: boolean;
  id: id;
}

export default function EducationItem({
  label,
  labelModal,
  value,
  icon,
  sendCode,
  id: idModal,
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
        id={idModal}
      />
    </div>
  );
}
