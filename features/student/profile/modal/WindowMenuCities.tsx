"use client";

//math-media
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

//uiD
import { Button, Menu } from "@/shared/ui";
//types
import { TCitie, TState } from "@/services/tanstack/student/profile/types";
import { TMenu } from "../types";

interface IWindowMenuCitiesProps {
  label: string;
  onClose?: () => void;
  states?: TState[];
  province?: TMenu;
  setProvince: (value: TMenu) => void;
  setCity: (value?: TMenu) => void;
  city?: TMenu;
  cities?: TCitie[];
  isLoadingStates?: boolean;
  isLoadingCities?: boolean;
}

export default function WindowMenuCities({
  setProvince,
  province,
  cities,
  isLoadingCities = false,
  isLoadingStates = false,
  label,
  onClose,
  setCity,
  city,
  states,
}: IWindowMenuCitiesProps) {
  const isSmUp = useMediaQuery("(min-width: 640px)");

  function handleClickEnter() {
    onClose?.();
  }

  function handleClickCancel() {
    onClose?.();
  }

  function handleSelectProvince(item: { id: number; label: string }) {
    setProvince(item);
    setCity(undefined);
  }

  function handleSelectCity(item: { id: number; label: string }) {
    setCity(item);
  }

  const provinceOptions = states?.map((item) => ({
    id: item.id,
    label: item.name,
  }));

  const citiesOptions = cities?.map((item) => ({
    id: item.id,
    label: item.name,
  }));

  return (
    <div className="flex flex-col gap-5 sm:w-[500px]">
      <h3 className="text-text-primary font-semibold">{label}</h3>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Menu
          label="استان مورد نظر خود را انتخاب کنید"
          options={provinceOptions}
          value={province}
          onChange={handleSelectProvince}
          disabled={isLoadingStates}
        />

        <Menu
          label="شهر مورد نظر خود را انتخاب کنید"
          options={citiesOptions}
          value={city}
          onChange={handleSelectCity}
          disabled={!province || isLoadingCities}
        />
      </div>

      <div className="flex gap-2">
        <Button
          color="PRIMARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickEnter}
          disabled={!province || !city}
        >
          ثبت
        </Button>

        <Button
          color="SECONDARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickCancel}
        >
          انصراف
        </Button>
      </div>
    </div>
  );
}
