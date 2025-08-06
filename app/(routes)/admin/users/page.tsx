import ContainerUsers from "@/features/admin/users/components/ContainerUsers";
import { Container } from "@/shared/ui";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "مدیریت کاربران",
};

export default function Users() {
  return (
    <Container title="مدیریت کاربران" className="h-full">
      <Suspense fallback={<p>loader</p>}>
        <ContainerUsers />
      </Suspense>
    </Container>
  );
}
