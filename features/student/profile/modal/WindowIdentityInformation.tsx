"use client";
import { useForm } from "react-hook-form";
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";
import { Button } from "@/shared/ui";
import { JalaliInputDatePicker } from "@/shared/components"; // مسیر خودت رو وارد کن

interface IWindowIdentityInformationProps {
  onClose?: () => void;
  mutate?: (
    national_id: string,
    date_of_birth: string,
    close?: () => void
  ) => void;
  isLoading?: boolean;
}

type IdentityFormData = {
  nationalCode: string;
  birthDate: string;
};

export default function WindowIdentityInformation({
  isLoading = false,
  onClose,
  mutate,
}: IWindowIdentityInformationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<IdentityFormData>();

  const isSmUp = useMediaQuery("(min-width: 640px)");

  const onSubmit = (data: IdentityFormData) => {
    try {
      mutate?.(data.nationalCode, data.birthDate, onClose);
    } catch (error) {
      console.error("Error submitting identity information:", error);
    }
  };

  const handleNationalCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, "");
    if (value.length <= 10) {
      setValue("nationalCode", value);
    }
  };

  function handleClickCancel() {
    onClose?.();
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col justify-start gap-5 sm:w-[420px]">
        <h3 className="text-text-primary font-semibold">تایید هویت</h3>

        <div className="flex flex-col gap-4">
          {/* National Code Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="nationalCode"
              className="block text-sm mb-1 text-text-secondary"
            >
              کد ملی
            </label>
            <div className="flex justify-between items-center gap-1 w-full bg-box-primary p-4 rounded-2xl">
              <input
                id="nationalCode"
                type="text"
                inputMode="numeric"
                className="outline-0 border-0 w-full bg-transparent font-shabnam"
                {...register("nationalCode", {
                  required: "کد ملی الزامی است",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "کد ملی باید ۱۰ رقم باشد",
                  },
                })}
                onChange={handleNationalCodeChange}
                value={watch("nationalCode") || ""}
              />
            </div>
            {errors.nationalCode && (
              <p className="text-errors text-xs mt-1">
                {errors.nationalCode.message}
              </p>
            )}
          </div>

          {/* Birth Date Input */}
          <div className="flex flex-col gap-2 w-full">
            <label
              htmlFor="birthDate"
              className="block text-sm mb-1 text-text-secondary"
            >
              تاریخ تولد
            </label>

            <JalaliInputDatePicker
              setDate={(date) => setValue("birthDate", date)}
            />

            {errors.birthDate && (
              <p className="text-errors text-xs mt-1">
                {errors.birthDate.message}
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-start gap-2">
          <Button
            type="submit"
            color="PRIMARY"
            size={isSmUp ? "MD" : "SM"}
            disabled={isLoading}
            loading={isLoading}
          >
            تایید
          </Button>
          <Button
            type="button"
            color="SECONDARY"
            size={isSmUp ? "MD" : "SM"}
            disabled={isLoading}
            onClick={handleClickCancel}
          >
            انصراف
          </Button>
        </div>
      </div>
    </form>
  );
}
