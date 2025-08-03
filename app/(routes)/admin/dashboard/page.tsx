"use client";
import { Table } from "@/shared/components";
// import { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "داشبورد",
// };

export default function Dashboard() {
  return (
    <Table>
      <Table.Tr>
        <Table.Th sortBy="name">Name</Table.Th>
        <Table.Th sortBy="age">Age</Table.Th>
        <Table.Th>Age</Table.Th>
        <Table.Th>Age</Table.Th>
        <Table.Th>Age</Table.Th>
        <Table.Th>Age</Table.Th>
        <Table.Th>Age</Table.Th>
      </Table.Tr>

      <Table.Tr>
        <Table.Td>John</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>John</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>John</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>John</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>John</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
      </Table.Tr>
      <Table.Tr>
        <Table.Td>John</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
        <Table.Td>30</Table.Td>
      </Table.Tr>

      {/* سایر ردیف‌ها */}
    </Table>
  );
}
