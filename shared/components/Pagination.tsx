"use client";

//clsx
import clsx from "clsx";

//next
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface IPaginatopnProps {
  total: number;
  limit?: number;
}

export default function Pagination({ total, limit = 10 }: IPaginatopnProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchhParams = useSearchParams();

  const length = Math.ceil(total / limit);

  const page = +(searchhParams.get("page") || 1);

  let numList: number[] = Array.from({ length }, (_, index) => index + 1);

  if (page === 1) {
    numList = numList.slice(0, 3);
  } else if (page === length) {
    numList = numList.slice(-3, length);
  } else {
    numList = numList.slice(page - 2, page + 1);
  }

  function handleTogglePage(page: number) {
    const search = new URLSearchParams(searchhParams.toString());
    search.set("page", String(page));
    router.replace(`${pathname}?${search.toString()}`);
  }

  if (length === 1) return;

  console.log(numList);

  return (
    <div className="flex items-center gap-2">
      {!(page === 1 || page === 2) && (
        <>
          <button
            onClick={() => {
              handleTogglePage(1);
            }}
            type="button"
            className={clsx(
              "size-10 text-sm rounded-full flex justify-center items-center font-shabnam bg-box-primary cursor-pointer"
            )}
          >
            1
          </button>
          <h3 className="mb-2">...</h3>
        </>
      )}
      {numList.map((item) => (
        <button
          key={item}
          onClick={() => {
            handleTogglePage(item);
          }}
          type="button"
          disabled={page === item}
          className={clsx(
            "size-10 text-sm rounded-full flex justify-center items-center font-shabnam ",
            page === item
              ? "bg-primary text-white-primary cursor-default"
              : "bg-box-primary cursor-pointer"
          )}
        >
          {item}
        </button>
      ))}
      {!(page === length || page === length - 1) && (
        <>
          <h3 className="mb-2">...</h3>
          <button
            onClick={() => {
              handleTogglePage(length);
            }}
            type="button"
            className={clsx(
              "size-10 text-sm rounded-full flex justify-center items-center font-shabnam bg-box-primary cursor-pointer"
            )}
          >
            {length}
          </button>
        </>
      )}
    </div>
  );
}
