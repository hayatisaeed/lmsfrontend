"use client";
import { ArrowBack } from "@/assets/icons";
import { Button, Container } from "@/shared/ui";
import { useParams, useRouter } from "next/navigation";
import Reserve from "./Reserve";
import Course from "./Course";
import { usePostEnrollInCourse } from "@/services/tanstack/student/classes/mutation";

//api
import { useGetCourseItem } from "@/services/tanstack/student/classes/queries";
import toast from "react-hot-toast";

interface IContainerEnrollProps {
  idClass: string;
}

export default function ContainerEnroll({ idClass }: IContainerEnrollProps) {
  const router = useRouter();

  const { mutate: enrollCourse, isPending: isPendingEnrollCourse } =
    usePostEnrollInCourse();

  const {
    data: courseItem,
    isLoading: isLoadingCourseItem,
    isError: isErrorCourse,
  } = useGetCourseItem(idClass as string);

  if (isLoadingCourseItem || isErrorCourse)
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isErrorCourse ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "در حال بارگذاری ..."
        )}
      </div>
    );

  function handleMutateEnrollCourse() {
    enrollCourse(idClass as string, {
      onSuccess: () => {
        toast.success("با موفقیت به دوره اضافه شدید");
        setTimeout(() => {
          router.replace(`/student/classes/${courseItem?.id}/content`);
        }, 500);
      },
      onError: () => {
        toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
      },
    });
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
      title={`${courseItem?.name}`}
    >
      <div className="w-full grow grid grid-cols-1 md:grid-cols-[5fr_2fr] gap-5">
        <Course course={courseItem} />
        <Reserve
          mutate={handleMutateEnrollCourse}
          isPending={isPendingEnrollCourse}
        />
      </div>
    </Container>
  );
}
