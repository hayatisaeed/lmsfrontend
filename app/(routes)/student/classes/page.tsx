//NEXT.js
import { Metadata } from "next";

//components
import ContainerClasses from "@/features/student/classes/components/ContainerClasses";

export const metadata: Metadata = {
  title: "کلاس ها",
};

export default function Classes() {
  return <ContainerClasses />;
}
