//RootLayout

///import css
import "@/styles/globals.css";

//import types
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: {
    template: "باشگاه المپیاد طلایی ها | %s",
    default: "باشگاه المپیاد طلایی ها",
  },

  description: "",
  openGraph: {
    title: "باشگاه المپیاد طلایی ها",
  },
};

interface IRootLayoutProps {
  children: Readonly<ReactNode>;
}

export default function RootLayout({ children }: IRootLayoutProps) {
  return (
    <html lang="fa" dir="rtl" className="font-kalameh">
      <body>{children}</body>
    </html>
  );
}
