"use client";

// React imports
import {
  createContext,
  useState,
  useEffect,
  useRef,
  useContext,
  cloneElement,
  ButtonHTMLAttributes,
  ReactElement,
} from "react";

//import types
import { DropDownID } from "@/shared/types/dropDown";
import { ReactNode, MouseEvent } from "react";

//import ui
import { ButtonIcon } from "@/shared/ui";

//import clsx
import clsx from "clsx";

//improt icons
import { AltArrow } from "@/shared/icons";

interface IContextDropDownProps {
  openId: DropDownID;
  open: (id: DropDownID) => void;
  close: () => void;
  position: { x: number; y: number };
  changePosition: (x: number, y: number) => void;
}

const ContextDropDown = createContext<IContextDropDownProps | null>(null);

interface IDropDownProps {
  children: ReactNode;
}

export default function DropDown({ children }: IDropDownProps) {
  const [openId, setOpenId] = useState<DropDownID>("none");
  const [position, setPosition] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  function open(id: DropDownID) {
    setOpenId(id);
  }

  function close() {
    setOpenId("none");
  }

  function changePosition(x: number, y: number) {
    setPosition({ x, y });
  }

  return (
    <ContextDropDown.Provider
      value={{ openId, open, close, position, changePosition }}
    >
      {children}
    </ContextDropDown.Provider>
  );
}

interface IWindowProps {
  children: ReactNode;
  id: Exclude<DropDownID, "none">;
}

function Window({ children, id }: IWindowProps) {
  const context = useContext(ContextDropDown);
  const refDropDown = useRef<HTMLDivElement | null>(null);

  if (!context) {
    throw new Error(
      "DropDown.Window must be used within a <DropDown> component"
    );
  }

  const {
    openId,
    position: { x, y },
    close,
  } = context;

  useEffect(() => {
    function handleClickOutside(e: globalThis.MouseEvent) {
      if (
        refDropDown.current &&
        !refDropDown.current.contains(e.target as Node) &&
        openId !== "none"
      ) {
        close();
      }
    }

    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, [close, openId]);

  if (openId !== id) return null;

  return (
    <div
      ref={refDropDown}
      className="fixed w-[213px] border border-liner-primary/7 rounded-xl divide-y-[1px] divide-liner-primary/7 bg-white-primary max-h-80 overflow-auto"
      style={{ left: `${x - 213}px`, top: `${y + 15}px` }}
    >
      {children}
    </div>
  );
}

interface ITogglerProps {
  children: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
  id: Exclude<DropDownID, "none">;
}

function Toggler({ children, id }: ITogglerProps) {
  const context = useContext(ContextDropDown);

  if (!context) {
    throw new Error(
      "DropDown.Toggler must be used within a <DropDown> component"
    );
  }

  const { openId, changePosition, open, close } = context;

  function handleClickToggler(e: MouseEvent<HTMLButtonElement>) {
    if (id === openId) {
      close();
    } else {
      const rect = e.currentTarget.getBoundingClientRect();
      changePosition(rect.right, rect.bottom);
      open(id);
    }
  }

  return cloneElement(children, {
    onClick: handleClickToggler,
  });
}

interface IItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: ReactNode;
}

function Item({ children, icon, className, onClick, ...props }: IItemProps) {
  const context = useContext(ContextDropDown);

  if (!context) {
    throw new Error(
      "DropDown.Button must be used within a <DropDown> component"
    );
  }

  const { close } = context;

  function handleClickItem(e: MouseEvent<HTMLButtonElement>) {
    close();
    onClick?.(e);
  }

  return (
    <button
      className={clsx(
        "flex w-full justify-between items-cente cursor-pointer px-3 py-4 transition-all hover:bg-[#f9f9f9]",
        className
      )}
      type="button"
      onClick={handleClickItem}
      {...props}
    >
      <div className="flex items-center justify-center text-sm gap-2">
        {icon}
        <span>{children}</span>
      </div>
    </button>
  );
}

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  id: Exclude<DropDownID, "none">;
}

function Button({ id, ...props }: IButtonProps) {
  const context = useContext(ContextDropDown);

  if (!context) {
    throw new Error(
      "DropDown.Button must be used within a <DropDown> component"
    );
  }

  const { openId } = context;

  return (
    <ButtonIcon
      size="SM"
      className={clsx(
        "transition-all",
        openId === id ? "rotate-180" : "rotate-0"
      )}
      {...props}
    >
      <AltArrow size="XS" />
    </ButtonIcon>
  );
}

DropDown.Window = Window;
DropDown.Toggler = Toggler;
DropDown.Item = Item;
DropDown.Button = Button;
