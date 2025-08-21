"use client";
//API

import { useGetUserProfile } from "@/services/tanstack/common/queries";

//NEXT
import { redirect } from "next/navigation";

export default function Main() {
  const { data, isPending, isError } = useGetUserProfile();

  if (isPending || isError)
    return (
      <div className="w-full h-full flex items-center justify-center bg-white rounded-2xl">
        {isError ? (
          <h3> مشکلی پیش آمده لطفا دوباره امتحان کنید.</h3>
        ) : (
          "LOADING"
        )}
      </div>
    );

  if (!data?.role) {
    return redirect("/login");
  }

  const role = data.role;

  const roleRoutes: Record<string, string> = {
    Admin: "/admin",
    Student: "/student",
    Teacher: "/teacher",
  };

  return redirect(roleRoutes[role] ?? "/login");
}
