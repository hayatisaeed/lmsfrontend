"use client";

//modal
import { Modal, Pagination } from "@/shared/components";

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

  // if (isPendingClassesTests || isErrorClassesTests)
  //   return (
  //     <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
  //       {isErrorClassesTests ? (
  //         <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
  //       ) : (
  //         "LOADING"
  //       )}
  //     </div>
  //   );

  const tests = [
    { id: "math-midterm", name: "آزمون میان‌ترم ریاضی", tags: ["ریاضی"] },
    { id: "physics-final", name: "آزمون پایان‌ترم فیزیک", tags: ["فیزیک"] },
    { id: "chemistry-quiz", name: "آزمون کوییز شیمی", tags: ["شیمی", "کوییز"] },
    {
      id: "biology-practice",
      name: "آزمون تمرینی زیست",
      tags: ["زیست", "تمرینی"],
    },
    {
      id: "english-midterm",
      name: "آزمون میان‌ترم زبان انگلیسی",
      tags: ["زبان"],
    },
    { id: "history-final", name: "آزمون پایان‌ترم تاریخ", tags: ["تاریخ"] },
    { id: "geography-quiz", name: "آزمون کوییز جغرافیا", tags: ["جغرافیا"] },
    {
      id: "computer-practice",
      name: "آزمون تمرینی کامپیوتر",
      tags: ["کامپیوتر", "تمرینی"],
    },
  ];

  return (
    <Container title="لیست آزمون‌ها" className="h-full">
      <div className="flex flex-col items-center h-full gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grow w-full gap-3">
          <Modal>
            {classesTests?.map((test) => (
              <Card
                key={test.exam_id}
                id={test.exam_id}
                title={test.title}
                start={test.start_at}
                end={test.end_at}
              />
            ))}
          </Modal>
        </div>

        <Pagination total={145} />
      </div>
    </Container>
  );
}
