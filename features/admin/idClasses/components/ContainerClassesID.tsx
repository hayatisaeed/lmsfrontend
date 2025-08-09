"use client";
import { Button, Container } from "@/shared/ui";
import TabelStudents from "./TabelStudents";
import TabelClass from "./TabelClass";
import ArrowLeft from "@/assets/icons/arrows/ArrowLeft";
import { useRouter } from "next/navigation";

interface IContainerClassesIDProps {
  id: string;
}

export default function ContainerClassesID({ id }: IContainerClassesIDProps) {
  const router = useRouter();

  function handleBack() {
    router.back();
  }

  return (
    <div className="flex flex-col w-full gap-5">
      <Container
        between={
          <div className="flex gap-3">
            <Button color="SECONDARY">آزمون جدید</Button>
            <Button
              color="SECONDARY"
              icon={<ArrowLeft size="XS" />}
              iconLeft
              onClick={handleBack}
            >
              بازگشت
            </Button>
          </div>
        }
        title="کلاس سوم ادبیات"
      >
        <TabelClass />
      </Container>
      <Container title="لیست دانش آموزان ">
        <TabelStudents />
      </Container>
    </div>
  );
}
