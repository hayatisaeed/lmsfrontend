import { InputEditText, Uploader } from "@/shared/components";
import { Button, Container } from "@/shared/ui";

interface IViewStudentProps {
  onClose?: () => void;
}

export default function ViewStudent({ onClose }: IViewStudentProps) {
  function handleClose() {
    onClose?.();
  }

  return (
    <div className="flex flex-col w-[900px] max-h-[550px] overflow-auto">
      <Container title="اطلاعات حساب" className="py-0 my-0 gap-0">
        <div className="flex gap-3">
          <Uploader title="تصویر حساب" />
          <Uploader title="تصویر شناسنامه" />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
          <InputEditText placeholder="نام کاربری" />
          <InputEditText placeholder="ایمیل" />
          <InputEditText placeholder="شماره موبایل" />
        </div>
      </Container>
      <Container title="اطلاعات هویتی" className="py-0 my-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
          <InputEditText placeholder="نام و نام خانوادگی" />
          <InputEditText placeholder="کدملی" />
          <InputEditText placeholder="تاریخ تولد" />
          <InputEditText placeholder="نام پدر" />
          <InputEditText placeholder="جنسیت" />
        </div>
      </Container>
      <Container title="اطلاعات تحصیلی" className="py-0 my-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 w-full">
          <InputEditText placeholder="محل سکونت" />
          <InputEditText placeholder="مقطع تحصیلی" />
          <InputEditText placeholder="رشته تحصیلی" />
          <InputEditText placeholder="نام مدرسه" />
          <InputEditText placeholder="نوع مدرسه" />
          <InputEditText placeholder="شماره موبایل اولیا" />
          <InputEditText placeholder="المپیاد مد نظر" />
        </div>
      </Container>
      <div className="w-full flex justify-end">
        <Button type="button" color="SECONDARY" onClick={handleClose}>
          بستن
        </Button>
      </div>
    </div>
  );
}
