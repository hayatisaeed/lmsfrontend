"use client";

import {
  Widget,
  NotebookMinimalistic,
  Notebook,
  ArchiveCheck,
} from "@/shared/icons";

export const sideBarAdmin = [
  {
    label: "داشبورد",
    icon: Widget,
    link: "/dashboard",
  },
  {
    label: "ایجاد کلاس جدید",
    icon: NotebookMinimalistic,
    link: "/create-class",
  },
  {
    label: "مدیریت کاربران",
    icon: NotebookMinimalistic,
    link: "/users",
  },
  {
    label: "مدیریت کلاس ها",
    icon: Notebook,
    link: "/classes",
  },
  {
    label: "مدیریت آزمون",
    icon: Notebook,
    link: "/exams",
  },
  {
    label: "گزارش های مدیریتی",
    icon: ArchiveCheck,
    link: "/reports",
  },
];
