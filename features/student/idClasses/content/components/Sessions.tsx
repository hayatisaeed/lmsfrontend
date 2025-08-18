"use client";
import { Button, Container } from "@/shared/ui";
import SessionItem from "./SessionItem";
import { usePathname, useRouter } from "next/navigation";

export default function Sessions() {
  const pathname = usePathname();
  const router = useRouter();

  function handleClickAll() {
    router.push(`${pathname}/sessions`);
  }

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
          onClick={handleClickAll}
        >
          مشاهده همه
        </Button>
      }
    >
      <div className="flex flex-col gap-3">
        <SessionItem id="5" title="جلسه ارزیبایی ادبیات" />
        <SessionItem id="7" title="جلسه ارزیبایی ادبیات" />
        <SessionItem id="9" title="جلسه ارزیبایی ادبیات" />
        <SessionItem id="10" title="جلسه ارزیبایی ادبیات" />
        <SessionItem id="15" title="جلسه ارزیبایی ادبیات" />
      </div>
    </Container>
  );
}
