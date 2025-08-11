"use client";

//ui
import { Container } from "@/shared/ui";

//import items
import {
  Account,
  ChangePassword,
  Personal,
  Education,
} from "@/features/student/profile/components";

//react-query
import { useGetStudentIdentity } from "@/services/tanstack/student/profile/queries";

export default function ContainerProfile() {
  const { data: studentIdentity, isPending: isPendingStudentIdentity } =
    useGetStudentIdentity();

  const isPending = isPendingStudentIdentity;

  if (isPending)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        LOADING
      </div>
    );

  return (
    <div className="flex flex-col gap-5">
      <Container title="اطلاعات حساب">
        <Account />
      </Container>

      <Container title="اطلاعات هویتی">
        <Personal data={studentIdentity} />
      </Container>
      <Container title="اطلاعات تحصیلی">
        <Education />
      </Container>

      <Container title="تغییر رمز عبور">
        <ChangePassword />
      </Container>

      <Container title="اعلان ها">اعلان</Container>
    </div>
  );
}
