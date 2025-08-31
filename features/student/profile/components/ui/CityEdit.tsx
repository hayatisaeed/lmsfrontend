"use client";

//import modal
import { Modal } from "@/shared/components/";

//import icons
import { PenNewSquare } from "@/assets/icons";

//import types
import { ReactNode } from "react";
import { TMenu } from "../../types";

//input window modal
import WindowMenuCities from "../../modal/WindowMenuCities";

interface IInputEditProps {
  defaultValue?: { id: number; label: string };
  icon?: ReactNode;
  states?: TMenu[];
  province?: TMenu;
  city?: TMenu;
  cities?: TMenu[];
  setCity: (value?: TMenu) => void;
  setProvince: (value?: TMenu) => void;
  isLoadingStates?: boolean;
  isLoadingCities?: boolean;
  mutate?: (
    data: {
      idProvince: number;
      province: string;
      idCity: number;
      city: string;
    },
    onClose?: () => void
  ) => void;

  isLoading?: boolean;
}

export default function CityEdit({
  isLoadingCities = false,
  isLoadingStates = false,
  icon,
  states,
  province,
  setProvince,
  setCity,
  city,
  cities,
  mutate,
  isLoading,
}: IInputEditProps) {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-xl bg-white-primary border border-text-primary/50">
      {icon}
      <h3 className="grow border-0 outline-0 text-sm">{`${
        province?.label || ""
      } ${city?.label || ""}`}</h3>
      <Modal>
        <Modal.Open id="edit-input-city">
          <button type="button" className="cursor-pointer">
            <PenNewSquare size="SM" />
          </button>
        </Modal.Open>

        <Modal.Window id="edit-input-city">
          <WindowMenuCities
            province={province}
            cities={cities}
            setProvince={setProvince}
            city={city}
            setCity={setCity}
            states={states}
            isLoadingStates={isLoadingStates}
            isLoadingCities={isLoadingCities}
            label="محل سکونت خود را وارد کنید"
            mutate={mutate}
            isLoading={isLoading}
          />
        </Modal.Window>
      </Modal>
    </div>
  );
}
