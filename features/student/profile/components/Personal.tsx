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

export default function Personal() {
  return (
    <div className="flex flex-col w-full gap-5">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
        <PersonalItem
          value=""
          label="نام و نام خانوادگی"
          icon={<UserRounded size="SM" />}
        />
        <PersonalItem value="" label="کدملی" icon={<Card size="SM" />} />
        <PersonalItem value="" label="تاریخ تولد" icon={<UserId size="SM" />} />
        <PersonalItem value="" label="نام پدر" icon={<UserGroup size="SM" />} />
        <PersonalItem value="" label="جنسیت" icon={<UserCheck size="SM" />} />
      </div>
      <div className="flex w-full justify-end items-center">
        <Modal.Open id="identity-information">
          <Button type="button">تایید هویت</Button>
        </Modal.Open>
        <Modal.Window id="identity-information">
          <WindowIdentityInformation />
        </Modal.Window>
      </div>
    </div>
  );
}
