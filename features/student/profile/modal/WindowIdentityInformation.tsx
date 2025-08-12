//react-hook-form
import { useForm } from "react-hook-form";

//hooks
import { useMediaQuery } from "@/shared/hooks/useMediaQuery";

//ui
import { Button } from "@/shared/ui";

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

  const handleBirthDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    value = value.replace(/[^0-9\/]/g, "");

    if (value.length === 4 && value.indexOf("/") === -1) {
      value = value + "/";
    } else if (value.length === 7 && value.lastIndexOf("/") === 4) {
      value = value + "/";
    }

    if (value.length <= 10) {
      setValue("birthDate", value);
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
                placeholder=""
                {...register("nationalCode", {
                  required: "کد ملی الزامی است",
                  minLength: { value: 10, message: "کد ملی باید ۱۰ رقم باشد" },
                  maxLength: { value: 10, message: "کد ملی باید ۱۰ رقم باشد" },
                })}
                onChange={handleNationalCodeChange}
                value={watch("nationalCode") || ""}
              />
            </div>
            {errors.nationalCode && (
              <p className="text-red-500 text-xs mt-1">
                {errors.nationalCode.message}
              </p>
            )}
          </div>

          {/* Birth Date Input */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="birthDate"
              className="block text-sm mb-1 text-text-secondary"
            >
              تاریخ تولد
            </label>
            <div className="flex justify-between items-center gap-1 w-full bg-box-primary p-4 rounded-2xl font-shabnam">
              <input
                id="birthDate"
                type="text"
                inputMode="numeric"
                className="outline-0 border-0 w-full bg-transparent"
                placeholder=""
                {...register("birthDate", {
                  required: "تاریخ تولد الزامی است",
                  pattern: {
                    value: /^[0-9]{4}\/[0-9]{2}\/[0-9]{2}$/,
                    message: "فرمت تاریخ صحیح نیست (مثال: 1370/01/01)",
                  },
                })}
                onChange={handleBirthDateChange}
                value={watch("birthDate") || ""}
              />
            </div>
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
