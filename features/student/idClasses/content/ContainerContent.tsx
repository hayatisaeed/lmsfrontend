"use client";

import { BoxLink } from "@/shared/components";
import ClassDashboard from "./components/ClassDashboard";
import Sessions from "./components/Sessions";

export default function ContainerContent() {
  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-3 gap-5 min-h-full">
      <BoxLink
        title="مشاهده لیست آزمون ها"
        href=""
        type="mortarboard"
        subtitle="آزمون ها"
      />
      <BoxLink
        title="کتابچه های شما"
        href=""
        type="assessment"
        subtitle="کتابچه"
      />
      <BoxLink
        title="نظر آزمایی گفتگو ها"
        href=""
        type="chat"
        subtitle="تالار گفتگو"
      />
      <div className="w-full md:col-span-2">
        <ClassDashboard />
      </div>
      <div className="w-full col-span-1">
        <Sessions />
      </div>
    </div>
  );
}
