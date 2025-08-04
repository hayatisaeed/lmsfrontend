"use client";

//components
import { Modal, Pagination, Table } from "@/shared/components";

//ui
import { Button } from "@/shared/ui";
import ChangeActivation from "../modal/ChangeActivation";
import ViewStudent from "../modal/ViewStudent";

export default function TableStudents() {
  const itemsFake = [
    {
      num: 1,
      fullName: "امیرحسسین شکری",
      date: "1403/10/02",
      nationalCode: "40217032102",
      isOK: false,
    },
    {
      num: 2,
      fullName: "امیرحسسین شکری",
      date: "1403/10/02",
      nationalCode: "40217032102",
      isOK: false,
    },
    {
      num: 3,
      fullName: "امیرحسسین شکری",
      date: "1403/10/02",
      nationalCode: "40217032102",
      isOK: false,
    },
    {
      num: 4,
      fullName: "امیرحسسین شکری",
      date: "1403/10/02",
      nationalCode: "40217032102",
      isOK: false,
    },
    {
      num: 5,
      fullName: "امیرحسسین شکری",
      date: "1403/10/02",
      nationalCode: "40217032102",
      isOK: false,
    },
    {
      num: 6,
      fullName: "امیرحسسین شکری",
      date: "1403/10/02",
      nationalCode: "40217032102",
      isOK: false,
    },
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-4">
      <Table className="w-full">
        <Table.Tr>
          <Table.Th>ردیف</Table.Th>
          <Table.Th>نام و نام خانوادگی</Table.Th>
          <Table.Th>کدملی</Table.Th>
          <Table.Th sortBy="date">تاریخ عضویت</Table.Th>
          <Table.Th> کد دانش آموزی</Table.Th>
          <Table.Th>دسترسی ها</Table.Th>
        </Table.Tr>
        {itemsFake.map((item) => {
          return (
            <Table.Tr key={item.num}>
              <Table.Td isNum>{item.num}</Table.Td>
              <Table.Td>{item.fullName}</Table.Td>
              <Table.Td isNum>{item.nationalCode}</Table.Td>
              <Table.Td isNum>{item.date}</Table.Td>
              <Table.Td isNum> {item.nationalCode}</Table.Td>
              <Table.Td className="flex flex-col lg:flex-row items-stretch justify-center gap-2 px-10 lg:px-0">
                <Modal>
                  <Modal.Open id="view">
                    <Button color="NEUTRAL">مشاهده</Button>
                  </Modal.Open>
                  <Modal.Window id="view">
                    <ViewStudent />
                  </Modal.Window>
                  <Modal.Window id="activation">
                    <ChangeActivation activation={!item.isOK} />
                  </Modal.Window>
                  <Modal.Open id="activation">
                    <Button color="NEUTRAL" className="whitespace-nowrap">
                      {item.isOK ? "فعال سازی" : " غیر فعال سازی"}
                    </Button>
                  </Modal.Open>
                </Modal>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table>
      <Pagination total={150} />
    </div>
  );
}
