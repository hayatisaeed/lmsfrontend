import ContainerEnroll from "@/features/student/idClasses/enroll/ContainerEnroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام کلاس",
};

interface IPageProps {
  params: Promise<{ idClass: string }>;
}

export default async function page({ params }: IPageProps) {
  const { idClass } = await params;
  return <ContainerEnroll idClass={idClass} />;
}
