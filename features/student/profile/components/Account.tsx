"use client";

//import componets profile
import { AccountItem } from "@/features/student/profile/components";

//component
import { Uploader } from "@/shared/components";

//import icons
import { Letter, Smartphone, UserRounded } from "@/assets/icons";
import { IUserSession } from "@/services/tanstack/common/type";
import { usePutStudentProfile } from "@/services/tanstack/student/profile/mutation";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { getUserSessionKey } from "@/services/tanstack/common/key";

interface IAccountProps {
  data?: IUserSession;
}

export default function Account({ data }: IAccountProps) {
  const { mutate: mutateProfile, isPending: isPendingProfile } =
    usePutStudentProfile();

  const queryClient = useQueryClient();

  function showToast(success: boolean, onClose?: () => void) {
    if (success) {
      toast.success("اطلاعات شما با موفقیت ثبت شد.");
      queryClient.invalidateQueries({ queryKey: getUserSessionKey() });
      onClose?.();
    } else {
      toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
    }
  }
  function handleMutateProfileDisplayName(
    display_name: string,
    onClose?: () => void
  ) {
    mutateProfile(
      { display_name },
      {
        onSuccess: () => {
          showToast(true, onClose);
        },
        onError: () => {
          showToast(false, onClose);
        },
      }
    );
  }

  function handleMutateProfileEmail(email: string, onClose?: () => void) {
    mutateProfile(
      { email },
      {
        onSuccess: () => {
          showToast(true, onClose);
        },
        onError: () => {
          showToast(false, onClose);
        },
      }
    );
  }

  return (
    <div className="flex w-full flex-col justify-start gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <Uploader title="بارگذاری تصویر حساب" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        <AccountItem
          label="نام کاربری"
          value={data?.user.display_name || ""}
          sendCode={false}
          labelModal="نام کاربری خود را وارد کنید."
          icon={<UserRounded size="SM" />}
          mutate={handleMutateProfileDisplayName}
          id="user-name"
          isPending={isPendingProfile}
        />

        <AccountItem
          label="ایمیل"
          value={data?.user.email || ""}
          sendCode={false}
          labelModal="ایمیل خود را وارد کنید."
          icon={<Letter size="SM" />}
          id="email"
          pattern={/^\D.*@.+\..+$/}
          error="ایمیل"
          mutate={handleMutateProfileEmail}
          isPending={isPendingProfile}
        />

        <AccountItem
          readOnly
          label="شماره موبایل"
          value={data?.user.phone || ""}
          sendCode={false}
          labelModal="شماره موبایل خود را وارد کنید."
          icon={<Smartphone size="SM" />}
          id="phone"
          isNum
          error="شماره موبایل"
          pattern={/^0?9\d{9}$/}
        />
      </div>
    </div>
  );
}
