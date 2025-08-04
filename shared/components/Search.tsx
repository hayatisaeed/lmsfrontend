"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ChangeEvent, KeyboardEvent, useEffect, useState } from "react";

interface ISearchProps {
  placeholder?: string;
  refresh?: string;
}

export default function Search({
  refresh,
  placeholder = " جستجو کنید بر اساس نام و نام خانوادگی ، شناسه کاربری و...",
}: ISearchProps) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const [search, setSearch] = useState("");

  useEffect(() => {
    const newSearch = searchParams.get("search") || "";
    setSearch(newSearch);
  }, [searchParams, refresh]);

  function handleChangeSearch(e: ChangeEvent<HTMLInputElement>) {
    const { value } = e.target;
    setSearch(value);
  }

  function handleKeyDown(e: KeyboardEvent<HTMLInputElement>) {
    const { code } = e;

    if (code === "Enter") {
      handleClickSearch();
    }
  }

  function handleClickSearch() {
    const searchURL = new URLSearchParams(searchParams.toString());
    searchURL.set("search", search);
    router.replace(`${pathname}?${searchURL.toString()}`);
  }
  return (
    <div className="flex bg-white-primary p-1 ps-2 rounded-full w-full md:w-[400px] border border-text-primary/20 ">
      <input
        type="text"
        className="bg-white-primary border-0 outline-0 grow text-sm px-2 py-[6px]"
        placeholder={placeholder}
        value={search}
        onChange={handleChangeSearch}
        onKeyDown={handleKeyDown}
      />
      <button
        type="button"
        className="bg-primary rounded-full py-1 px-3 text-white-primary text-sm text-center cursor-pointer"
        onClick={handleClickSearch}
      >
        جستجو
      </button>
    </div>
  );
}
