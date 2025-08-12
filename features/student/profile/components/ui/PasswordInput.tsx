"use client";

//import hooks
import { useState } from "react";

//import types
import { InputHTMLAttributes } from "react";

//import icons
import { Eye, EyeClosed, Key } from "@/assets/icons";

interface IPasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  error?: boolean;
}

export default function PasswordInput({
  error,
  placeholder,
  ...props
}: IPasswordInputProps) {
  const [show, setShow] = useState<boolean>(false);

  function toggleShow() {
    setShow(!show);
  }

  return (
    <div
      className={`flex justify-between items-center gap-2 p-4 rounded-2xl bg-white-primary ${
        error ? "border-errors border-2" : "border border-text-primary/50"
      }`}
    >
      <Key size="SM" />
      <input
        type={show ? "text" : "password"}
        onCopy={(e) => e.preventDefault()}
        onCut={(e) => e.preventDefault()}
        onPaste={(e) => e.preventDefault()}
        onContextMenu={(e) => e.preventDefault()}
        className="grow border-0 outline-0 "
        {...props}
        placeholder={placeholder}
      />
      <button type="button" onClick={toggleShow} className="cursor-pointer">
        {!show ? (
          <Eye color="DARK" size="SM" />
        ) : (
          <EyeClosed color="DARK" size="SM" />
        )}
      </button>
    </div>
  );
}
