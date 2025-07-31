"use client";

//import icons
import { Camera } from "@/shared/icons";
import { ChangeEvent, useState } from "react";

export default function Uploader() {
  const [s, setS] = useState<string>("");

  function upload(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;

  }

  return (
    <div className="flex items-center gap-2">
      <label>
        <div className="size-[85px] rounded-full flex flex-col justify-center items-center bg-box-primary cursor-pointer p-1">
          <Camera size="MD" />
          <p className="text-xs text-center">Upload Photo</p>
        </div>
        <input type="file" accept="image/*" onChange={upload} hidden />
      </label>
      <h3 className="text-sm">بارگذاری تصویر حساب</h3>
    </div>
  );
}
