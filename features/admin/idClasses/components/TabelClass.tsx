import { Table } from "@/shared/components";

export default function TabelClass() {
  return (
    <Table>
      <Table.Tr>
        <Table.Th>تاریخ ایجاد</Table.Th>
        <Table.Th> وضعیت کلاس</Table.Th>
        <Table.Th>لیست استاید</Table.Th>
        <Table.Th> دسترسی ها</Table.Th>
      </Table.Tr>
    </Table>
  );
}
