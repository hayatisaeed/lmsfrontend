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
  const { idClass } = useParams();

  const {
    data: classesTests,
    isPending: isPendingClassesTests,
    isError: isErrorClassesTests,
  } = useGetStudentClassesTests(idClass as string);

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

  if (classesTests.length === 0) {
    return (
      <Container title="لیست آزمون‌ها" className="h-full">
        <div className="flex w-full h-full items-center justify-center">
          <h3>فعلا لیست آزمون ها خالی می باشد.</h3>
        </div>
      </Container>
    );
  }

  return (
    <Container title="لیست آزمون‌ها" className="h-full">
      <div className="flex flex-col items-center h-full gap-5">
        <div className="grid grid-cols-1 grid-rows-auto sm:grid-cols-2 md:grid-cols-4 grow w-full gap-3">
          <Modal>
            {classesTests?.map((test) => (
              <Card
                started={test.started}
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
