"use client";

import {
  createContext,
  useState,
  useRef,
  useContext,
  useEffect,
  cloneElement,
  ReactNode,
  ReactElement,
  MouseEvent,
  ButtonHTMLAttributes,
} from "react";

import { ButtonIcon } from "@/shared/ui";
import { AltArrow } from "@/assets/icons";
import clsx from "clsx";
import { createPortal } from "react-dom";

interface IContextDropDownProps {
  isOpen: boolean;
  open: () => void;
  close: () => void;
  position: { x: number; y: number };
  setPosition: (x: number, y: number) => void;
}

const ContextDropDown = createContext<IContextDropDownProps | null>(null);

interface IDropDownProps {
  children: ReactNode;
}

export default function DropDown({ children }: IDropDownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPositionState] = useState({ x: 0, y: 0 });

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);
  const setPosition = (x: number, y: number) => setPositionState({ x, y });

  return (
    <ContextDropDown.Provider
      value={{ isOpen, open, close, position, setPosition }}
    >
      {children}
    </ContextDropDown.Provider>
  );
}

function Window({ children }: { children: ReactNode }) {
  const context = useContext(ContextDropDown);
  const ref = useRef<HTMLDivElement>(null);

  if (!context) throw new Error("DropDown.Window must be used within DropDown");

  const { isOpen, position, close } = context;

  useEffect(() => {
    function handleClickOutside(e: globalThis.MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        close();
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [close]);

  if (!isOpen) return null;

  return createPortal(
    <div
      ref={ref}
      className="fixed w-[213px] border border-liner-primary/7 rounded-xl divide-y-[1px] divide-liner-primary/7 bg-white-primary max-h-80 overflow-auto z-50"
      style={{ left: `${position.x}px`, top: `${position.y}px` }}
    >
      {children}
    </div>,
    document.documentElement
  );
}

function Toggler({
  children,
}: {
  children: ReactElement<ButtonHTMLAttributes<HTMLButtonElement>>;
}) {
  const context = useContext(ContextDropDown);

  if (!context)
    throw new Error("DropDown.Toggler must be used within DropDown");

  const { isOpen, open, close, setPosition } = context;

  function handleClick(e: MouseEvent<HTMLButtonElement>) {
    const rect = e.currentTarget.getBoundingClientRect();

    const offsetX = rect.right - 213;
    const offsetY = rect.bottom + 15;

    setPosition(offsetX, offsetY);

    if (isOpen) {
      close();
    } else {
      open();
    }
  }

  return cloneElement(children, { onClick: handleClick });
}

interface IItemProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: string;
  icon?: ReactNode;
}

function Item({ children, icon, className, onClick, ...props }: IItemProps) {
  const context = useContext(ContextDropDown);
  if (!context) throw new Error("DropDown.Item must be used within DropDown");

  const { close } = context;

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    close();
    onClick?.(e);
  };

  return (
    <button
      className={clsx(
        "flex w-full justify-between items-center cursor-pointer px-3 py-4 transition-all hover:bg-[#f9f9f9]",
        className
      )}
      type="button"
      onClick={handleClick}
      {...props}
    >
      <div className="flex items-center text-sm gap-2">
        {icon}
        <span>{children}</span>
      </div>
    </button>
  );
}

function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const context = useContext(ContextDropDown);
  if (!context) throw new Error("DropDown.Button must be used within DropDown");

  const { isOpen } = context;

  return (
    <ButtonIcon
      size="SM"
      className={clsx("transition-all", isOpen ? "rotate-180" : "rotate-0")}
      {...props}
    >
      <AltArrow size="XS" />
    </ButtonIcon>
  );
}

// Attach components
DropDown.Window = Window;
DropDown.Toggler = Toggler;
DropDown.Item = Item;
DropDown.Button = Button;
