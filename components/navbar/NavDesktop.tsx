"use client";

import { useState, useEffect } from "react";
import { Brand } from "@/shared/components";
import { ButtonIcon } from "@/shared/ui";
import { Closet } from "@/shared/icons";
import clsx from "clsx";

export default function Nav() {
  const [open, setOpen] = useState(true);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChangeOpen = () => {
    setOpen(!open);
  };

  return (
    <div
      className={clsx(
        "h-full transition-all duration-300 ease-in-out rounded-2xl overflow-hidden flex flex-col bg-white-primary",
        open ? "w-[300px] p-4" : "w-[55px] p-2",
        !isMounted && "transition-none"
      )}
    >
      <div className="w-full flex items-center justify-between min-h-[40px]">
        <div
          className={clsx(
            "transition-[width,opacity] duration-300 overflow-hidden flex-shrink-0",
            open ? "w-[120px] opacity-100 delay-100" : "w-0 opacity-0"
          )}
        >
          <Brand row />
        </div>

        <ButtonIcon
          onClick={handleChangeOpen}
          className={clsx(
            "shrink-0 transition-all duration-300",
            open ? "rotate-0" : "rotate-180"
          )}
        >
          <Closet />
        </ButtonIcon>
      </div>

      <div
        className={clsx(
          "transition-[max-height,opacity] duration-300 overflow-hidden",
          open
            ? "max-h-screen opacity-100 mt-5 delay-75"
            : "max-h-0 opacity-0 mt-0"
        )}
      >
        {/* محتوا اینجا می‌ره */}
      </div>
    </div>
  );
}
