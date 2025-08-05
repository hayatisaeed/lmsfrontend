"use client";

import { Search } from "@/shared/components";
import TableClasses from "./TableClasses";

export default function ContainerClasses() {
  return (
    <div className="flex flex-col h-full w-full gap-7 items-center justify-center">
      <Search placeholder="جستجو کنید بر اساس نام کلاس " />
      <TableClasses />
    </div>
  );
}
