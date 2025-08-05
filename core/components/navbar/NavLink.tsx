"use client";

import { COLORS, SIZES } from "@/shared/constant/icons";
//import clsx
import clsx from "clsx";

//import next-link
import Link from "next/link";

//import react hooks
import { usePathname } from "next/navigation";

//types
import { FC } from "react";

interface INavLinkProps {
  path: string;
  label: string;
  icon: FC<{
    color: keyof typeof COLORS;
    size: keyof typeof SIZES;
  }>;
}

export default function NavLink({ label, path, icon: Icon }: INavLinkProps) {
  const pathname = usePathname();

  return (
    <div className="flex items-center gap-3">
      {/* Active Indicator */}
      <div
        className={clsx(
          "w-[5px] h-9 rounded-e-md transition-colors",
          pathname === path ? "bg-primary" : "bg-white-primary"
        )}
      ></div>

      <Link
        href={path}
        className={clsx(
          "flex items-center gap-2 p-4 rounded-xl transition-all grow text-[15px] whitespace-nowrap",
          pathname === path
            ? "bg-primary text-white-primary"
            : "text-text-primary bg-white"
        )}
      >
        <Icon color={pathname === path ? "LIGHT" : "DARK"} size="SM" />
        <span>{label}</span>
      </Link>
    </div>
  );
}
