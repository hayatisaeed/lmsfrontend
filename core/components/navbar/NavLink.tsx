"use client";

import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, FC } from "react";
import { COLORS, SIZES } from "@/shared/constant/icons";

interface NavLinkProps {
  small?: boolean;
  label: string;
  icon: FC<{ size: keyof typeof SIZES; color: keyof typeof COLORS }>;
  link?: string;
  path?: string;
  items?: {
    label: string;
    link: string;
  }[];
}

export default function NavLink({
  small = false,
  label,
  icon: Icon,
  link,
  path,
  items,
}: NavLinkProps) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const targetLink = link || path;
  const isActive = targetLink ? pathname === targetLink : false;

  const handleChangeOpen = () => setOpen((prev) => !prev);

  if (targetLink) {
    return (
      <div className="flex items-center gap-3">
        <div
          className={clsx(
            "w-[5px] h-9 rounded-e-md transition-colors",
            isActive ? "bg-primary" : "bg-white-primary"
          )}
        ></div>

        <Link
          href={targetLink}
          className={clsx(
            small ? "rounded-full p-3" : "rounded-xl p-4",
            "flex items-center gap-2 grow text-[15px] whitespace-nowrap",
            isActive
              ? "bg-primary text-white-primary"
              : "text-text-primary bg-white"
          )}
        >
          <Icon color={isActive ? "LIGHT" : "DARK"} size="SM" />
          {!small && <span>{label}</span>}
        </Link>
      </div>
    );
  }

  if (items) {
    const childPaths = items.map((item) => item.link);
    const isChildActive = childPaths.includes(pathname);

    return (
      <div className="flex flex-col gap-1">
        <div className="flex items-center gap-3">
          <div
            className={clsx(
              "w-[5px] h-9 rounded-e-md transition-colors",
              isChildActive ? "bg-primary" : "bg-white-primary"
            )}
          ></div>
          <button
            type="button"
            onClick={handleChangeOpen}
            className={clsx(
              "flex items-center gap-2 p-4 rounded-xl transition-all grow text-[15px] whitespace-nowrap",
              isChildActive
                ? "bg-primary text-white-primary"
                : "text-text-primary bg-white"
            )}
          >
            <Icon color={isChildActive ? "LIGHT" : "DARK"} size="SM" />
            <span>{label}</span>
          </button>
        </div>

        <div
          className={clsx(
            "ps-14 grid transition-all text-sm text-text-primary overflow-hidden",
            open ? "grid-rows-[1fr] py-1" : "grid-rows-[0fr] py-0"
          )}
        >
          <div className="flex flex-col gap-2 overflow-hidden">
            {items.map((item) => (
              <Link
                key={item.link}
                href={item.link}
                className={clsx(
                  "transition",
                  pathname === item.link
                    ? "text-primary font-semibold"
                    : "hover:text-primary"
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return null;
}
