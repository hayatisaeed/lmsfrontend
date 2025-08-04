//ui
import { Button } from "@/shared/ui";

interface IChangeActivationStudentsProps {
  activation?: boolean;
  onClose?: () => void;
}

export default function ChangeActivation({
  onClose,
  activation = true,
}: IChangeActivationStudentsProps) {
  function handleClickClose() {
    onClose?.();
  }

  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-lg font-semibold">
        {activation ? "غیر فعال سازی کاربر" : "فعال سازی کاربر"}
      </h3>
      <p>
        {activation
          ? "با غیر فعال سازی کاربر , دسترسی های مربوطه غیر فعال خواهند شد."
          : "با فعال سازی کاربر , دسترسی های مربوطه فعال خواهند شد."}
      </p>
      <div className="flex items-center justify-center w-full gap-3">
        <Button
          color={activation ? "ERROR" : "SUCCESS"}
          type="button"
          className="whitespace-nowrap"
        >
          {activation ? "غیر فعال سازی" : "فعال سازی"}
        </Button>
        <Button type="button" color="SECONDARY" onClick={handleClickClose}>
          لغو
        </Button>
      </div>
    </div>
  );
}
