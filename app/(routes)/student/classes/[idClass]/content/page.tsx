import ContainerContent from "@/features/student/idClasses/content/ContainerContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "کلاس",
};

export default function page() {
  return <ContainerContent />;
}
