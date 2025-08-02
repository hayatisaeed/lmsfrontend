import CityEdit from "./CityEdit";
import { City } from "@/shared/icons";

interface IAccountItemProps {
  value: string;
}

export default function PersonalItemCity({ value }: IAccountItemProps) {
  return (
    <div className="w-full flex flex-col justify-start gap-3">
      <div className="flex w-full justify-start">
        <h3 className="text-text-primary text-sm">محل سکونت</h3>
      </div>
      <CityEdit icon={<City size="SM" />} />
    </div>
  );
}
