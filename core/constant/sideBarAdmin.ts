"use client";

import {
  Widget,
  NotebookMinimalistic,
  Notebook,
  ArchiveCheck,
} from "@/assets/icons";
import { Navs } from "../types/navLinks";

export const sideBarAdmin: Navs[] = [
  {
    label: "داشبورد",
    icon: Widget,
    link: "/admin/dashboard",
  },
  {
    label: "ایجاد کلاس جدید",
    icon: NotebookMinimalistic,
    link: "/admin/create-class",
  },
  {
    label: "مدیریت کاربران",
    icon: NotebookMinimalistic,
    link: "/admin/users",
  },
  {
    label: "مدیریت کلاس ها",
    icon: Notebook,
    link: "/admin/classes",
  },
  {
    label: "مدیریت آزمون",
    icon: Notebook,
    link: "/admin/exams",
  },
  {
    label: "گزارش های مدیریتی",
    icon: ArchiveCheck,
    link: "/admin/reports",
  },
];
