"use client";

//next
import Script from "next/script";

//react
import { useEffect } from "react";

interface IGoftinoProps {
  phone: string;
  name?: string;
  avatar?: string;
  email?: string;
}

export default function Goftinoc({
  name,
  phone,
  avatar,
  email,
}: IGoftinoProps) {
  useEffect(() => {
    window.addEventListener("goftino_ready", () => {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      window?.Goftino?.setUser({
        email,
        name,
        phone,
        avatar,
      });
    });
  }, [avatar, email, name, phone]);

  return (
    <Script
      id="goftino-widget"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
                  !function(){var i="BY4ihy",a=window,d=document;function g(){var g=d.createElement("script"),s="https://www.goftino.com/widget/"+i,l=localStorage.getItem("goftino_"+i);g.async=!0,g.src=l?s+"?o="+l:s;d.getElementsByTagName("head")[0].appendChild(g);}"complete"===d.readyState?g():a.attachEvent?a.attachEvent("onload",g):a.addEventListener("load",g,!1);}();
                `,
      }}
    />
  );
}
