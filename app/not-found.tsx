//import logo
import { Brand } from "@/shared/components";

//import types
import { Metadata } from "next";

//import link
import Link from "next/link";

export const metadata: Metadata = {
  title: "خطای 404",
};

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center gap-6">
      <Brand />
      <h3 className="text-2xl">صفحه مورد نظر پیدا نشد! 😕</h3>
      <Link
        href="/"
        className=" py-4 px-7 rounded-xl text-sm bg-primary transition-all hover:bg-[#0038c4] text-white-primary"
      >
        بازگشت به صفحه اصلی
      </Link>
    </div>
  );
}
