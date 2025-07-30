"use client";

//import modal
import Modal from "@/shared/components/Modal";

//import icons
import { PenNewSquare } from "@/shared/icons";

//import types
import { ReactNode } from "react";

//input window modal
import { WindowInputOTP, WindowInputEdit } from "@/features/dashboard/modal/";

interface IInputEditProps {
  defaultValue: string;
  icon?: ReactNode;
  label: string;
}

export default function InputEdit({
  defaultValue,
  icon,
  label,
}: IInputEditProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-2xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3 className="grow border-0 outline-0 ">{defaultValue}</h3>

      <Modal.Open id="edit-input">
        <button type="button" className=" cursor-pointer">
          <PenNewSquare />
        </button>
      </Modal.Open>

      <Modal.Window id="edit-input">
        <WindowInputEdit
          defaultValue={defaultValue}
          label={label}
          icon={icon}
        />
      </Modal.Window>

      <Modal.Window id="verify-code">
        <WindowInputOTP />
      </Modal.Window>
    </div>
  );
}
