"use client";
import { ArrowBack } from "@/assets/icons";
import { Button, Container } from "@/shared/ui";
import { useRouter } from "next/navigation";
import Reserve from "./components/Reserve";
import Course from "./components/Course";

interface IContainerEnrollProps {
  idClass: string;
}

export default function ContainerEnroll({}: IContainerEnrollProps) {
  const router = useRouter();

  function handleClickBack() {
    router.push("/student/classes");
  }

  return (
    <Container
      className="min-h-full"
      between={
        <Button
          type="button"
          onClick={handleClickBack}
          icon={<ArrowBack size="XS" />}
          iconLeft
          color="SECONDARY"
        >
          بازگشت
        </Button>
      }
      title="منتور استاد رحمانی"
    >
      <div className="w-full grow grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-5">
        <Course />
        <Reserve />
      </div>
    </Container>
  );
}
