"use client";

//components
import { InputEdit } from "@/features/student/profile/components";

//types
import { ReactNode } from "react";

//ui
import MenuItems from "./ui/MenuItems";

// Base interface for common props
interface BaseAccountItemProps {
  label?: string;
  icon?: ReactNode;
  labelModal: string;
  id: string;
  isPending?: boolean;
}

// Interface for list type items
interface ListItemProps extends BaseAccountItemProps {
  isList: true;
  value?: { id: number | string; label: string };
  data?: { id: number | string; label: string }[];
  mutate?: (id: number | string, label: string, onClose?: () => void) => void;
}

// Interface for input type items
interface InputItemProps extends BaseAccountItemProps {
  isList?: false;
  value: string;
  mutate?: (value: string, onClose?: () => void) => void;
  isNum?: boolean;
  pattern?: RegExp;
  error?: string;
  sendCode?: boolean;
}

// Combined type for component props
type EducationItemProps = InputItemProps | ListItemProps;

export default function EducationItem(props: EducationItemProps) {
  const {
    label = "",
    labelModal,
    value,
    icon,
    id: idModal,
    mutate,
    isPending,
  } = props;

  const renderInputEdit = () => (
    <InputEdit
      mutate={mutate as InputItemProps["mutate"]}
      isNum={(props as InputItemProps).isNum}
      defaultValue={value as string}
      label={labelModal}
      icon={icon}
      sendCode={(props as InputItemProps).sendCode}
      id={idModal}
      isPending={isPending}
      pattern={(props as InputItemProps).pattern}
      error={(props as InputItemProps).error}
    />
  );

  const renderMenuItems = () => {
    if (!("isList" in props) || !props.isList) return null;
    return (
      <MenuItems
        id={idModal}
        defaultValue={props.value}
        data={props.data}
        mutate={props.mutate}
        label={labelModal}
        icon={icon}
      />
    );
  };

  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">{label}</h3>
      </div>

      {"isList" in props && props.isList
        ? renderMenuItems()
        : renderInputEdit()}
    </div>
  );
}
