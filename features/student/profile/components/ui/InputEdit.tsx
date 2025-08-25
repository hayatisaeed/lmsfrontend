"use client";

import { Modal } from "@/shared/components/";
import { PenNewSquare } from "@/assets/icons";
import { ReactNode } from "react";
import {
  WindowInputOTP,
  WindowInputEdit,
} from "@/features/student/profile/modal/";
import clsx from "clsx";

interface IInputEditProps {
  defaultValue: string;
  icon?: ReactNode;
  label: string;
  sendCode?: boolean;
  id: string;
  mutate?: (value: string, onClose?: () => void) => void;
  isPending?: boolean;
  isNum?: boolean;
  pattern?: RegExp;
  error?: string;
  readOnly?: boolean;
}

export default function InputEdit({
  defaultValue,
  icon,
  label,
  sendCode,
  id,
  mutate,
  isPending,
  isNum = false,
  pattern,
  error,
  readOnly = false,
}: IInputEditProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3
        className={clsx(
          "grow border-0 outline-0",
          isNum ? "font-shabnam" : "font-kalameh"
        )}
      >
        {defaultValue}
      </h3>

      {readOnly || (
        <Modal>
          <Modal.Open id={id}>
            <button type="button" className="cursor-pointer">
              <PenNewSquare size="SM" />
            </button>
          </Modal.Open>

          <Modal.Window id={id}>
            <WindowInputEdit
              sendCode={sendCode}
              defaultValue={defaultValue}
              label={label}
              icon={icon}
              id={id}
              muate={mutate}
              isPending={isPending}
              isNum={isNum}
              pattern={pattern}
              error={error}
            />
          </Modal.Window>

          {sendCode && (
            <Modal.Window id="input-otp">
              <WindowInputOTP
              // onSubmit={(otp) => {
              //   console.log("OTP وارد شده:", otp);
              // }}
              // isPending={isPending}
              />
            </Modal.Window>
          )}
        </Modal>
      )}
    </div>
  );
}
