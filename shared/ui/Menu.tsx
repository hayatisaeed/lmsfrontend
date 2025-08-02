"use client";

import { useState } from "react";
import { DropDown } from "@/shared/components";

interface IMenuProps {
  label: string;
  options?: { id: number; label: string }[];
  value?: { id: number; label: string };
  onChange: (item: { id: number; label: string }) => void;
  disabled?: boolean;
}

export default function Menu({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
}: IMenuProps) {
  const [select, setSelect] = useState<
    { id: number; label: string } | undefined
  >(value);

  function handleClickItem(item: { id: number; label: string }) {
    setSelect(item);
    onChange(item);
  }

  return (
    <>
      <DropDown.Window id="provinces">
        {options.map((item) => (
          <DropDown.Item onClick={() => handleClickItem(item)} key={item.id}>
            {item.label}
          </DropDown.Item>
        ))}
      </DropDown.Window>
      <DropDown.Toggler id="provinces">
        <input
          value={select?.label || label}
          disabled={disabled}
          className="
        p-4 
        rounded-xl 
        bg-white-primary 
        border 
        border-text-primary/50 
        outline-none  
        text-text-primary
        w-full
        cursor-pointer
        transition
        "
          type="text"
          readOnly
        />
      </DropDown.Toggler>
    </>
  );
}
