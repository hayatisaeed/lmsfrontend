"use client";

import { BoxSelect } from "@/shared/components";
import TableStudents from "./TableStudents";
import { DocumentsMinimalistic, NotebookMinimalistic } from "@/assets/icons";
import { useState } from "react";
import TableProfessors from "./TableProfessors";
import { usePathname, useRouter } from "next/navigation";

const boxSelect = [
  { label: "استاید", value: "professors", icon: NotebookMinimalistic },
  {
    label: "دانشجویان",
    value: "students",
    icon: DocumentsMinimalistic,
  },
];

type TSelect = "students" | "professors";

export default function ContainerUsers() {
  const [select, setSelect] = useState<TSelect>("students");
  const router = useRouter();
  const pathname = usePathname();

  function changeSelect(newSelect: string) {
    router.replace(pathname);
    setSelect(newSelect as TSelect);
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <div className="w-full md:w-96">
        <BoxSelect
          onComplete={changeSelect}
          items={boxSelect}
          defaultValue={select}
        />
      </div>
      {select === "students" ? <TableStudents /> : <TableProfessors />}
    </div>
  );
}
