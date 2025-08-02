//import items
import {
  Account,
  ChangePassword,
  Personal,
} from "@/features/student/profile/components";

//import ui
import { Container } from "@/shared/ui";

//immport types
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروفایل",
};

export default function Profile() {
  return (
    <div className="flex flex-col gap-5">
      <Container title="اطلاعات حساب">
        <Account />
      </Container>

      <Container title="اطلاعات شخصی">
        <Personal />
      </Container>

      <Container title="تغییر رمز عبور">
        <ChangePassword />
      </Container>

      <Container title="اعلان ها">اعلان</Container>
    </div>
  );
}
