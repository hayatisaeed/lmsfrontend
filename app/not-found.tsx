//logo
import ArrowLeft from "@/assets/icons/arrows/ArrowLeft";

//types
import { Metadata } from "next";

//NEXT
import Image from "next/image";

//link
import Link from "next/link";

//metadata
export const metadata: Metadata = {
  title: "خطای 404",
};

export default function NotFound() {
  return (
    <div className="w-full h-full flex flex-col gap-3 justify-center items-center p-4">
      {/* تصویر با اندازه واقعی خودش */}
      <div className="relative ">
        <Image
          src="/images/not-found.png"
          alt="image"
          fill
          width={768}
          height={768}
          className="object-contain"
        />
      </div>

      {/* متن */}
      <h3 className="text-[32px] text-center">
        صفحه ای که دنبالش بودی پیدا نشد!
      </h3>
      <p className="text-2xl font-[400] text-center">
        ممکنه آدرس رو اشتباه وارد کرده باشی یا این صفحه دیگه وجود نداشته باشه.
      </p>

      {/* لینک بازگشت */}
      <Link
        href="/"
        className="flex items-center justify-center gap-4 rounded-full bg-primary py-3 px-5"
      >
        <span className="text-white-primary text-sm">بازگشت به صفحه قبلی</span>
        <div className="rotate-45">
          <ArrowLeft color="LIGHT" size="SM" />
        </div>
      </Link>
    </div>
  );
}
