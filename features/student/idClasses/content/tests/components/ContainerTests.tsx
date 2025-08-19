"use client";
import { Modal, Pagination } from "@/shared/components";
import { Container } from "@/shared/ui";
import Card from "./Card";

export default function ContainerTests() {
  return (
    <Container title="لیست آزمون ها" className="h-full">
      <div className="flex flex-col  items-center h-full gap-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 grow w-full gap-3">
          <Modal>
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />{" "}
            <Card
              id="tests"
              name="آزمون میان ترم ریاضی فیزیک"
              tags={["ریاضی", "المپیاد"]}
            />
          </Modal>
        </div>

        <Pagination total={145} />
      </div>
    </Container>
  );
}
