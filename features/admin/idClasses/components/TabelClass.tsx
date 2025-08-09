import { Table } from "@/shared/components";
import { Button } from "@/shared/ui";
import clsx from "clsx";

export default function TabelClass() {
  const fakeItem = { date: "1402/10/05", status: "فعال" };

  return (
    <Table>
      <Table.Tr>
        <Table.Th>تاریخ ایجاد</Table.Th>
        <Table.Th> وضعیت کلاس</Table.Th>
        <Table.Th>لیست استاید</Table.Th>
        <Table.Th> دسترسی ها</Table.Th>
      </Table.Tr>

      <Table.Td isNum>{fakeItem.date}</Table.Td>

      <Table.Td>
        <h3
          className={clsx(
            fakeItem.status === "فعال"
              ? "text-backgrdound-box-green"
              : "text-errors"
          )}
        >
          {fakeItem.status}
        </h3>
      </Table.Td>

      <Table.Td>
        <div className="w-full flex justify-center">
          <Button color="NEUTRAL" type="button" className="whitespace-nowrap">
            مشاهده اساتید
          </Button>
        </div>
      </Table.Td>

      <Table.Td className="flex flex-col lg:flex-row items-stretch justify-center gap-2 px-10 lg:px-0">
        <Button color="NEUTRAL" type="button" className="whitespace-nowrap">
          مشاهده آمار
        </Button>
        <Button color="NEUTRAL" type="button" className="whitespace-nowrap">
          ویرایش
        </Button>
        <Button color="NEUTRAL" type="button" className="whitespace-nowrap">
          غیرفعال سازی کردن
        </Button>
      </Table.Td>
    </Table>
  );
}
