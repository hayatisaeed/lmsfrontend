//import components input
import { PasswordInput } from "@/features/student/profile/components/";

//import types
import { ChangeEvent } from "react";
import { ControllerRenderProps, FieldValues } from "react-hook-form";

interface IChangePasswordItemProps {
  label?: string;
  field: ControllerRenderProps<FieldValues, string>;
  error?: string;
}

export default function ChangePasswordItem({
  label,
  field,
  error,
}: IChangePasswordItemProps) {
  function changePassword(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    field.onChange(value);
  }

  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <h3 className="text-text-primary text-sm">{label}</h3>
      <PasswordInput
        error={!!error}
        onChange={changePassword}
        value={field.value}
      />
      {error && <h3 className="text-errors text-sm">{error}</h3>}
    </div>
  );
}
