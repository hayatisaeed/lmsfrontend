"use client";

import clsx from "clsx";
//types
import { ReactNode } from "react";

interface IInputShowProps {
  value: string;
  icon?: ReactNode;
  isNum?: boolean;
}

export default function InputShow({
  value,
  icon,
  isNum = false,
}: IInputShowProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3
        className={clsx(
          "grow border-0 outline-0",
          isNum ? "font-shabnam" : "font-kalameh"
        )}
      >
        {value}
      </h3>
    </div>
  );
}
