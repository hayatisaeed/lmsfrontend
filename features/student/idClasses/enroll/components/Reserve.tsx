import { Alarm } from "@/assets/icons";
import { Button, Container } from "@/shared/ui";

interface IReserveProps {
  mutate: () => void;
  isPending: boolean;
}

export default function Reserve({ mutate, isPending }: IReserveProps) {
  return (
    <Container title="ثبت نام" className="!bg-box-primary w-full justify-start">
      <Button
        type="button"
        onClick={mutate}
        size="FULL"
        color="PRIMARY"
        icon={<Alarm size="SM" color="LIGHT" />}
        loading={isPending}
      >
        ثبت نام در دوره
      </Button>
    </Container>
  );
}
