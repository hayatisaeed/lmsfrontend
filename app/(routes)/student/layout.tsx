//import navbar , header
import { Footer, Header, NavDesktop } from "@/core/components";
import { sideBarStudent } from "@/core/constant/sideBarStudent";

//types
import { ReactNode } from "react";

interface IStudentLayoutProps {
  children: ReactNode;
}

export default function Studentlayout({ children }: IStudentLayoutProps) {
  return (
    <div className="flex h-full gap-5 overflow-hidden p-0 lg:p-5">
      <aside className="lg:inline-block hidden">
        <NavDesktop path="student" navs={sideBarStudent} />
      </aside>
      <div className="flex flex-col w-full h-full overflow-hidden">
        <header>
          <Header path="student" navs={sideBarStudent} role="Student" />
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
