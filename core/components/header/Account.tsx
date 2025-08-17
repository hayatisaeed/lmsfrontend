"use client";

//import dropdown
import { Avatar, DropDown } from "@/shared/components";

//import icon
import { ArrowsALogout, PhoneCalling, UserRounded } from "@/assets/icons";

import { useRouter } from "next/navigation";

//token
import { clearTokens } from "@/core/utils/token";

//toast
import toast from "react-hot-toast";

interface IAccountProps {
  name: string;
  image?: string;
}

export default function Account({ name, image }: IAccountProps) {
  const router = useRouter();

  function handleClickAccount() {
    router.replace(`profile`);
  }
  function handleClickLogout() {
    try {
      clearTokens();
      router.push("/login");
      toast.success("خروج از حساب کاربری شما با موفقیت انجام شد");
    } catch {
      toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
    }
  }

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
      <Avatar />
    </div>
  );
}
