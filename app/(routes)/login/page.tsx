import { Brand, LoginForm } from "@/features/login/components";

import Image from "next/image";

export default function Login() {
  return (
    <div className="w-full h-screen grid lg:grid-cols-[1fr_2fr] grid-cols-1 max-w-[1750px] mx-auto">
      <div className="w-full h-full flex flex-col items-center gap-8 sm:gap-11 px-5 pt-32 sm:pt-24">
        <Brand />
        <div className="w-[300px] h-[1px] bg-text-primary/7"></div>
        <LoginForm />
      </div>
      <div className="relative w-full h-full hidden lg:flex grow">
        <Image
          src="/images/cover.png"
          alt="cover"
          fill
          className="object-fill"
          priority
        />
      </div>
    </div>
  );
}
