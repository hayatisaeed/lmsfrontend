import { Button } from "@/shared/ui";
import ItemDisplayInformation from "./ItemDisplayInformation";

//icon
import { Alarm, CheckRead, MultipleForward, CheckCircle } from "@/assets/icons";
import { useEffect, useState } from "react";
import { secondsToTime } from "@/shared/utils/date";

interface IDisplayInformationProps {
  submit: () => void;

  data: {
    questionAll: number;
    answers: number;
    remaining: number;
    duration: number;
  };
}

export default function DisplayInformation({
  data,
  submit,
}: IDisplayInformationProps) {
  const [duration, setDuration] = useState<number>(data.duration);

  useEffect(() => {
    const time = setInterval(() => {
      setDuration((prevDuration) => prevDuration - 1);
    }, 1000);

    return () => clearInterval(time);
  }, []);

  return (
    <div className="w-full bg-text-primary py-5 px-4 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center items-start gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:max-w-[70%]">
        <ItemDisplayInformation
          content={secondsToTime(duration)}
          title="زمان باقی مانده"
          icon={<Alarm color="LIGHT" size="MD" />}
        />
        <ItemDisplayInformation
          content={data.questionAll}
          title="تعداد کل سوالات"
          icon={<h3 className="text-white-primary text-xl">?</h3>}
        />
        <ItemDisplayInformation
          content={data.answers}
          title="پاسخ داده شده"
          icon={<CheckRead color="LIGHT" size="MD" />}
        />

        <ItemDisplayInformation
          content={data.remaining}
          title="باقی مانده"
          icon={<MultipleForward color="LIGHT" size="MD" />}
        />
      </div>
      <div className="flex items-center">
        <Button
          type="button"
          color="SUCCESS"
          size="MD"
          className="!bg-white-primary !text-text-primary !whitespace-nowrap"
          iconLeft
          icon={<CheckCircle size="SM" color="DARK" />}
          onClick={() => submit()}
        >
          ثبت آزمون
        </Button>
      </div>
    </div>
  );
}
