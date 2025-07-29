"use client";

//improt clsx
import clsx from "clsx";

//import types
import { ButtonHTMLAttributes, ReactNode, useState } from "react";

//import types
import { COLORS, SIZES } from "@/shared/constant/button";

//import spinner
import { Spinner } from "@/shared/ui";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  color?: keyof typeof COLORS;
  size?: keyof typeof SIZES;
  icon?: ReactNode;
  loading?: boolean;
}

export default function Button({
  children,
  type = "button",
  className,
  color = "PRIMARY",
  size = "MD",
  icon,
  loading,
  ...props
}: IButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  const { background, text, hover } = COLORS[color];

  const { paddingY, paddingX, minWidth, minHeight, fontSize, radius } =
    SIZES[size];

  return (
    <button
      type={type}
      onMouseOver={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={clsx(
        "transition-colors duration-200 ease-linear flex justify-center items-center gap-1",
        loading?"cursor-progress":"cursor-pointer",
        className
      )}
      style={{
        backgroundColor: isHovered && !loading ? hover : background,
        color: text,
        padding: clsx(paddingY, paddingX),
        minWidth,
        minHeight,
        fontSize,
        borderRadius: radius,
      }}
      disabled={loading}
      {...props}
    >
      <>
        {loading ? (
          <Spinner />
        ) : (
          <>
            {icon}
            <span>{children}</span>
          </>
        )}
      </>
    </button>
  );
}
