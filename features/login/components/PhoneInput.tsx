"use client";

// import hooks
import { useState, useEffect } from "react";

// import icons
import { Smartphone } from "@/assets/icons";

// import types
import { InputHTMLAttributes, ChangeEvent } from "react";

interface IPhoneInputProps extends InputHTMLAttributes<HTMLInputElement> {
  onComplete: (phone: string) => void;
}

export default function PhoneInput({ onComplete, ...props }: IPhoneInputProps) {
  const [phone, setPhone] = useState<string[]>(Array(11).fill(""));

  // Call onComplete when all 11 digits are entered
  useEffect(() => {
    const phoneString = phone.join("");
    if (phoneString.length === 11) {
      onComplete(phoneString);
    }
  }, [phone, onComplete]);

  function changePhone(value: string) {
    setPhone([...value.split("")]);
  }

  function onChange(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;

    // If the user is deleting and the current value starts with "09"
    if (
      value.length < phone.join("").length &&
      phone.join("").startsWith("09")
    ) {
      // If the new value is empty or only "0" remains
      if (value.length <= 1) {
        setPhone(Array(11).fill(""));
        return;
      }
    }

    // Ignore if the last entered character isn't a number
    if (!/\d/g.test(value[value.length - 1]) && value.length > 0) return;

    if (value.length === 1) {
      if (value.startsWith("0")) {
        changePhone(value);
      }
      if (value.startsWith("9")) {
        setPhone((prevPhone) => {
          const newPhone = [...prevPhone];
          newPhone[0] = "0";
          newPhone[1] = "9";
          return newPhone;
        });
      }
    } else if (value.length === 2) {
      if (value.startsWith("09")) {
        changePhone(value);
      }
    } else {
      changePhone(value);
    }
  }

  return (
    <div className="flex max-w-[441px] w-full bg-text-primary p-5 rounded-xl">
      <input
        type="text"
        placeholder="  شماره تلفن خود را وارد کنید."
        inputMode="tel"
        className="grow border-0 outline-0 text-md text-white-primary num-only"
        value={phone.join("")}
        maxLength={11}
        onChange={onChange}
        {...props}
      />
      <div className="flex gap-3">
        <div className="h-full w-[1px] bg-white-primary/7"></div>
        <Smartphone color="LIGHT" />
      </div>
    </div>
  );
}
