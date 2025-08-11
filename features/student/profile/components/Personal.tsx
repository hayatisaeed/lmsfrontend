"use client";

import { PersonalItem } from "@/features/student/profile/components";
import { Modal } from "@/shared/components";
import {
  Card,
  UserCheck,
  UserGroup,
  UserId,
  UserRounded,
} from "@/assets/icons";
import { Button } from "@/shared/ui";
import WindowIdentityInformation from "@/features/student/profile/modal/WindowIdentityInformation";
import { usePostStudentIdentity } from "@/services/tanstack/student/profile/mutation";
import { TStudentIdentity } from "@/types/student";

interface IPersonalProps {
  data?:
    | { success: true; data: TStudentIdentity }
    | { success: false; error: { message: string } };
}

export default function Personal({ data }: IPersonalProps) {
  const { mutate, isPending: isPostPendingStudentIdentity } =
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
          close?.();
        },
      }
    );
  }

  return (
    <div className="flex flex-col w-full gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
        <PersonalItem
          value={
            data?.success
              ? `${data?.data.father_name || ""} ${
                  data?.data.last_name || ""
                }`.trim()
              : ""
          }
          label="نام و نام خانوادگی"
          icon={<UserRounded size="SM" />}
        />
        <PersonalItem
          value={data?.success ? data?.data.national_id : ""}
          label="کدملی"
          isNum
          icon={<Card size="SM" />}
        />
        <PersonalItem
          isNum
          value={
            data?.success ? data?.data.date_of_birth?.replaceAll("-", "/") : ""
          }
          label="تاریخ تولد"
          icon={<UserId size="SM" />}
        />
        <PersonalItem
          value={data?.success ? data?.data.father_name : ""}
          label="نام پدر"
          icon={<UserGroup size="SM" />}
        />
        <PersonalItem
          value={data?.success ? (data.data.gender === "M" ? "مرد" : "زن") : ""}
          label="جنسیت"
          icon={<UserCheck size="SM" />}
        />
      </div>

      <div className="flex w-full justify-end items-center">
        <Modal>
          {data?.success ? (
            <></>
          ) : (
            <Modal.Open id="identity-information">
              <Button type="button">تایید هویت</Button>
            </Modal.Open>
          )}
          <Modal.Window id="identity-information">
            <WindowIdentityInformation
              mutate={studentIdentity}
              isLoading={isPostPendingStudentIdentity}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
