import { Button, Container } from "@/shared/ui";

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
      Sessions
    </Container>
  );
}
