import clsx from "clsx";
import Image from "next/image";

interface IAvatarProps {
  image?: string;
  className?: string;
}

export default function Avatar({ image, className }: IAvatarProps) {
  return (
    <div
      className={clsx(
        "relative size-8 md:size-10 rounded-full bg-box-primary",
        className
      )}
    >
      <Image
        fill
        alt="user"
        className="object-contain p-2"
        src={image || "/images/user.png"}
      />
    </div>
  );
}
