import { Table } from "@/shared/components";

export default function TabelStudents() {
  return (
    <Table>
      <Table.Tr>
        <Table.Th>ردیف</Table.Th>
        <Table.Th>نام دانش آموز</Table.Th>
        <Table.Th>کد دانش آموزی</Table.Th>
        <Table.Th>دسترسی ها</Table.Th>
      </Table.Tr>
    </Table>
  );
}
