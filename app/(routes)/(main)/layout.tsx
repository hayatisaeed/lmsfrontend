//import navbar , header
import { Footer, Header, NavDesktop } from "@/components/";
import Modal from "@/shared/components/Modal";

//types
import { ReactNode } from "react";

interface IMainLayoutProps {
  children: ReactNode;
}

export default function Mainlayout({ children }: IMainLayoutProps) {
  return (
    <Modal>
      <div className="flex h-full gap-5 overflow-hidden p-0 lg:p-5">
        <aside className="lg:inline-block hidden">
          <NavDesktop />
        </aside>
        <div className="flex flex-col w-full h-full overflow-hidden">
          <header>
            <Header />
          </header>
          <div className="h-full overflow-y-auto flex flex-col">
            <main className="grow">{children}</main>
            <footer>
              <Footer />
            </footer>
          </div>
        </div>
      </div>
    </Modal>
  );
}
