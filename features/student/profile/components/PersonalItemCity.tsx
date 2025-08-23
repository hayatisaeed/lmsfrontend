"use client";
//icond
import { City } from "@/assets/icons";

//ui
import CityEdit from "./ui/CityEdit";
import { useGetLocation } from "@/services/tanstack/student/profile/queries";

//hooks
import { useState } from "react";

//types
import { TMenu } from "../types";

interface IAccountItemProps {
  value: string;
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
  value,
  mutate,
  isLoading,
}: IAccountItemProps) {
  const [province, setProvince] = useState<TMenu | undefined>();
  const [city, setCity] = useState<TMenu | undefined>();

  const { data: states, isLoading: isLoadingStates } = useGetLocation();
  const { data: cities, isLoading: isLoadingCities } = useGetLocation(
    province?.id
  );

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
