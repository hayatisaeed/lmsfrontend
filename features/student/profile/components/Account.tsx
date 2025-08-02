"use client";

//import componets profile
import { AccountItem } from "@/features/student/profile/components";
import Uploader from "@/features/student/profile/components/Uploader";

//import icons
import { Letter, Smartphone, UserRounded } from "@/shared/icons";

export default function Account() {
  return (
    <div className="flex w-full flex-col justify-start gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Uploader title="بارگذاری تصویر حساب" />
        <Uploader title="بارگذاری تصویر شناسنامه" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <AccountItem
          label="نام کاربری"
          value=""
          sendCode={false}
          labelModal="نام کاربری خود را وارد کنید."
          icon={<UserRounded size="SM" />}
          id="name"
        />

        <AccountItem
          label="ایمیل"
          value=""
          sendCode={true}
          labelModal="ایمیل خود را وارد کنید."
          icon={<Letter size="SM" />}
          id="email"
        />

        <AccountItem
          label="شماره موبایل"
          value=""
          sendCode={true}
          labelModal="شماره موبایل خود را وارد کنید."
          icon={<Smartphone size="SM" />}
          id="phone"
        />
      </div>
    </div>
  );
}
