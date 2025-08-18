import { Button } from "@/shared/ui";

interface ISessionItemProps {
  title: string;
}

export default function SessionItem({ title }: ISessionItemProps) {
  return (
    <div className="w-full bg-box-primary p-[10px] rounded-xl flex justify-between items-center">
      <h3 className="text-text-primary text-sm">{title}</h3>
      <Button
        type="button"
        size="SM"
        color="NEUTRAL"
        className="!text-primary !border-primary !rounded-[10px] !py-[10px]"
      >
        ورود به جلسه
      </Button>
    </div>
  );
}
