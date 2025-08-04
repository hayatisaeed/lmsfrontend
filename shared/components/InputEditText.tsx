"use client";

//icon
import { CheckCircle, CloseCircle, Copy, PenNewSquare } from "@/assets/icons";

//react
import { useRef, useState } from "react";

//types
import { ChangeEvent } from "react";

interface IInputEditTextProps {
  defaultValue?: string;
  mutate?: (value: string) => void;
  placeholder?: string;
}

export default function InputEditText({
  placeholder,
  mutate,
  defaultValue = "",
}: IInputEditTextProps) {
  const [value, setValue] = useState(defaultValue);
  const [edit, setEdit] = useState<boolean>(false);

  const refInput = useRef<HTMLInputElement | null>(null);

  function handleClickCopy() {
    navigator.clipboard.writeText(value);
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
          className="grow w-full border-0 outline-0"
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
                <Copy size="SM" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
