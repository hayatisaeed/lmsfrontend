"use client";

//components
import { Pagination, Table } from "@/shared/components";

//ui
import { Button } from "@/shared/ui";
import { usePathname, useRouter } from "next/navigation";

export default function TableClasses() {
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
      isOK: true,
    },
  ];

  const router = useRouter();
  const pathname = usePathname();

  function handleShowClass(id: number | string) {
    router.push(`${pathname}/${id}`);
  }

  return (
    <div className="w-full h-full flex flex-col items-center justify-between gap-4">
      <Table className="w-full">
        <Table.Tr>
          <Table.Th>ردیف</Table.Th>
          <Table.Th>نام کلاس</Table.Th>
          <Table.Th sortBy="date">تاریخ ایجاد</Table.Th>
          <Table.Th>وضعیت کلاس</Table.Th>
          <Table.Th>جزئیات بیشتر</Table.Th>
        </Table.Tr>
        {itemsFake.map((item) => {
          return (
            <Table.Tr key={item.num}>
              <Table.Td isNum>{item.num}</Table.Td>
              <Table.Td>{item.fullName}</Table.Td>
              <Table.Td isNum>{item.date}</Table.Td>
              <Table.Td isNum>
                {" "}
                {item.isOK ? (
                  <span className="text-backgrdound-box-green">فعال</span>
                ) : (
                  <span className="text-schemes-error">غیر فعال</span>
                )}
              </Table.Td>
              <Table.Td className="flex flex-col lg:flex-row items-stretch justify-center gap-2 px-10 lg:px-0">
                <Button
                  color="NEUTRAL"
                  onClick={() => {
                    handleShowClass(item.num);
                  }}
                >
                  مشاهده
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
