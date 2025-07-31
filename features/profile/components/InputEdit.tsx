"use client";

//import modal
import Modal from "@/shared/components/Modal";

//import icons
import { PenNewSquare } from "@/shared/icons";

//import types
import { ReactNode } from "react";
import { id } from "@/features/profile/types/idModal";

//input window modal
import { WindowInputOTP, WindowInputEdit } from "@/features/profile/modal/";

interface IInputEditProps {
  defaultValue: string;
  icon?: ReactNode;
  label: string;
  sendCode?: boolean;
  id: id;
}

export default function InputEdit({
  defaultValue,
  icon,
  label,
  sendCode,
  id: idModal,
}: IInputEditProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3 className="grow border-0 outline-0 ">{defaultValue}</h3>

      <Modal.Open id={`edit-input-${idModal}`}>
        <button type="button" className=" cursor-pointer">
          <PenNewSquare size="SM" />
        </button>
      </Modal.Open>

      <Modal.Window id={`edit-input-${idModal}`}>
        <WindowInputEdit
          sendCode={sendCode}
          defaultValue={defaultValue}
          label={label}
          icon={icon}
          id={idModal as Exclude<id, "name">}
        />
      </Modal.Window>

      <Modal.Window id={`verify-code-${idModal as Exclude<id, "name">}`}>
        <WindowInputOTP />
      </Modal.Window>
    </div>
  );
}
