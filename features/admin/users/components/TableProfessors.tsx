"use client";

//components
import { Pagination, Table } from "@/shared/components";

//ui
import { Button } from "@/shared/ui";

export default function TableProfessors() {
  const itemsFake = [
    {
      num: 1,
      fullName: "رضا حیدری",
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
  ];

  return (
    <div className="w-full h-full flex flex-col items-center justify-center gap-4">
      <Table className="grow w-full">
        <Table.Tr>
          <Table.Th>ردیف</Table.Th>
          <Table.Th>نام و نام خانوادگی</Table.Th>
          <Table.Th sortBy="date">تاریخ عضویت</Table.Th>
          <Table.Th>کد استادی</Table.Th>
          <Table.Th>دسترسی ها</Table.Th>
        </Table.Tr>
        {itemsFake.map((item) => {
          return (
            <Table.Tr key={item.num}>
              <Table.Td isNum>{item.num}</Table.Td>
              <Table.Td>{item.fullName}</Table.Td>
              <Table.Td isNum>{item.date}</Table.Td>
              <Table.Td isNum> {item.nationalCode}</Table.Td>
              <Table.Td className="flex items-center justify-center gap-2">
                <Button color="NEUTRAL">مشاهده</Button>
                <Button color="NEUTRAL">
                  {item.isOK ? "فعال سازی" : " غیر فعال سازی"}
                </Button>
              </Table.Td>
            </Table.Tr>
          );
        })}
      </Table>
      <Pagination total={150} />
    </div>
  );
}
