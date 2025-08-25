"use client";

import { Avatar, DropDown } from "@/shared/components";
import { ArrowsALogout, PhoneCalling, UserRounded } from "@/assets/icons";
import { useRouter } from "next/navigation";
import { removeAccessToken } from "@/core/utils/token";
import toast from "react-hot-toast";
import { Role } from "@/core/types/role";
import { usePostLogout } from "@/services/tanstack/login/mutation";
import { Spinner } from "@/shared/ui";

interface IAccountProps {
  name?: string;
  image?: string;
  role: Role;
}

export default function Account({
  name = "کاربر",
  image,
  role,
}: IAccountProps) {
  const router = useRouter();

  const { mutate: logout, isPending: isPendingLogout } = usePostLogout();

  const rolePaths: Record<Role, string> = {
    Admin: "admin",
    Student: "student",
    Teacher: "teacher",
  };

  function handleClickAccount() {
    const basePath = rolePaths[role] ?? "";
    router.replace(`/${basePath}/profile`);
  }

  function handleClickLogout() {
    logout(undefined, {
      onSuccess: () => {
        removeAccessToken();
        localStorage.clear();
        router.push("/login");
        toast.success("خروج از حساب کاربری شما با موفقیت انجام شد");
      },
      onError: (err) => {
        console.error("Logout error:", err);
        toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
      },
    });
  }

  return (
    <div className="flex items-center gap-2">
      <DropDown>
        <DropDown.Toggler>
          <DropDown.Button aria-label="منوی حساب کاربری" />
        </DropDown.Toggler>

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
            {isPendingLogout ? <Spinner /> : "خروج"}
          </DropDown.Item>
        </DropDown.Window>
      </DropDown>

      <h3 className="text-sm md:text-[16px] truncate">{name}</h3>
      <Avatar image={image} />
    </div>
  );
}
