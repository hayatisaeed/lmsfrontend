//import input
import { InputShow } from "@/features/student/profile/components";

//import types
import { ReactNode } from "react";

interface IPersonalItemProps {
  label?: string;
  icon?: ReactNode;
  value: string;
}

export default function PersonalItem({
  label,
  value,
  icon,
}: IPersonalItemProps) {
  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">{label}</h3>
        {}
      </div>
      <InputShow defaultValue={value} icon={icon} />
    </div>
  );
}
