"use client";

import { BoxLink } from "@/shared/components";
import ClassDashboard from "./ClassDashboard";

//session
import Sessions from "./Sessions";

//next
import { useParams, usePathname } from "next/navigation";

//react-query
import { useGetCourseItem } from "@/services/tanstack/student/classes/queries";

export default function ContainerContent() {
  const pathname = usePathname();

  const { idClass } = useParams();

  const {
    data: courseItem,
    isLoading: isLoadingCourseItem,
    isError: isErrorCourse,
  } = useGetCourseItem(idClass as string);

  if (isLoadingCourseItem || isErrorCourse)
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isErrorCourse ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "LOADING"
        )}
      </div>
    );

  return (
    <div className="grid grid-cols-1 grid-rows-[auto_1fr] md:grid-cols-3 gap-5 min-h-full">
      <BoxLink
        title="مشاهده لیست آزمون ها"
        href={`${pathname}/tests`}
        type="mortarboard"
        subtitle="آزمون ها"
      />
      <BoxLink
        title="کتابچه های شما"
        href={`${pathname}/booklet`}
        type="assessment"
        subtitle="کتابچه"
      />
      <BoxLink
        title="نظر آزمایی گفتگو ها"
        href={`${pathname}/chat`}
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
