"use client";

import clsx from "clsx";
import { FC, useState } from "react";
import { COLORS, SIZES } from "../constant/icons";

interface IBoxSelectProps {
  items: {
    label: string;
    value: string;
    icon?: FC<{ size?: keyof typeof SIZES; color?: keyof typeof COLORS }>;
  }[];
  onComplete: (value: string) => void;
}

export default function BoxSelect({ items, onComplete }: IBoxSelectProps) {
  const [value, setValue] = useState("");

  function handleChangeValue(newValue: string) {
    setValue(newValue);
    onComplete(newValue);
  }

  return (
    <div className="p-2 gap-2 bg-primary flex flex-col md:flex-row rounded-xl">
      {items.map((item) => {
        const isSelected = item.value === value;
        return (
          <button
            key={item.value}
            type="button"
            className={clsx(
              "flex-1 min-w-0",
              "flex items-center justify-start md:justify-center gap-2",
              "py-3 px-3 rounded-lg",
              "transition-colors duration-200",
              isSelected
                ? "bg-white-primary text-text-primary cursor-default"
                : "bg-primary text-white-primary hover:bg-primary-dark cursor-pointer"
            )}
            onClick={() => handleChangeValue(item.value)}
          >
            {item.icon && (
              <item.icon size="SM" color={isSelected ? "DARK" : "LIGHT"} />
            )}
            <span className="truncate">{item.label}</span>
          </button>
        );
      })}
    </div>
  );
}
