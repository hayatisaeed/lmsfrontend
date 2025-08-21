import JalaliSpinnerDatePicker from "@/shared/components/JalaliInputDatePicker";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "داشبورد",
};

export default function Dashboard() {
  return (
    <div>
      <JalaliSpinnerDatePicker />
    </div>
  );
}
