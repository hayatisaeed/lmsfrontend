"use client";

//hooks
import { useEffect } from "react";

//typs
import { ReactNode } from "react";

interface IGoftinoProps {
  children: ReactNode;
  user: { name: string; phone: string; email?: string; avatar?: string };
}

export default function Goftino({ children, user }: IGoftinoProps) {
  useEffect(() => {
    window.addEventListener("goftino_ready", function () {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      //   @ts-ignore
      window?.Goftino?.setUser(user);
      console.log("ok-user");
    });
  }, [user]);

  return children;
}
