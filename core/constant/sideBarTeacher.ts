"use client";

//icons
import {
  ArchiveCheck,
  Book,
  Notebook,
  NotebookBookmark,
  NotebookMinimalistic,
  Widget,
} from "@/assets/icons";

//typesD
import { Navs } from "@/core/types/navLinks";

export const sideBarTeacher: Navs[] = [
  {
    label: "داشبورد",
    icon: Widget,
    link: "/teacher/dashboard",
  },
  {
    label: "طراحی آزمون و ویرایش",
    icon: NotebookMinimalistic,
    link: "/teacher/exam-design",
  },
  {
    label: "تصحیح آزمون ها",
    icon: NotebookBookmark,
    link: "/teacher/exam-grading",
  },
  {
    label: "آزمون های من",
    icon: Notebook,
    link: "/teacher/my-exams",
  },
  {
    label: "مجموعه آزمون",
    icon: Book,
    link: "/teacher/exam-collections",
  },
  {
    label: "گزارش ها",
    icon: ArchiveCheck,
    link: "/teacher/reports",
  },
];
