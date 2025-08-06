import { FC } from "react";
import { COLORS, SIZES } from "@/shared/constant/icons";

export type Navs =
  | {
      label: string;
      link: string;
      icon: FC<{ size: keyof typeof SIZES; color: keyof typeof COLORS }>;
    }
  | {
      label: string;
      icon: FC<{ size: keyof typeof SIZES; color: keyof typeof COLORS }>;
      children: {
        label: string;
        link: string;
      }[];
    };
