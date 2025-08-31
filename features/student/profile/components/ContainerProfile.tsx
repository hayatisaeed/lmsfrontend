"use client";

//ui
import { Container } from "@/shared/ui";

//import items
import {
  Account,
  Personal,
  Education,
} from "@/features/student/profile/components";

//react-query
import {
  useGetEducation,
  useGetStudentProfile,
} from "@/services/tanstack/student/profile/queries";
import { useGetUserSession } from "@/services/tanstack/common/queries";

export default function ContainerProfile() {
  const {
    data,
    isLoading: isLoadingProfile,
    isError: isErrorProfile,
  } = useGetStudentProfile();

  const {
    data: sessions,
    isLoading: isLoadingSession,
    isError: isErrorSession,
  } = useGetUserSession();

  const {
    data: education,
    isLoading: isLoadingEducation,
    isError: isErrorEducation,
  } = useGetEducation();

  if (
    isLoadingProfile ||
    isErrorProfile ||
    isLoadingSession ||
    isErrorSession ||
    isLoadingEducation ||
    isErrorEducation
  )
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isErrorProfile || isErrorSession ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "در حال بارگذاری ..."
        )}
      </div>
    );

  return (
    <div className="flex flex-col gap-5">
      <Container title="اطلاعات حساب">
        <Account data={sessions} avatar={data?.identity.avatar} />
      </Container>

      <Container title="اطلاعات هویتی">
        <Personal data={data?.identity} />
      </Container>
      <Container title="اطلاعات تحصیلی">
        <Education
          data={education}
          location={data?.location}
          parent={data?.identity.father_name || ""}
        />
      </Container>

      {/* <Container title="تغییر رمز عبور">
        <ChangePassword />
      </Container> */}

      <Container title="اعلان ها">اعلان</Container>
    </div>
  );
}
