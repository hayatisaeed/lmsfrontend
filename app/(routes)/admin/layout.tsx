//import navbar , header
import { Footer, Header, NavDesktop } from "@/core/components";

//constant
import { sideBarAdmin } from "@/core/constant/sideBarAdmin";

// //axios
// import api from "@/core/config/apiServer/api";

// //NEXT
// import { redirect } from "next/navigation";

//types
import { ReactNode } from "react";

interface IAdminLayoutProps {
  children: ReactNode;
}

export default async function Adminlayout({ children }: IAdminLayoutProps) {
  // const response = await api.get("/api/users/profile/");

  // if (
  //   response.status !== 200 ||
  //   !response.data?.role ||
  //   response.data.role !== "ADMIN"
  // ) {
  //   redirect("/");
  // }

  return (
    <div className="flex h-full gap-5 overflow-hidden p-0 lg:p-5">
      <aside className="lg:inline-block hidden">
        <NavDesktop path="admin" navs={sideBarAdmin} />
      </aside>
      <div className="flex flex-col w-full h-full overflow-hidden">
        <header>
          <Header path="admin" navs={sideBarAdmin} role="Admin" />
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
