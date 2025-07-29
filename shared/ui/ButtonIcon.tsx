//import types
import { ButtonHTMLAttributes, ReactNode } from "react";

//import constant
import { SIZES } from "@/shared/constant/buttonIcon";

//import clsx
import clsx from "clsx";

interface IButtonIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: keyof typeof SIZES;
}

export default function ButtonIcon({
  children,
  size = "MD",
  className,
  ...props
}: IButtonIconProps) {
  const { width, height } = SIZES[size];
  return (
    <button
      type="button"
      className={clsx(
        "cursor-pointer bg-box-primary flex justify-center items-center rounded-full",
        className
      )}
      style={{
        width,
        height,
      }}
      {...props}
    >
      {children}
    </button>
  );
}
