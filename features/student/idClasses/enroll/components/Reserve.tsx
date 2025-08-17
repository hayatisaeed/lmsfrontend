import { Alarm } from "@/assets/icons";
import { Button, Container } from "@/shared/ui";

export default function Reserve() {
  return (
    <Container title="ثبت نام" className="!bg-box-primary w-full justify-start">
      <Button
        type="button"
        size="FULL"
        color="PRIMARY"
        icon={<Alarm size="SM" color="LIGHT" />}
      >
        ثبت نام در دوره
      </Button>
    </Container>
  );
}
