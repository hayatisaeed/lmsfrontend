//css
import "@/core/styles/globals.css";

//global
import { Modal } from "@/shared/components";

//types
import { Metadata } from "next";
import { ReactNode } from "react";

//tanstack-query
import TanstackQuery from "@/core/stores/TanstackQuery";

//metadata
export const metadata: Metadata = {
  title: {
    template: "%s | باشگاه المپیاد طلایی ها",
    default: "باشگاه المپیاد طلایی ها",
  },

  description: "",
  openGraph: {
    title: "باشگاه المپیاد طلایی ها",
  },
};

interface IRootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <TanstackQuery>
      <html lang="fa" dir="rtl" className="h-full font-kalameh font-medium">
        <Modal>
          <body className="h-screen bg-[#f8f9fa] overflow-hidden">
            {children}
          </body>
        </Modal>
      </html>
    </TanstackQuery>
  );
}
