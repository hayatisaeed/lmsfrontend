"use client";

//import item
import { AccountItem } from "@/features/profile/components";

//import icons
import { Letter, Smartphone, UserRounded } from "@/shared/icons";

export default function Account() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      <AccountItem
        label="نام و نام خانوادگی"
        value=""
        sendCode={false}
        labelModal="نام و نام خانوادگی خود را وارد کنید."
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
  );
}
