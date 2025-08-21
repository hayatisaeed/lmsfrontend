"use client";

//components
import { Footer, Header, NavDesktop } from "@/core/components";

//content
import { sideBarStudent } from "@/core/constant/sideBarStudent";

//goftino
import Goftino from "@/core/context/Goftino";

//NEXT
import { redirect } from "next/navigation";

//types
import { ReactNode } from "react";

//react-query
import { useGetUserProfile } from "@/services/tanstack/common/queries";

interface IStudentLayoutProps {
  children: ReactNode;
}

export default function Studentlayout({ children }: IStudentLayoutProps) {
  const { data, isError, isPending } = useGetUserProfile();

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
  if (!data?.role || data?.role !== "Student") {
    return redirect("/");
  }

  const user = {
    name: data.display_name,
    phone: data.phone.replace(/\D/g, ""),
    email: data.email,
    avatar: "",
  };

  return (
    <Goftino user={user}>
      <div className="flex h-full gap-5 overflow-hidden p-0 lg:p-5">
        <aside className="lg:inline-block hidden">
          <NavDesktop path="student" navs={sideBarStudent} />
        </aside>
        <div className="flex flex-col w-full h-full overflow-hidden">
          <header>
            <Header path="student" navs={sideBarStudent} role="Student" />
          </header>
          <div className="h-full overflow-y-auto flex flex-col gap-5">
            <main className="grow px-5 lg:p-0">{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </Goftino>
  );
}
