"use client";

//ui
import { Container } from "@/shared/ui";

//card
import Card from "./Card";

//component
import { Pagination } from "@/shared/components";

//filter
import FilterCategory from "./FilterCategory";

export default function ContainerClasses() {
  return (
    <div className="w-full min-h-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
      <div className="flex md:flex-col gap-5">
        <Container title="دسته بندی ها">
          <FilterCategory
            filters={[
              { id: 1, label: "دسته بنددی ها" },
              { id: 2, label: "همه دسته بندی" },
              { id: 3, label: "ادبیات فارسی" },
              { id: 4, label: "ریاضی" },
            ]}
          />
        </Container>
      </div>
      <Container title="لیست منتور ها" className="justify-start">
        <div className="w-full flex flex-col items-center gap-7">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
            <Card
              link={`/student/classes/${2}`}
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              link={`/student/classes/${223423}`}
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
          </div>
          <Pagination total={150} />
        </div>
      </Container>
    </div>
  );
}
