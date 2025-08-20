"use client";

//modal
import { Modal } from "@/shared/components";

//container
import { Container } from "@/shared/ui";

//card
import Card from "./Card";

//api
import { useGetStudentClassesTests } from "@/services/tanstack/student/classes/idClasses/tests/queries";

//NEXT
import { useParams } from "next/navigation";

export default function ContainerTests() {
  const { idClasses } = useParams();

  const {
    data: classesTests,
    isPending: isPendingClassesTests,
    isError: isErrorClassesTests,
  } = useGetStudentClassesTests(idClasses as string);

  if (isPendingClassesTests || isErrorClassesTests)
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isErrorClassesTests ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "LOADING"
        )}
      </div>
    );

  return (
    <Container title="لیست آزمون‌ها" className="h-full">
      <div className="flex flex-col items-center h-full gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grow w-full gap-3">
          <Modal>
            {classesTests?.map((test) => (
              <Card
                key={test.exam_id}
                exam_id={String(test.exam_id)}
                course_id={String(test.course_id)}
                title={test.title}
                start={test.start_at}
                end={test.end_at}
                duration={test.duration}
              />
            ))}
          </Modal>
        </div>
      </div>
    </Container>
  );
}
