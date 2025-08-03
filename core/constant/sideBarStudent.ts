"use client";

import {
  Widget,
  NotebookMinimalistic,
  Notebook,
  ArchiveCheck,
} from "@/assets/icons";

export const sideBarStudent = [
  {
    label: "داشبورد",
    icon: Widget,
    link: "/dashboard",
  },
  {
    label: "آزمون ها",
    icon: NotebookMinimalistic,
    link: "/tests",
  },
  {
    label: "مشاهده نتایج و پیشرفت تحصیلی",
    icon: Notebook,
    link: "/view-academic",
  },
  {
    label: "مشاهده پاسخ های خود",
    icon: ArchiveCheck,
    link: "/your-answers",
  },
];
