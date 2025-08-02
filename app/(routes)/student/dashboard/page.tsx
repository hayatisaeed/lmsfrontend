"use client";
import { DropDown } from "@/shared/components";
import { Button, Menu } from "@/shared/ui";

export default function Dashboard() {
  return (
    <div>
      <DropDown.Window id="provinces">
        <DropDown.Item>dsfdsf</DropDown.Item>
      </DropDown.Window>
      <DropDown.Toggler id="provinces">
        <Button type="button">clikc</Button>
      </DropDown.Toggler>
      <Menu
        options={[{ id: 2, label: "dfsd" }]}
        onChange={() => {}}
        label="asddasssssssssssssss"
      />
    </div>
  );
}
