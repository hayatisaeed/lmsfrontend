import { Account } from "@/features/profile/components";
import { Container } from "@/shared/ui";

//immport types
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "پروفایل",
};

export default function Profile() {
  return (
    <div>
      <Container title="اطلاعات حساب">
        <Account/>
      </Container>
    </div>
  );
}
