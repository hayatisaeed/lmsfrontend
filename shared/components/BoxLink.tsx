import Image from "next/image";
import Link from "next/link";

import { AltArrow } from "@/assets/icons";

interface BoxLinkProps {
  title?: string;
  subtitle?: string;
  type: "mortarboard" | "assessment" | "unpassed" | "chat";
  href: string;
}

export default function BoxLink({ title, subtitle, type, href }: BoxLinkProps) {
  const icons: Record<string, string> = {
    mortarboard: "/images/mortarboard.png",
    assessment: "/images/assessment.png",
    chat: "/images/chat.png",
    unpassed: "/images/unpassed.png",
  };

  return (
    <div className="w-full bg-white-primary rounded-2xl p-3 flex justify-between items-center">
      <div className="flex items-center gap-5">
        <Image
          src={icons[type]}
          alt={`${type} icon`}
          width={62}
          height={62}
          className="size-[62px] object-contain"
        />
        <div className="flex flex-col justify-center gap-2">
          <h3 className="text-text-primary/75 font-[400] text-sm">{title}</h3>
          <h3 className="text-text-primary">{subtitle}</h3>
        </div>
      </div>
      <Link href={href} className="rotate-90">
        <AltArrow size="XS" />
      </Link>
    </div>
  );
}
