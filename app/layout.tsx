///import css
import "@/styles/globals.css";

//import types
import { Metadata } from "next";
import { ReactNode } from "react";

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
    <html lang="fa" dir="rtl" className="h-full font-kalameh font-medium">
      <body className="h-screen bg-[#f8f9fa] overflow-hidden">{children}</body>
    </html>
  );
}
