"use client";

//media-query
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

//ui
import { Button, Menu } from "@/shared/ui";

//react
import { useState } from "react";

//types
import { TMenu } from "../types";

interface IWindowMenuItemsProps {
  defaultValue?: { id: number; label: string };
  label: string;
  onClose?: () => void;
  mutate?: (id: number, label: string, onClose?: () => void) => void;

  isPending?: boolean;
  data?: { id: number; label: string }[];
}

export default function WindowMenuItems({
  defaultValue,
  label,
  onClose,
  mutate,
  isPending = false,
  data,
}: IWindowMenuItemsProps) {
  const [value, setValue] = useState<TMenu>(
    defaultValue || { id: -1, label: "" }
  );

  const isSmUp = useMediaQuery("(min-width: 640px)");

  function onChangeItem(item: TMenu) {
    setValue(item);
  }

  async function handleClickEnter() {
    mutate?.(value.id, value.label, onClose);
  }

  function handleClickCancel() {
    onClose?.();
  }

  return (
    <div className="flex flex-col justify-start gap-3 sm:w-[420px]">
      <h3 className="text-text-primary font-semibold mb-2">{label}</h3>
      <Menu
        onChange={onChangeItem}
        options={data}
        value={value}
        label={label}
      />
      <div className="flex justify-start gap-2">
        <Button
          color="PRIMARY"
          size={isSmUp ? "MD" : "SM"}
          loading={isPending}
          disabled={isPending}
          onClick={handleClickEnter}
        >
          ثبت
        </Button>
        <Button
          color="SECONDARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickCancel}
          disabled={isPending}
        >
          انصراف
        </Button>
      </div>
    </div>
  );
}
