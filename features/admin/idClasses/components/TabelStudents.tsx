import { Table } from "@/shared/components";
import { Button } from "@/shared/ui";

export default function TabelStudents() {
  const itemsFake = [{ id: 1, name: "امیرحسین شکری", code: "40217032102" }];

  return (
    <Table>
      <Table.Tr>
        <Table.Th>ردیف</Table.Th>
        <Table.Th>نام دانش آموز</Table.Th>
        <Table.Th>کد دانش آموزی</Table.Th>
        <Table.Th>دسترسی ها</Table.Th>
      </Table.Tr>
      {itemsFake.map((item) => (
        <Table.Tr key={item.id}>
          <Table.Td>{item.id}</Table.Td>
          <Table.Td>{item.name}</Table.Td>
          <Table.Td isNum>{item.code}</Table.Td>
          <Table.Td className="flex flex-col lg:flex-row items-stretch justify-center gap-2 px-10 lg:px-0">
            <Button type="button" color="NEUTRAL">
              ویرایش
            </Button>
            <Button type="button" color="NEUTRAL">
              حذف
            </Button>
          </Table.Td>
        </Table.Tr>
      ))}
    </Table>
  );
}
