import { Button } from "@/shared/ui";
import ItemDisplayInformation from "./ItemDisplayInformation";
import {
  Alarm,
  CheckRead,
  MultipleForward,
  CheckCircle,
  UserCheck,
} from "@/assets/icons";

export default function DisplayInformation() {
  return (
    <div className="w-full bg-text-primary py-5 px-4 rounded-2xl flex flex-col md:flex-row md:justify-between md:items-center items-start gap-8">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full md:max-w-[70%]">
        <ItemDisplayInformation
          content="10:45"
          title="زمان باقی مانده"
          icon={<Alarm color="LIGHT" size="MD" />}
        />
        <ItemDisplayInformation
          content="10"
          title="تعداد کل سوالات"
          icon={<h3 className="text-white-primary text-xl">?</h3>}
        />
        <ItemDisplayInformation
          content="10"
          title="پاسخ داده شده"
          icon={<CheckRead color="LIGHT" size="MD" />}
        />

        <ItemDisplayInformation
          content="10"
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
