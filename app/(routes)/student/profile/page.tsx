import ContainerProfile from "@/features/student/profile/components/ContainerProfile";

//immport types
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروفایل",
};

export default function Profile() {
  return <ContainerProfile />;
}
