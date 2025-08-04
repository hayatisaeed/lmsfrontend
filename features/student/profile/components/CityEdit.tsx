"use client";

//import modal
import { Modal } from "@/shared/components/";

//import icons
import { PenNewSquare } from "@/assets/icons";

//import types
import { ReactNode } from "react";

//input window modal

import WindowMenuCities from "../modal/WindowMenuCities";

interface IInputEditProps {
  defaultValue?: { id: number; label: string };
  icon?: ReactNode;
}

export default function CityEdit({ defaultValue, icon }: IInputEditProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3 className="grow border-0 outline-0 ">{defaultValue?.label}</h3>
      <Modal>
        <Modal.Open id="edit-input-city">
          <button type="button" className="cursor-pointer">
            <PenNewSquare size="SM" />
          </button>
        </Modal.Open>

        <Modal.Window id="edit-input-city">
          <WindowMenuCities label="محل سکونت خود را وارد کنید" />
        </Modal.Window>
      </Modal>
    </div>
  );
}
