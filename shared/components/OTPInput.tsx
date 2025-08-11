"use client";

//import hooks react
import { useEffect, useRef, useState } from "react";

//import types
import { ChangeEvent, KeyboardEvent, ClipboardEvent } from "react";

//import constant
import { SIZES, COLORS } from "@/shared/constant/otpInput";

//import icons
import { InfoSquare } from "@/assets/icons";
import clsx from "clsx";

interface OTPInputProps {
  length?: number;
  onComplete: (code: number) => void;
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
  error?: boolean;
  disabled?: boolean;
  isError?: boolean;
}

export default function OTPInput({
  isError = false,
  disabled = false,
  length = 6,
  onComplete,
  color = "PRIMARY",
  size = "LG",
  error = false,
}: OTPInputProps) {
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const [otpValues, setOtpValues] = useState<string[]>(Array(length).fill(""));

  useEffect(() => {
    inputRefs.current.at(0)?.focus();
  }, []);

  function handleInputChange(e: ChangeEvent<HTMLInputElement>, index: number) {
    const value = e.target.value;

    // Check if it is a number
    if (!/^\d?$/.test(value)) return;

    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);

    // Move the cursor to the next one
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }

    // If all are filled, run the function
    const isEvery = newOtpValues.every((value) => value !== "");

    if (isEvery) {
      onComplete(Number(newOtpValues.join("")));
    }

    // If there is an empty one, go to it
    if (!isEvery && value && index === length - 1) {
      const indexInputEmipty = otpValues.indexOf("");
      inputRefs.current[indexInputEmipty]?.focus();
    }
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>, index: number) {
    const key = e.key;

    // To delete
    if (key === "Backspace") {
      if (otpValues[index]) {
        updateOtpValue("", index);
      } else if (index > 0) {
        inputRefs.current[index - 1]?.focus();
        updateOtpValue("", index - 1);
      }
    }

    // To go to the previous one
    if (key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1]?.focus();
    }

    // To go to the next one
    if (key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
    }
  }

  function handlePaste(e: ClipboardEvent<HTMLInputElement>) {
    const pastedData = e.clipboardData
      .getData("Text")
      .replace(/\D/g, "")
      .slice(0, length);
    if (!pastedData) return;

    const newOtpValues = pastedData
      .split("")
      .concat(Array(length).fill(""))
      .slice(0, length);
    setOtpValues(newOtpValues);

    newOtpValues.forEach((value, index) => {
      if (inputRefs.current[index]) inputRefs.current[index]!.value = value;
    });

    const nextEmptyIndex = newOtpValues.findIndex((value) => value === "");
    if (nextEmptyIndex === -1) {
      onComplete(Number(newOtpValues.join("")));
    } else {
      inputRefs.current[nextEmptyIndex]?.focus();
    }

    e.preventDefault();
  }

  function updateOtpValue(value: string, index: number) {
    const newOtpValues = [...otpValues];
    newOtpValues[index] = value;
    setOtpValues(newOtpValues);
  }

  const { boxSIze, fontSize, gap, height, width } = SIZES[size];

  const { background } = COLORS[color];

  return (
    <div className="flex flex-col justify-start gap-4">
      <div
        className="flex justify-center items-center rounded-xl font-shabnam"
        dir="ltr"
        style={{
          backgroundColor: background,
          width,
          height,
          gap,
        }}
      >
        {Array.from({ length }).map((_, index) => (
          <input
            disabled={disabled}
            key={index}
            type="text"
            inputMode="numeric"
            maxLength={1}
            className={clsx(
              "bg-white rounded-[10px] outline-0 text-center",
              isError && "border-[2.5px] border-errors"
            )}
            style={{
              width: boxSIze,
              height: boxSIze,
              fontSize,
            }}
            ref={(element) => {
              if (element) inputRefs.current[index] = element;
            }}
            value={otpValues[index]}
            onChange={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            onPaste={handlePaste}
          />
        ))}
      </div>
      {error && (
        <h3 className="flex gap-1 items-start text-sm">
          <InfoSquare color="DANGER" size="SM" />
          <span className="text-[#B3261E]">کد وارد شده اشتباه میباشد.</span>
        </h3>
      )}
    </div>
  );
}
