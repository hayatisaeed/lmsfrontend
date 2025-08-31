"use client";

//icon
import { Close, HeadphonesRound, Help, Menu } from "@/assets/icons";

//components
import { Brand } from "@/shared/components";

//clsx
import clsx from "clsx";

//react
import { useEffect, useState } from "react";

//nav-link
import NavLink from "./NavLink";

//next
import { usePathname } from "next/navigation";

//label
import { Label } from "@/core/components";
import { Navs } from "@/core/types/navLinks";

interface INavProps {
  path: "student" | "admin" | "teacher";
  navs: Navs[];
}

export default function NavMobile({ navs, path }: INavProps) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathname = usePathname();

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false);
    }, 500);
  }, [pathname]);

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)}>
        <Menu size="LG" />
      </button>
      <div
        className={clsx(
          "flex flex-col fixed top-0 bottom-0 z-40 left-0 w-full bg-white-primary overflow-hidden transform transition-transform duration-500",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex justify-between items-center px-6">
          <Brand row />
          <button type="button" onClick={() => setIsOpen(false)}>
            <Close size="SM" />
          </button>
        </div>

        <div className="flex items-center justify-between w-full p-6">
          <Label
            type={
              path === "admin"
                ? "Admin"
                : path === "teacher"
                ? "Teacher"
                : "Student"
            }
          />
          <p></p>
        </div>

        <div className="flex flex-col gap-2 pe-6">
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
          {/* <NavLink
            label="پشتیبانی"
            path={`/${path}/support`}
            icon={HeadphonesRound}
          />
          <NavLink label="راهنما" path={`/${path}/help`} icon={Help} /> */}
        </div>
      </div>
    </>
  );
}
