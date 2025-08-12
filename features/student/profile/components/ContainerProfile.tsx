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

//typs
import { TStudentIdentity } from "@/types/student";

export default function ContainerProfile() {
  const {
    data: studentIdentity,
    isPending: isPendingStudentIdentity,
    isError,
    error,
  } = useGetStudentIdentity();

  const isPending = isPendingStudentIdentity;

  if (isPending)
    return (
      <div className="w-full h-screen flex items-center justify-center">
        LOADING
      </div>
    );

  const dataPersonal: TStudentIdentity = isError
    ? {
        date_of_birth: "",
        father_name: "",
        first_name: "",
        gender: "M",
        is_verified: false,
        last_name: "",
        national_id: "",
        submission_count: 1,
      }
    : studentIdentity;

  return (
    <div className="flex flex-col gap-5">
      <Container title="اطلاعات حساب">
        <Account />
      </Container>

      <Container title="اطلاعات هویتی">
        <Personal data={dataPersonal} />
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
