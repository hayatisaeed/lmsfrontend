//import navbar , header
import { Footer, Header, NavDesktop } from "@/components/";
import { sideBarAdmin } from "@/constant/sideBarAdmin";

//types
import { ReactNode } from "react";

interface IAdminLayoutProps {
  children: ReactNode;
}

export default function Adminlayout({ children }: IAdminLayoutProps) {
  return (
    <div className="flex h-full gap-5 overflow-hidden p-0 lg:p-5">
      <aside className="lg:inline-block hidden">
        <NavDesktop path="admin" navs={sideBarAdmin} />
      </aside>
      <div className="flex flex-col w-full h-full overflow-hidden">
        <header>
          <Header role="Admin" />
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
