"use client";

import { useState } from "react";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { Button, Menu } from "@/shared/ui";

import { provinces } from "@/shared/constant/provinces";
import { cities } from "@/shared/constant/cities";
import { DropDown } from "@/shared/components";

interface IWindowMenuCitiesProps {
  defaultProvince?: { id: number; label: string };
  defaultCity?: { id: number; label: string };
  label: string;
  onClose?: () => void;
}

export default function WindowMenuCities({
  defaultProvince,
  defaultCity,
  label,
  onClose,
}: IWindowMenuCitiesProps) {
  const [province, setProvince] = useState<
    { id: number; label: string } | undefined
  >(defaultProvince);
  const [city, setCity] = useState<{ id: number; label: string } | undefined>(
    defaultCity
  );

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

  const provinceOptions = provinces.map((item) => ({
    id: item.id,
    label: item.name,
  }));

  const cityOptions = province
    ? cities
        .filter((item) => item.province_id === province.id)
        .map((item) => ({ id: item.id, label: item.name }))
    : [];

  return (
    <div className="flex flex-col gap-5 sm:w-[500px]">
      <h3 className="text-text-primary font-semibold">{label}</h3>
      <div className="flex flex-col sm:flex-row gap-3 w-full">
        <Menu
          label="استان مورد نظر خود را انتخاب کنید"
          options={provinceOptions}
          value={province}
          onChange={handleSelectProvince}
        />

        <Menu
          label="شهر مورد نظر خود را انتخاب کنید"
          options={cityOptions}
          value={city}
          onChange={handleSelectCity}
          disabled={!province}
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
