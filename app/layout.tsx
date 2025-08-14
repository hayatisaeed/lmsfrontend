//css
import "@/core/styles/globals.css";

//types
import { Metadata } from "next";
import { ReactNode } from "react";

//tanstack-query
import TanstackQuery from "@/core/stores/TanstackQuery";

import Script from "next/script";
import { Toaster } from "react-hot-toast";

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
    //tanstack-query
    <TanstackQuery>
      <html lang="fa" dir="rtl" className="h-full font-kalameh font-medium">
        <Toaster
          position="top-left"
          toastOptions={{
            duration: 5000,
            success: {
              className: "border border-[#61D345]",
            },
            error: {
              className: "border border-[#FF4B4B]",
            },
          }}
        />

        <head>
          {/* goftino */}
          <Script
            id="goftino-widget"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
                  !function(){var i="BY4ihy",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
                `,
            }}
          />
        </head>
        <body className="h-screen bg-[#f8f9fa] overflow-hidden">
          {children}
        </body>
      </html>
    </TanstackQuery>
  );
}
