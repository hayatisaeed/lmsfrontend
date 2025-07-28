// import image
import Image from "next/image";

export default function Brand() {
  return (
    <div className="flex flex-col items-center">
      <Image src="/images/logo.png" width={65} height={81} alt="logo" />
      <h3 className="text-[#DAB451] font-semibold">طلایی ها</h3>
    </div>
  );
}
