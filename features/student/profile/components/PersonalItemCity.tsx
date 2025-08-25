"use client";
//icons
import { City } from "@/assets/icons";

//ui
import CityEdit from "./ui/CityEdit";
import { useGetLocation } from "@/services/tanstack/student/profile/queries";

//hooks
import { useEffect, useState } from "react";

//types
import { TMenu } from "../types";

interface IAccountItemProps {
  province?: string;
  city?: string;
  mutate: (
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

export default function PersonalItemCity({
  city: cityDefault,
  province: provinceDefault,
  mutate,
  isLoading,
}: IAccountItemProps) {
  const [province, setProvince] = useState<TMenu | undefined>();
  const [city, setCity] = useState<TMenu | undefined>();

  const { data: states, isLoading: isLoadingStates } = useGetLocation();
  const { data: cities, isLoading: isLoadingCities } = useGetLocation(
    province?.id || undefined
  );

  // مقداردهی اولیه استان
  useEffect(() => {
    if (states && provinceDefault) {
      const selectedProvince = states.find(
        (state) => state.label === provinceDefault
      );
      setProvince(selectedProvince);
    }
  }, [provinceDefault, states]);

  // مقداردهی اولیه شهر وقتی استان مشخص شد
  useEffect(() => {
    if (cities && cityDefault) {
      const selectedCity = cities.find((c) => c.label === cityDefault);
      setCity(selectedCity);
    }
  }, [cityDefault, cities]);

  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">محل سکونت</h3>
      </div>
      <CityEdit
        states={states}
        cities={cities}
        isLoadingStates={isLoadingStates}
        isLoadingCities={isLoadingCities}
        city={city}
        setCity={setCity}
        province={province}
        setProvince={setProvince}
        icon={<City size="SM" />}
        mutate={mutate}
        isLoading={isLoading}
      />
    </div>
  );
}
