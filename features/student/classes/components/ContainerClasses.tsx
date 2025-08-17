"use client";
import { Container } from "@/shared/ui";
import Card from "./Card";
import { Pagination } from "@/shared/components";

export default function ContainerClasses() {
  return (
    <div className="w-full h-full grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-5">
      <div className="flex md:flex-col gap-5">
        <Container title="دسته بندی ها">class</Container>
      </div>
      <Container title="لیست منتور ها" className="justify-start">
        <div className="w-full flex flex-col items-center gap-7">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 gap-3">
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
              tags={["ادبیات", "شیمی", "ریاضی", "ادبیات"]}
              name="استاد رحمانی"
            />
            <Card
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
