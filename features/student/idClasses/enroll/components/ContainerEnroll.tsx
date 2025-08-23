"use client";
import { ArrowBack } from "@/assets/icons";
import { Button, Container } from "@/shared/ui";
import { useParams, useRouter } from "next/navigation";
import Reserve from "./Reserve";
import Course from "./Course";
import { usePostEnrollInCourse } from "@/services/tanstack/student/classes/mutation";

interface IContainerEnrollProps {
  idClass: string;
}

export default function ContainerEnroll({ idClass }: IContainerEnrollProps) {
  const router = useRouter();

  const { mutate: enrollCourse, isPending: isPendingEnrollCourse } =
    usePostEnrollInCourse();

  function handleMutateEnrollCourse() {
    enrollCourse(idClass as string);
  }

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
        <Reserve
          mutate={handleMutateEnrollCourse}
          isPending={isPendingEnrollCourse}
        />
      </div>
    </Container>
  );
}
