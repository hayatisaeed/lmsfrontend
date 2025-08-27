"use client";
//import navbar , header
import { Footer, Header, NavDesktop } from "@/core/components";

//constant
import { sideBarAdmin } from "@/core/constant/sideBarAdmin";
import { useGetUserSession } from "@/services/tanstack/common/queries";

//NEXT
import { redirect } from "next/navigation";

//types
import { ReactNode } from "react";

interface IAdminLayoutProps {
  children: ReactNode;
}

export default function Adminlayout({ children }: IAdminLayoutProps) {
  const { data } = useGetUserSession();

  if (!data?.user.roles || data?.user.roles.includes("Admin")) {
    return redirect("/");
  }

  return (
    <div className="flex h-full gap-5 overflow-hidden p-0 lg:p-5">
      <aside className="lg:inline-block hidden">
        <NavDesktop path="admin" navs={sideBarAdmin} />
      </aside>
      <div className="flex flex-col w-full h-full overflow-hidden">
        <header>
          <Header
            path="admin"
            navs={sideBarAdmin}
            role="Admin"
            display_name={data.user.display_name || ""}
          />
        </header>
        <div className="h-full overflow-y-auto flex flex-col gap-5">
          <main className="grow">{children}</main>
          <footer>
            <Footer />
          </footer>
        </div>
      </div>
    </div>
  );
}
