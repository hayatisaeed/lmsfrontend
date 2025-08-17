"use client";

import { Button } from "@/shared/ui";
import clsx from "clsx";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IFilterCategoryProps {
  filters?: { label: string; id: number }[];
}

export default function FilterCategory({ filters }: IFilterCategoryProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  function handleClickSearch(id: number) {
    const URL = new URLSearchParams(searchParams.toString());

    URL.set("category", String(id));

    router.replace(`${pathname}?${URL.toString()}`);
  }

  return (
    <div className="w-full bg-white-primary flex flex-col items-center gap-3">
      {filters?.map((filter) => {
        const categorySearch = +(searchParams.get("category") || 0);
        const active = categorySearch === filter.id;
        return (
          <Button
            key={filter.id}
            type="button"
            onClick={() => {
              handleClickSearch(filter.id);
            }}
            color="PRIMARY"
            size="FULL"
            disabled={active}
            className={clsx(
              "justify-start rounded-2xl",
              active && "!bg-[#0033B3]"
            )}
          >
            {filter.label}
          </Button>
        );
      })}
    </div>
  );
}
