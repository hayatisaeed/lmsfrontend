"use client";
import { Button } from "@/shared/ui";
import { usePathname, useRouter } from "next/navigation";

interface ISessionItemProps {
  title: string;
  id: string;
}

export default function SessionItem({ title, id }: ISessionItemProps) {
  const router = useRouter();
  const pathname = usePathname();
  function handleClickLink() {
    router.push(`${pathname}/sessions/${id}`);
  }

  return (
    <div className="w-full bg-box-primary p-[10px] rounded-xl flex justify-between items-center">
      <h3 className="text-text-primary text-sm">{title}</h3>
      <Button
        type="button"
        size="SM"
        color="NEUTRAL"
        onClick={handleClickLink}
        className="!text-primary !border-primary !rounded-[10px] !py-[10px]"
      >
        ورود به جلسه
      </Button>
    </div>
  );
}
