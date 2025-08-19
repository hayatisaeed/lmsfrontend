import { Button } from "@/shared/ui";
import ItemDisplayInformation from "./ItemDisplayInformation";

//icon
import { Alarm, CheckRead, MultipleForward, CheckCircle } from "@/assets/icons";

interface IDisplayInformationProps {
  data: {
    questionAll: number;
    answers: number;
    remaining: number;
  };
}

export default function DisplayInformation({ data }: IDisplayInformationProps) {
  return (
    <div className="w-full bg-text-primary py-5 px-4 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center items-start gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:max-w-[70%]">
        <ItemDisplayInformation
          content="10:45"
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
        >
          ثبت آزمون
        </Button>
      </div>
    </div>
  );
}
