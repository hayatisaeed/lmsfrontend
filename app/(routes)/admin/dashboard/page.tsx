"use client";
import { Table } from "@/shared/components";
import Pagination from "@/shared/components/Pagination";
import { Button } from "@/shared/ui";

export default function Dashboard() {
  return (
    <div className="flex flex-col justify-center">
      <Table>
        <Table.Tr>
          <Table.Th>ردیف</Table.Th>
          <Table.Th>نام و نام خانوادگی</Table.Th>
          <Table.Th sortBy="date">تاریخ عضویت</Table.Th>
          <Table.Th>کد دانشجویی</Table.Th>
          <Table.Th>دسترسی ها</Table.Th>
        </Table.Tr>
        <Table.Tr>
          <Table.Td isNum>1</Table.Td>
          <Table.Td>سارا محمدی</Table.Td>
          <Table.Td isNum>1402/11/15</Table.Td>
          <Table.Td isNum>40123045678</Table.Td>
          <Table.Td className="flex justify-center gap-2">
            <Button color="NEUTRAL">مشاهده</Button>
            <Button color="NEUTRAL">غیر فعال سازی</Button>
          </Table.Td>
        </Table.Tr>
      </Table>
      <Pagination total={150} />
    </div>
  );
}
