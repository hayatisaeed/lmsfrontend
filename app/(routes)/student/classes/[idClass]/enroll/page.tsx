import ContainerEnroll from "@/features/student/idClasses/enroll/ContainerEnroll";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "ثبت نام کلاس",
};

export default async function page() {
  return <ContainerEnroll />;
}
