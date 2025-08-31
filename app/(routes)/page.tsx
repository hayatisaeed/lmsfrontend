"use client";
//API

import { useGetUserSession } from "@/services/tanstack/common/queries";

//NEXT
import { redirect } from "next/navigation";

export default function Main() {
  const { data, isPending, isError } = useGetUserSession();

  if (isPending || isError)
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isError ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "در حال بارگذاری ..."
        )}
      </div>
    );

  if (!data?.user.roles.includes("student")) {
    return redirect("/login");
  }

  const role = data.user.roles[0];

  const roleRoutes: Record<string, string> = {
    admin: "/admin",
    student: "/student",
    teacher: "/teacher",
  };

  return redirect(roleRoutes[role] ?? "/login");
}
