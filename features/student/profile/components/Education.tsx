"use client";

//icons
import {
  Book,
  Bookmark,
  Buildings,
  Notebook,
  NotebookMinimalistic,
  Smartphone,
} from "@/assets/icons";

//components
import {
  EducationItem,
  PersonalItemCity,
} from "@/features/student/profile/components";

//api
import { usePostStudentParent } from "@/services/tanstack/student/profile/mutation";

//types
import { TStudentEducation } from "@/services/tanstack/student/profile/types";

interface IEducationProps {
  data?: TStudentEducation;
}

export default function Education({ data }: IEducationProps) {
  const { mutate: postStudentParent, isPending: isPendingStudentParent } =
    usePostStudentParent();

  function mutateStudentParent(phone: string, onClose?: () => void) {
    postStudentParent(phone, {
      onSuccess: () => {
        onClose?.();
      },
    });
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-3 gap-y-5">
      <PersonalItemCity value="" />
      <EducationItem
        id="degree"
        value=""
        labelModal="مقطع تحصیلی خود را وارد کنید"
        label="مقطع تحصیلی"
        icon={<Book size="SM" />}
        sendCode={false}
      />

      <EducationItem
        id="study"
        value=""
        labelModal="رشته تحصیلی خود را وارد کنید"
        label="رشته تحصیلی"
        icon={<NotebookMinimalistic size="SM" />}
        sendCode={false}
      />

      <EducationItem
        id="school-name"
        value=""
        labelModal="نام مدرسه خود را وارد کنید"
        label="نام مدرسه"
        icon={<Buildings size="SM" />}
        sendCode={false}
      />

      <EducationItem
        id="school-type"
        value=""
        labelModal="نوع مدرسه خود را وارد کنید"
        label="نوع مدرسه"
        icon={<Bookmark size="SM" />}
        sendCode={false}
      />

      <EducationItem
        id="parents-phone"
        value=""
        icon={<Smartphone size="SM" />}
        labelModal="شماره تماس اولیا خود را وارد کنید"
        label="شماره موبایل اولیا"
        sendCode={false}
        mutate={mutateStudentParent}
        isPending={isPendingStudentParent}
        isNum
        error="شماره تماس "
        pattern={/^0?9\d{9}$/}
      />
      <EducationItem
        id="olympiad"
        value=""
        labelModal="المپیاد مدنظر خود را وارد کنید"
        label="المپیاد مدنظر"
        icon={<Notebook size="SM" />}
        sendCode={false}
      />
    </div>
  );
}
