"use client";

import { Camera } from "@/assets/icons";
import Image from "next/image";
import { useState, ChangeEvent } from "react";

interface IUploaderProps {
  title?: string;
  defaultImage?: string;
  changeImage?: (file: File) => void;
}

export default function Uploader({
  title,
  defaultImage = "",
  changeImage,
}: IUploaderProps) {
  const [image, setImage] = useState<string>(defaultImage);

  function upload(e: ChangeEvent<HTMLInputElement>) {
    const { files } = e.target;
    const file = files?.[0];
    if (file) {
      setImage(URL.createObjectURL(file));
      changeImage?.(file);
    }
  }

  return (
    <div className="flex items-center gap-3">
      <label className="relative cursor-pointer">
        <div
          className={`size-[90px] rounded-full flex flex-col justify-center items-center transition 
          ${
            image
              ? "overflow-hidden shadow-lg"
              : "border-2 border-dashed border-gray-300 hover:border-primary/60 bg-box-primary/30"
          }`}
        >
          {image ? (
            <Image
              src={image}
              alt="image"
              fill
              className="object-cover rounded-full"
            />
          ) : (
            <div className="flex flex-col items-center justify-center text-gray-500">
              <Camera size="MD" />
              <p className="text-xs mt-1">آپلود عکس</p>
            </div>
          )}
        </div>
        <input type="file" accept="image/*" onChange={upload} hidden />
      </label>

      {title && <h3 className="text-sm font-medium text-gray-700">{title}</h3>}
    </div>
  );
}
