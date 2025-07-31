"use client";

//improt react-hook-form
import { Controller, useForm } from "react-hook-form";

//import item
import { ChangePasswordItem } from "@/features/profile/components/";

//import ui
import { Button } from "@/shared/ui";

interface IForm {
  prevPassword?: string;
  newPassword?: string;
  replayPawssword?: string;
}

export default function ChangePassword() {
  const { handleSubmit, control, getValues } = useForm<IForm>();

  function onSubmit(values: IForm) {
    console.log(values);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col w-full gap-5">
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
          <Controller
            control={control}
            name="prevPassword"
            rules={{ required: "رمز عبور فعلی نمی‌تواند خالی باشد." }}
            render={({ field, fieldState }) => (
              <ChangePasswordItem
                field={field}
                label="رمز عبور فعلی"
                error={fieldState.error?.message}
              />
            )}
          />

          <Controller
            control={control}
            name="newPassword"
            rules={{
              pattern: {
                value:
                  /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z\d])[A-Za-z\d\S]{8,}$/,
                message: "رمز عبور باید حداقل ۸ کاراکتر و شامل حرف و عدد باشد.",
              },
            }}
            render={({ field, fieldState }) => (
              <ChangePasswordItem
                field={field}
                label="رمز عبور جدید"
                error={fieldState.error?.message}
              />
            )}
          />
          <Controller
            control={control}
            name="replayPawssword"
            rules={{
              validate: {
                value: (value) =>
                  value === getValues("newPassword") ||
                  "رمز عبور وارد شده یکسان نیست.",
              },
            }}
            render={({ field, fieldState }) => (
              <ChangePasswordItem
                field={field}
                label="تکرار رمز عبور جدید"
                error={fieldState.error?.message}
              />
            )}
          />
        </div>
        <div className="flex w-full justify-between items-center">
          <Button type="submit">ثبت تغییرات</Button>
        </div>
      </div>
    </form>
  );
}
