import { Button } from "@/shared/ui";
import { convertLocaleTime, secondsToTime } from "@/shared/utils/date";

interface ITestsProps {
  onClose?: () => void;
  start: string;
  end: string;
  duration: number;
  title: string;
  mutate: () => void;
  isPending: boolean;
}

export default function Tests({
  onClose,
  start,
  end,
  duration,
  title,
  mutate,
  isPending,
}: ITestsProps) {
  function handleClickStart() {
    mutate();
  }

  function handleClickCancel() {
    onClose?.();
  }

  return (
    <div className="flex flex-col justify-start gap-5 p-4">
      <div className="text-right leading-7 space-y-2">
        <p>{title}</p>
        <p>
          شما از
          <span className="font-bold font-shabnam">
            {convertLocaleTime(start)}
          </span>
          تا
          <span className="font-bold font-shabnam">
            {convertLocaleTime(end)}
          </span>
          می‌توانید در آزمون شرکت کنید.
        </p>
        <p>
          پس از شروع آزمون،
          <span className="font-bold font-shabnam">
            {secondsToTime(duration)}
          </span>
          فرصت خواهید داشت تا پاسخ دهید.
        </p>
        <p className="text-errors">
          توجه کنید که تنها یکبار می‌توانید در آزمون شرکت کنید.
        </p>
      </div>

      {/* دکمه‌ها */}
      <div className="w-full flex justify-start gap-3">
        <Button
          color="PRIMARY"
          disabled={isPending}
          loading={isPending}
          onClick={handleClickStart}
        >
          آغاز آزمون
        </Button>
        <Button
          color="SECONDARY"
          disabled={isPending}
          onClick={handleClickCancel}
        >
          لغو
        </Button>
      </div>
    </div>
  );
}
