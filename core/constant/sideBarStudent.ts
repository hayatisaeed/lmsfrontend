"use client";

import {
  Widget,
  NotebookMinimalistic,
  Notebook,
  ArchiveCheck,
  Logout,
} from "@/assets/icons";
import { Navs } from "@/core/types/navLinks";

export const sideBarStudent: Navs[] = [
  {
    label: "داشبورد",
    icon: Widget,
    link: "/student/dashboard",
  },
  {
    label: "آزمون ها",
    icon: NotebookMinimalistic,
    link: "/student/tests",
  },
  {
    label: "کلاس ها",
    icon: Logout,
    link: "/student/classes",
  },
  {
    label: "مشاهده نتایج و پیشرفت تحصیلی",
    icon: Notebook,
    link: "/student/view-academic",
  },
  {
    label: "مشاهده پاسخ های خود",
    icon: ArchiveCheck,
    link: "/student/your-answers",
  },
];
