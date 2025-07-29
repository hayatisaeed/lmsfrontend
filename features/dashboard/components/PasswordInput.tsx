"use client";

//import hooks
import { useState } from "react";

//import types
import { ChangeEvent } from "react";

//import icons
import { Eye, EyeClosed, Key } from "@/shared/icons";

interface IPasswordInputProps {
  placeholder?: string;
  label?: string;
  error?: boolean;
}

export default function PasswordInput({
  error,
  placeholder,
  label,
}: IPasswordInputProps) {
  const [show, setShow] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  function toggleShow() {
    setShow(!show);
  }

  function changePassword(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setPassword(value);
  }

  return (
    <div className="flex flex-col justify-start gap-5">
      <h3 className="text-text-primary">{label}</h3>
      <div
        className={`flex justify-between items-center gap-2 p-4 rounded-2xl bg-white-primary ${
          error ? "border-errors border-2" : "border border-text-primary/50"
        }`}
      >
        <Key />
        <input
          type={show ? "text" : "password"}
          className="grow border-0 outline-0 "
          placeholder={placeholder}
          value={password}
          onChange={changePassword}
        />
        <button type="button" onClick={toggleShow} className=" cursor-pointer">
          {!show ? <Eye color="DARK" /> : <EyeClosed color="DARK" />}
        </button>
      </div>
    </div>
  );
}
