"use client";
//icond
import { City } from "@/assets/icons";

//ui
import CityEdit from "./ui/CityEdit";
import {
  useGetCities,
  useGetStates,
} from "@/services/tanstack/student/profile/queries";
import { useEffect, useState } from "react";

//types
import { TCities } from "../types";

interface IAccountItemProps {
  value: string;
}

export default function PersonalItemCity({ value }: IAccountItemProps) {
  const [province, setProvince] = useState<TCities | undefined>();
  const [city, setCity] = useState<TCities | undefined>();

  const { data: states } = useGetStates();
  const { data: cities } = useGetCities(province?.id);

  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">محل سکونت</h3>
      </div>
      <CityEdit
        states={states}
        cities={cities}
        city={city}
        setCity={setCity}
        province={province}
        setProvince={setProvince}
        icon={<City size="SM" />}
      />
    </div>
  );
}
