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
import { useGetStudentProfile } from "@/services/tanstack/student/profile/queries";

export default function ContainerProfile() {
  const {
    data,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useGetStudentProfile();

  if (isLoadingProfile || isErrorProfile)
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isErrorProfile ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "LOADING"
        )}
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
        <Education data={studentEducation} />
      </Container>

      <Container title="تغییر رمز عبور">
        <ChangePassword />
      </Container>

      <Container title="اعلان ها">اعلان</Container>
    </div>
  );
}
