"use client";

//math-media
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

//uiD
import { Button, Menu } from "@/shared/ui";
//types

import { TMenu } from "../types";

interface IWindowMenuCitiesProps {
  label: string;
  onClose?: () => void;
  states?: TMenu[];
  province?: TMenu;
  setProvince: (value: TMenu) => void;
  setCity: (value?: TMenu) => void;
  city?: TMenu;
  cities?: TMenu[];
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
  mutate,
  isLoading = false,
}: IWindowMenuCitiesProps) {
  const isSmUp = useMediaQuery("(min-width: 640px)");

  function handleClickEnter() {
    if (province?.id && city?.id) {
      mutate?.(
        {
          city: city.label,
          idCity: +city.id,
          idProvince: +province.id,
          province: province.label,
        },
        onClose
      );
    }
  }

  function handleClickCancel() {
    onClose?.();
  }

  function handleSelectProvince(item: { id: number | string; label: string }) {
    setProvince(item);
    setCity(undefined);
  }

  function handleSelectCity(item: { id: number | string; label: string }) {
    setCity(item);
  }

  return (
    <div className="flex flex-col gap-5 sm:w-[500px]">
      <h3 className="text-text-primary font-semibold">{label}</h3>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Menu
          label="استان مورد نظر خود را انتخاب کنید"
          options={states}
          value={province}
          onChange={handleSelectProvince}
          disabled={isLoadingStates}
        />

        <Menu
          label="شهر مورد نظر خود را انتخاب کنید"
          options={cities}
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
          disabled={isLoading || !province || !city}
          loading={isLoading}
        >
          ثبت
        </Button>

        <Button
          color="SECONDARY"
          size={isSmUp ? "MD" : "SM"}
          onClick={handleClickCancel}
          disabled={isLoading}
        >
          انصراف
        </Button>
      </div>
    </div>
  );
}
