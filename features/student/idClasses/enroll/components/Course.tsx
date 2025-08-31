import { ICourse } from "@/services/tanstack/student/classes/type";
import Image from "next/image";

interface ICourseProps {
  course?: ICourse;
}

export default function Course({ course }: ICourseProps) {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <Image
        src={course?.banner_image || "/images/banner.png"}
        width={687}
        height={180}
        alt="banner"
        className="w-full h-[180px] rounded-2xl "
      />
      <h3 className="text-text-primary text-lg font-semibold">
        توضیحات {course?.name}
      </h3>
      <p className="text-text-primary text-justify">{course?.description}</p>
    </div>
  );
}
