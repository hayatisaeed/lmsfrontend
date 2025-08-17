import Image from "next/image";

export default function Course() {
  return (
    <div className="w-full h-full flex flex-col gap-5">
      <Image
        src="/images/banner.png"
        width={687}
        height={159}
        alt="banner"
        className=" w-full h-[159px] rounded-2xl "
      />
      <h3 className="text-text-primary text-lg font-semibold">علیرضا رحمانی</h3>
      <p className="text-text-primary text-justify">
        لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
        از طراحان گرافیک است.
      </p>
    </div>
  );
}
