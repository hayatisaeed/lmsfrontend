"use client";

//import dropdown
import { DropDown } from "@/shared/components";

//import icon
import { ArrowsALogout, PhoneCalling, UserRounded } from "@/shared/icons";

//import image
import Image from "next/image";

import { useRouter } from "next/navigation";

interface IAccountProps {
  name: string;
  image?: string;
}

export default function Account({ name, image }: IAccountProps) {
  const router = useRouter();

  function handleClickAccount() {
    router.replace(`profile`);
  }
  function handleClickLogout() {}

  return (
    <div className="flex items-center gap-2">
      <DropDown>
        <DropDown.Window>
          <DropDown.Item
            onClick={handleClickAccount}
            icon={<UserRounded size="SM" />}
          >
            حساب کاربری
          </DropDown.Item>
          <DropDown.Item icon={<PhoneCalling size="SM" />}>
            شماره موبایل
          </DropDown.Item>
          <DropDown.Item
            className="text-errors"
            onClick={handleClickLogout}
            icon={<ArrowsALogout size="SM" />}
          >
            خروج
          </DropDown.Item>
        </DropDown.Window>
        <DropDown.Toggler>
          <DropDown.Button />
        </DropDown.Toggler>
      </DropDown>

      <h3 className="text-sm md:text-[16px]">{name}</h3>
      <div className="relative size-8 md:size-10 rounded-full bg-box-primary">
        <Image
          fill
          alt="user"
          className="object-contain p-2"
          src={image || "/images/user.png"}
        />
      </div>
    </div>
  );
}
