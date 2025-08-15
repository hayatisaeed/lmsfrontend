"use client";
//icond
import { City } from "@/assets/icons";

//ui
import CityEdit from "./ui/CityEdit";
import {
  useGetCities,
  useGetStates,
} from "@/services/tanstack/student/profile/queries";

//hooks
import { useState } from "react";

//types
import { TMenu } from "../types";

interface IAccountItemProps {
  value: string;
}

export default function PersonalItemCity({ value }: IAccountItemProps) {
  const [province, setProvince] = useState<TMenu | undefined>();
  const [city, setCity] = useState<TMenu | undefined>();

  const { data: states, isLoading: isLoadingStates } = useGetStates();
  const { data: cities, isLoading: isLoadingCities } = useGetCities(
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
      />
    </div>
  );
}
