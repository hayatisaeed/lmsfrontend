import { Button, Container } from "@/shared/ui";
import SessionItem from "./SessionItem";

export default function Sessions() {
  return (
    <Container
      className="h-full"
      title="جلسات"
      between={
        <Button
          type="button"
          size="SM"
          className="!rounded-xl !text-xs !py-3"
          color="PRIMARY"
        >
          مشاهده همه
        </Button>
      }
    >
      <div className="flex flex-col gap-3">
        <SessionItem title="جلسه ارزیبایی ادبیات" />
        <SessionItem title="جلسه ارزیبایی ادبیات" />
        <SessionItem title="جلسه ارزیبایی ادبیات" />
        <SessionItem title="جلسه ارزیبایی ادبیات" />
        <SessionItem title="جلسه ارزیبایی ادبیات" />

       
      </div>
    </Container>
  );
}
