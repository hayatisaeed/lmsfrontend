import { Search } from "@/shared/components";
import TableClasses from "./TableClasses";
import { Suspense } from "react";

export default function ContainerClasses() {
  return (
    <div className="flex flex-col h-full w-full gap-7 items-center justify-center">
      <Suspense fallback={<p>loader...</p>}>
        <Search placeholder="جستجو کنید بر اساس نام کلاس " />
        <TableClasses />
      </Suspense>
    </div>
  );
}
