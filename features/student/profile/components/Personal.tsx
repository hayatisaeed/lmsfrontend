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
import { TStudentIdentity } from "@/types/student";

//key-react-query
import { getStudentIdentityKey } from "@/services/tanstack/student/profile/key";

interface IPersonalProps {
  data?: TStudentIdentity;
}

export default function Personal({ data }: IPersonalProps) {
  const queryClient = useQueryClient();

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
          queryClient.invalidateQueries({ queryKey: getStudentIdentityKey() });
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
              isLoading={isPostPendingStudentIdentity}
            />
          </Modal.Window>
        </Modal>
      </div>
    </div>
  );
}
