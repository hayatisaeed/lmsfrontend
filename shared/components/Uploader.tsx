"use client";

//import icons
import { Camera } from "@/assets/icons";

//import image
import Image from "next/image";
import { useState } from "react";

//import types
import { ChangeEvent } from "react";

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
    <div className="flex items-center gap-2">
      <label>
        <div className="size-[85px] rounded-full flex flex-col justify-center items-center bg-box-primary cursor-pointer p-1 relative">
          {image ? (
            <Image
              src={image}
              alt="image"
              fill
              className="object-contain p-3"
            />
          ) : (
            <>
              <Camera size="MD" />
              <p className="text-xs text-center">Upload Photo</p>
            </>
          )}
        </div>
        <input type="file" accept="image/*" onChange={upload} hidden />
      </label>
      <h3 className="text-sm">{title}</h3>
    </div>
  );
}
