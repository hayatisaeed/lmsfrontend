"use client";

//modal
import { Modal } from "@/shared/components/";

//icon
import { PenNewSquare } from "@/assets/icons";

//types
import { ReactNode } from "react";

//window-modal
import WindowMenuItems from "../../modal/WindowMenuItems";

interface IMenuItemsProps {
  defaultValue?: { id: number | string; label: string };
  icon?: ReactNode;
  label: string;
  id: string;
  mutate?: (id: number | string, label: string, onClose?: () => void) => void;
  isPending?: boolean;
  data?: { id: number | string; label: string }[];
}

export default function MenuItems({
  defaultValue,
  icon,
  label,
  id,
  mutate,
  isPending,
  data,
}: IMenuItemsProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3 className={"grow border-0 outline-0"}>{defaultValue?.label || ""}</h3>

      <Modal>
        <Modal.Open id={id}>
          <button type="button" className="cursor-pointer">
            <PenNewSquare size="SM" />
          </button>
        </Modal.Open>

        <Modal.Window id={id}>
          <WindowMenuItems
            defaultValue={defaultValue}
            label={label}
            mutate={mutate}
            isPending={isPending}
            data={data}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}
