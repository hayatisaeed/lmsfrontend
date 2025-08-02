"use client";

//import types
import { ReactNode } from "react";

interface IInputShowProps {
  defaultValue: string;
  icon?: ReactNode;
}

export default function InputShow({ defaultValue, icon }: IInputShowProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3 className="grow border-0 outline-0 ">{defaultValue}</h3>
    </div>
  );
}
