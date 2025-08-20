import { Button } from "@/shared/ui";
import { usePathname, useRouter } from "next/navigation";

interface ITestsProps {
  id: string;
  onClose?: () => void;
  start: string;
  end: string;
}

export default function Tests({ id, onClose, start, end }: ITestsProps) {
  const router = useRouter();
  const pathname = usePathname();

  function handleClickStart() {
    router.push(`${pathname}/${id}`);
  }

  function handleClickCancel() {
    onClose?.();
  }

  return (
    <div className="flex flex-col justify-start gap-5 p-4">
      <div className="text-right leading-7 space-y-2">
        <p>آزمون میانترم ریاضی فیزیک</p>
        <p>
          شما از <span className="font-bold font-shabnam">1404/05/031</span> تا
          <span className="font-bold font-shabnam">1404/0/02</span> می‌توانید در
          آزمون شرکت کنید.
        </p>
        <p>
          پس از شروع آزمون،{" "}
          <span className="font-bold font-shabnam">1:40:00</span>
          فرصت خواهید داشت تا پاسخ دهید.
        </p>
        <p className="text-errors">
          توجه کنید که تنها یکبار می‌توانید در آزمون شرکت کنید.
        </p>
      </div>

      {/* دکمه‌ها */}
      <div className="w-full flex justify-start gap-3">
        <Button color="PRIMARY" onClick={handleClickStart}>
          آغاز آزمون
        </Button>
        <Button color="SECONDARY" onClick={handleClickCancel}>
          لغو
        </Button>
      </div>
    </div>
  );
}
