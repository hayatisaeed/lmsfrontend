import { PersonalItem } from "@/features/student/profile/components";
import {
  Book,
  Bookmark,
  Buildings,
  Card,
  City,
  Notebook,
  Smartphone,
} from "@/shared/icons";
import CityEdit from "./CityEdit";

export default function Personal() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
      <PersonalItem
        id="national-code"
        value=""
        labelModal="کدملی خود را وارد کنید"
        label="کدملی"
        icon={<Card size="SM" />}
        sendCode={false}
      />
      <PersonalItem
        id="city"
        value=""
        labelModal="استان-شهر محل سکونت خود را وارد کنید"
        label="محل سکونت"
        icon={<City size="SM" />}
        sendCode={false}
      />

      <PersonalItem
        id="study"
        value=""
        labelModal="مقطع تحصیلی خود را وارد کنید"
        label="مقطع تحصیلی"
        icon={<Book size="SM" />}
        sendCode={false}
      />

      <PersonalItem
        id="school-name"
        value=""
        labelModal="نام مدرسه خود را وارد کنید"
        label="نام مدرسه"
        icon={<Buildings size="SM" />}
        sendCode={false}
      />

      <PersonalItem
        id="school-type"
        value=""
        labelModal="نوع مدرسه خود را وارد کنید"
        label="نوع مدرسه"
        icon={<Bookmark size="SM" />}
        sendCode={false}
      />

      <PersonalItem
        id="parents-phone"
        value=""
        icon={<Smartphone size="SM" />}
        labelModal="شماره تماس اولیا خود را وارد کنید"
        label="شماره موبایل اولیا"
        sendCode={false}
      />
      <PersonalItem
        id="olympiad"
        value=""
        labelModal="المپیاد مدنظر خود را وارد کنید"
        label="المپیاد مدنظر"
        icon={<Notebook size="SM" />}
        sendCode={false}
      />
    </div>
  );
}
