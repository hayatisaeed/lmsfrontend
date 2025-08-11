"use client";

import { useGetProfileUser } from "@/services/tanstack/login/queries";
import { useRouter } from "next/navigation";

export default function Main() {
  const { data, isLoading, isError } = useGetProfileUser();

  const router = useRouter();

  router.push("/student");
}
