"use client";

//icon
import { Sort } from "@/assets/icons";

//clsx
import clsx from "clsx";

//next
import { usePathname, useRouter, useSearchParams } from "next/navigation";

//react
import {
  useContext,
  createContext,
  useState,
  useEffect,
  TableHTMLAttributes,
} from "react";

// types
import { ReactNode } from "react";
type TSort = "ASC" | "DESC";

interface ITableProps extends TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

interface ITableContextProps {
  handleToggleSort: (sortBy: string) => void;
  sortBy: string;
  sortType: TSort | null;
}

const TableContext = createContext<ITableContextProps | null>(null);

export default function Table({ children, className, ...props }: ITableProps) {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const [sortBy, setSortBy] = useState("");
  const [sortType, setSortType] = useState<TSort | null>(null);

  useEffect(() => {
    let foundSortKey = "";
    let foundSortType: TSort | null = null;

    for (const key of searchParams.keys()) {
      const value = searchParams.get(key);
      if (value === "ASC" || value === "DESC") {
        foundSortKey = key;
        foundSortType = value;
        break;
      }
    }

    if (foundSortKey && foundSortType) {
      setSortBy(foundSortKey);
      setSortType(foundSortType);
    } else {
      setSortBy("");
      setSortType(null);
    }
  }, [searchParams]);

  function handleToggleSort(column: string) {
    const current = searchParams.get(column);
    const nextSort: TSort = current === "ASC" ? "DESC" : "ASC";

    const params = new URLSearchParams(searchParams.toString());
    params.set(column, nextSort);

    // Remove previous sort key if different
    if (sortBy && sortBy !== column) {
      params.delete(sortBy);
    }

    router.replace(`${pathname}?${params.toString()}`);
    setSortBy(column);
    setSortType(nextSort);
  }

  return (
    <TableContext.Provider value={{ handleToggleSort, sortBy, sortType }}>
      <div className="overflow-x-auto">
        <table className={clsx("w-full min-w-[600px]", className)} {...props}>
          <thead>{children}</thead>
        </table>
      </div>
    </TableContext.Provider>
  );
}

// ---------- Th ----------
interface IThProps {
  children: ReactNode;
  sortBy?: string;
}

function Th({ children, sortBy }: IThProps) {
  const context = useContext(TableContext);

  if (!context) {
    throw new Error("Table.Th must be used within Table");
  }

  const { handleToggleSort, sortBy: activeSortBy, sortType } = context;

  const isActive = sortBy === activeSortBy;

  return (
    <th className="py-[18px] font-semibold first:rounded-tr-2xl last:rounded-tl-2xl bg-text-primary text-white-primary">
      <div className="flex items-center justify-center gap-1">
        <span>{children}</span>
        {sortBy && (
          <button
            type="button"
            onClick={() => handleToggleSort(sortBy)}
            className={clsx(
              "cursor-pointer transition-all flex items-center justify-center",
              isActive ? "opacity-100" : "opacity-15"
            )}
          >
            <span
              className={clsx(
                "inline-block transition-transform",
                isActive && sortType === "ASC" && "rotate-180"
              )}
            >
              <Sort size="SM" color="LIGHT" />
            </span>
          </button>
        )}
      </div>
    </th>
  );
}

// ---------- Td ----------
interface ITdProps  {
  children: ReactNode;
  isNum?: boolean;
  className?:string;
}

function Td({ children, isNum = false,className }: ITdProps) {
  return (
    <td
      className={clsx(
        "text-center overflow-hidden py-5",
        isNum ? "font-shabnam" : "font-kalameh",
        className
      )}
    >
      {children}
    </td>
  );
}

// ---------- Tr ----------
interface ITrProps {
  children: ReactNode;
}

function Tr({ children }: ITrProps) {
  return (
    <tr className="overflow-hidden odd:bg-white-primary even:bg-box-primary">
      {children}
    </tr>
  );
}

// ---------- THead ----------

interface ITHeadProps {
  children: ReactNode;
}

function THead({ children }: ITHeadProps) {
  return <thead>{children}</thead>;
}

// ---------- TBody ----------

interface ITBodyProps {
  children: ReactNode;
}

function TBody({ children }: ITBodyProps) {
  return <tbody className="w-full">{children}</tbody>;
}

// Attach subcomponents
Table.Tr = Tr;
Table.Th = Th;
Table.Td = Td;
Table.THead = THead;
Table.TBody = TBody;
