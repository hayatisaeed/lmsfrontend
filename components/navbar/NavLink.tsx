"use client";

//import clsx
import clsx from "clsx";

//import next-link
import Link from "next/link";

//import react hooks
import { usePathname } from "next/navigation";

interface INavLinkProps {
  path: string;
  label: string;
}

export default function NavLink({ label, path }: INavLinkProps) {
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
          "flex items-center gap-2 p-4 rounded-xl transition-all grow",
          pathname === path
            ? "bg-primary text-white-primary"
            : "text-text-primary bg-white"
        )}
      >
        {/* < color={pathname === "/dashboard" ? "LIGHT" : "DARK"} /> */}
        <span>{label}</span>
      </Link>
    </div>
  );
}
