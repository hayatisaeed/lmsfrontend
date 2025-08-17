import api from "@/core/config/api/apiServer";
import { redirect } from "next/navigation";

interface IPageProps {
  params?: { idClass: string };
}

export default async function page({ params }: IPageProps) {
  const idClass = params?.idClass;

  //   // مثال چک ثبت نام
  //   const response = await api.get(`/classes/${idClass}/check-registration`);
  //   const isRegistered = response.data.registered;

  //   if (isRegistered) {
  //     redirect(`/student/classes/${idClass}/content`);
  //   } else {
  //     redirect(`/student/classes/${idClass}/enroll`);
  //   }
  redirect(`/student/classes/${idClass}/content`);
}
