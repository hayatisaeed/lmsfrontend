"use client";

//componnets
import { PersonalItem } from "@/features/student/profile/components";

//modal
import { Modal } from "@/shared/components";

//icon
import {
  Card,
  UserCheck,
  UserGroup,
  UserId,
  UserRounded,
} from "@/assets/icons";

//ui
import { Button } from "@/shared/ui";

//modal-window
import WindowIdentityInformation from "@/features/student/profile/modal/WindowIdentityInformation";

//react-query
import { useQueryClient } from "@tanstack/react-query";
import { usePostStudentIdentity } from "@/services/tanstack/student/profile/mutation";

//typs
import { TStudentIdentity } from "@/services/tanstack/student/profile/types";

//key-react-query
import { getStudentIdentityKey } from "@/services/tanstack/student/profile/key";

//toast
import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface IPersonalProps {
  data?: TStudentIdentity;
}

export default function Personal({ data }: IPersonalProps) {
  const queryClient = useQueryClient();

  const { mutate, isPending: isPendingStudentIdentity } =
    usePostStudentIdentity();

  function studentIdentity(
    national_id: string,
    date_of_birth: string,
    close?: () => void
  ) {
    mutate(
      { national_id, date_of_birth: date_of_birth.replaceAll("/", "-") },
      {
        onSuccess: () => {
          queryClient.invalidateQueries({ queryKey: getStudentIdentityKey() });
          toast.success("اطلاعات شما با موفقیت ثبت شد.");
          close?.();
        },
        onError: (error) => {
          const err = error as AxiosError;
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          const nationalIdError = err.response?.data?.national_id;

          if (
            Array.isArray(nationalIdError) &&
            nationalIdError.some((msg: string) =>
              msg.includes(
                "Identity Information with this national id already exists."
              )
            )
          ) {
            toast.error("قبلا مشخصاتی به این کدملی ثبت شده است");
            return;
          }

          toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
        },
      }
    );
  }

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
        <PersonalItem
          value={
            data?.national_id
              ? `${data?.father_name || ""} ${data?.last_name || ""}`.trim()
              : ""
          }
          label="نام و نام خانوادگی"
          icon={<UserRounded size="SM" />}
        />
        <PersonalItem
          value={data?.national_id ? data.national_id : ""}
          label="کدملی"
          isNum
          icon={<Card size="SM" />}
        />
        <PersonalItem
          isNum
          value={
            data?.national_id ? data.date_of_birth?.replaceAll("-", "/") : ""
          }
          label="تاریخ تولد"
          icon={<UserId size="SM" />}
        />
        <PersonalItem
          value={data?.national_id ? data.father_name : ""}
          label="نام پدر"
          icon={<UserGroup size="SM" />}
        />
        <PersonalItem
          value={data?.national_id ? (data.gender === "M" ? "مرد" : "زن") : ""}
          label="جنسیت"
          icon={<UserCheck size="SM" />}
        />
      </div>

      <div className="flex w-full justify-end items-center">
        <Modal>
          {data?.national_id ? (
            <></>
          ) : (
            <Modal.Open id="identity-information">
              <Button type="button">تایید هویت</Button>
            </Modal.Open>
          )}
          <Modal.Window id="identity-information">
            <WindowIdentityInformation
              mutate={studentIdentity}
              isLoading={isPendingStudentIdentity}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
