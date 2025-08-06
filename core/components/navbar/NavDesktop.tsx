"use client";

import { useState, useEffect } from "react";
import { Brand } from "@/shared/components";
import { ButtonIcon } from "@/shared/ui";
import { Closet, HeadphonesRound, Help } from "@/assets/icons";
import clsx from "clsx";
import NavLink from "./NavLink";
import { Navs } from "@/core/types/navLinks";

interface INavProps {
  path: "student" | "admin" | "professor";
  navs: Navs[];
}

export default function Nav({ navs, path }: INavProps) {
  const [open, setOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChangeOpen = () => {
    setOpen((prev) => !prev);
  };

  return (
    <div
      className={clsx(
        "h-full transition-all duration-300 ease-in-out rounded-2xl overflow-hidden flex flex-col bg-white-primary",
        open ? "w-[300px]" : "w-[64px]",
        !isMounted && "transition-none"
      )}
    >
      {/* Header: Brand and Toggle */}
      <div
        className={clsx(
          "flex items-center justify-between transition-all duration-300",
          open ? "px-6 py-4" : "px-2 py-4"
        )}
      >
        <div
          className={clsx(
            "transition-all duration-300 overflow-hidden",
            open ? "w-[120px] opacity-100" : "w-0 opacity-0"
          )}
        >
          <Brand row />
        </div>

        <ButtonIcon
          onClick={handleChangeOpen}
          className={clsx(
            "shrink-0 transition-transform duration-300",
            open ? "rotate-0" : "rotate-180"
          )}
        >
          <Closet />
        </ButtonIcon>
      </div>

      {/* Menu Items */}
      <div
        className={clsx(
          "transition-all duration-300 overflow-hidden",
          open
            ? "opacity-100 max-h-screen pe-5 mt-5"
            : "opacity-0 max-h-0 px-0 mt-0"
        )}
      >
        <div className="flex flex-col gap-2">
          {navs.map((nav, index) => (
            <NavLink
              key={index}
              icon={nav.icon}
              label={nav.label}
              link={"link" in nav ? nav.link : undefined}
              items={"children" in nav ? nav.children : undefined}
            />
          ))}

          <div className="w-[90%] h-[1px] ms-[25px] bg-liner-primary/7"></div>

          {/* Static Items */}
          <NavLink
            label="پشتیبانی"
            path={`/${path}/support`}
            icon={HeadphonesRound}
          />
          <NavLink label="راهنما" path={`/${path}/help`} icon={Help} />
        </div>
      </div>
    </div>
  );
}
