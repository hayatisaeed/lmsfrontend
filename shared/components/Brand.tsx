// import image
import Image from "next/image";

interface IBrandProps {
  row?: boolean;
}

export default function Brand({ row = false }: IBrandProps) {
  return (
    <div
      className={`flex items-center justify-center ${
        row ? "flex-row" : "flex-col"
      }`}
    >
      <Image src="/images/logo.png" width={65} height={81} alt="logo" />
      <h3 className="text-yellow-gold font-semibold whitespace-nowrap">
        طلایی ها
      </h3>
    </div>
  );
}
