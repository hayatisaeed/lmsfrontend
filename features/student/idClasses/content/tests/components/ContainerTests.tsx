"use client";
import { Modal, Pagination } from "@/shared/components";
import { Container } from "@/shared/ui";
import Card from "./Card";

export default function ContainerTests() {
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
            {tests.map((test) => (
              <Card key={test.id} id={test.id} name={test.name} />
            ))}
          </Modal>
        </div>

        <Pagination total={145} />
      </div>
    </Container>
  );
}
