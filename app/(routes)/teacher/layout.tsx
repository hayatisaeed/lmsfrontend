//components
import { Footer, Header, NavDesktop } from "@/core/components";

//content
import { sideBarStudent } from "@/core/constant/sideBarStudent";

//api
import { getUserProfileApi } from "@/services/api/common/server/api";

//goftino
import Goftino from "@/core/context/Goftino";

//NEXT
import { redirect } from "next/navigation";

//types
import { ReactNode } from "react";
import { sideBarTeacher } from "@/core/constant/sideBarTeacher";

interface IStudentLayoutProps {
  children: ReactNode;
}

export default async function Studentlayout({ children }: IStudentLayoutProps) {
  const data = await getUserProfileApi();

  if (!data?.role || data?.role !== "Teacher") {
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
          <NavDesktop path="student" navs={sideBarTeacher} />
        </aside>
        <div className="flex flex-col w-full h-full overflow-hidden">
          <header>
            <Header path="student" navs={sideBarStudent} role="Teacher" />
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
