//types
import ContainerClasses from "@/features/admin/classes/components/ContainerClasses";
import { Container } from "@/shared/ui";
import { Metadata } from "next";

//metadata
export const metadata: Metadata = {
  title: "مدیریت کلاس ها",
};

export default function Classes() {
  return (
    <Container className="h-full" title="مدیریت کلاس ها">
      <ContainerClasses />
    </Container>
  );
}
