import { Copy } from "@/assets/icons";
import { Container } from "@/shared/ui";
import InputEditText from "../../../../shared/components/InputEditText";

export default function ViewStudent() {
  return (
    <Container title="اطلاعات حساب">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-[900px]">
        <InputEditText />
      </div>
    </Container>
  );
}
