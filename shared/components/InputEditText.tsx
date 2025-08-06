"use client";

//icon
import { CheckCircle, CloseCircle, Copy, PenNewSquare } from "@/assets/icons";
import clsx from "clsx";

//react
import { useRef, useState } from "react";

//types
import { ChangeEvent } from "react";

//spinner
import { Spinner } from "../ui";

interface IInputEditTextProps {
  defaultValue?: string;
  mutate?: (value: string) => void;
  placeholder?: string;
  isNum?: boolean;
}

export default function InputEditText({
  isNum,
  placeholder,
  mutate,
  defaultValue = "",
}: IInputEditTextProps) {
  const [value, setValue] = useState(defaultValue);
  const [edit, setEdit] = useState<boolean>(false);
  const [copy, setCopy] = useState<"copy" | "pending" | "success" | "error">(
    "copy"
  );

  const refInput = useRef<HTMLInputElement | null>(null);

  function handleClickCopy() {
    try {
      setCopy("pending");
      navigator.clipboard.writeText(value);
      setTimeout(() => {
        setCopy("success");
        setTimeout(() => {
          setCopy("copy");
        }, 1000);
      }, 1000);
    } catch {
      setCopy("pending");
      setTimeout(() => {
        setCopy("error");
        setTimeout(() => {
          setCopy("copy");
        }, 1000);
      }, 1000);
    }
  }

  function handleChangeInput(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setValue(value);
  }

  function changeEdit() {
    refInput.current?.focus();
    setEdit(true);
  }

  function handleClose() {
    setEdit(false);
    setValue(defaultValue);
  }

  function handleSuccess() {
    mutate?.(value);
    setEdit(false);
  }

  return (
    <div className="flex flex-col items-start gap-2">
      <h3 className="text-sm">{placeholder}</h3>
      <div className="flex justify-between items-center gap-1 w-full bg-box-primary p-4 rounded-2xl">
        <input
          ref={refInput}
          type="text"
          value={value}
          readOnly={!edit}
          placeholder={placeholder}
          onChange={handleChangeInput}
          className={clsx(
            "grow w-full border-0 outline-0",
            isNum ? "font-shabnam" : "font-kalameh"
          )}
        />
        <div className="flex items-center gap-1">
          {edit ? (
            <>
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleSuccess}
              >
                <CheckCircle color="GREEN" size="SM" />
              </button>
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleClose}
              >
                <CloseCircle color="DANGER" size="SM" />
              </button>
            </>
          ) : (
            <>
              <button
                type="button"
                className="cursor-pointer"
                onClick={changeEdit}
              >
                <PenNewSquare size="SM" />
              </button>
              <button
                type="button"
                className="cursor-pointer"
                onClick={handleClickCopy}
              >
                {copy === "copy" ? (
                  <Copy size="SM" />
                ) : copy === "pending" ? (
                  <Spinner />
                ) : copy === "success" ? (
                  <CheckCircle size="SM" />
                ) : (
                  <CloseCircle />
                )}
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
