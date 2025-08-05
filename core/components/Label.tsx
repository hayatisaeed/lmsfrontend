"use client";

//import constant
import { user } from "@/core/constant/label";

//import icons
import { SquareAcademicCap } from "@/assets/icons";

//import clsx
import clsx from "clsx";

interface ILabelProps {
  type: "Student" | "Professor" | "Admin";
}

export default function Label({ type }: ILabelProps) {
  const { lable } = user.find((item) => item.type === type)!;

  return (
    <div
      className={clsx(
        "min-w-[132px] p-3 rounded-lg items-center justify-center gap-1 flex",
        type === "Admin"
          ? "bg-background-box-manager"
          : "bg-backgrdound-box-green"
      )}
    >
      <SquareAcademicCap color="LIGHT" size="SM" />
      <h3 className="text-white-primary text-sm">{lable}</h3>
    </div>
  );
}
