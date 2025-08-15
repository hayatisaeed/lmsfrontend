"use client";

import { useState, useRef, useEffect } from "react";

interface IMenuProps {
  label: string;
  options?: { id: number; label: string }[];
  value?: { id: number; label: string };
  onChange: (item: { id: number; label: string }) => void;
  disabled?: boolean;
}

export default function Menu({
  label,
  options = [],
  value,
  onChange,
  disabled = false,
}: IMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  function toggleMenu() {
    if (!disabled) {
      setIsOpen((prev) => !prev);
    }
  }

  function handleSelect(item: { id: number; label: string }) {
    onChange(item);
    setIsOpen(false);
  }

  return (
    <div className="relative inline-block w-full" ref={menuRef}>
      <button
        type="button"
        disabled={disabled}
        onClick={toggleMenu}
        className={`w-full p-4 rounded-xl border outline-none text-sm
          ${
            disabled
              ? "cursor-not-allowed text-text-primary/60 bg-gray-100 border-gray-300"
              : "cursor-pointer text-text-primary bg-white border-text-primary/50"
          }`}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
      >
        {value?.label || label}
      </button>

      {isOpen && (
        <ul
          role="listbox"
          className="absolute z-50 mt-2 w-full max-h-60 overflow-auto rounded-xl border border-text-primary/30 bg-white shadow-lg"
          tabIndex={-1}
        >
          {options.length === 0 && (
            <li className="px-3 py-2 text-sm text-gray-500">
              هیچ گزینه‌ای وجود ندارد
            </li>
          )}
          {options.map((item) => (
            <li
              key={item.id}
              role="option"
              aria-selected={value?.id === item.id}
              tabIndex={0}
              onClick={() => handleSelect(item)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleSelect(item);
                }
              }}
              className={`cursor-pointer p-3 text-sm hover:bg-gray-100 ${
                value?.id === item.id ? "bg-gray-200 font-semibold" : ""
              }`}
            >
              {item.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
