import { PersonalItem } from "@/features/student/profile/components";
import {
  Card,
  UserCheck,
  UserGroup,
  UserId,
  UserRounded,
} from "@/shared/icons";

export default function Personal() {
  return (
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
  );
}
