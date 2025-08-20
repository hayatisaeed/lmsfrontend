//modal
import { Modal } from "@/shared/components";

//ui
import { Button } from "@/shared/ui";

//modal
import Tests from "../modal/Tests";

//api
import { usePostStupostdentClassesTestsAttempts } from "@/services/tanstack/student/classes/idClasses/tests/mutation";

import { usePathname, useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { AxiosError } from "axios";

interface ICardProps {
  title: string;
  start: string;
  end: string;
  exam_id: string;
  duration: number;
  course_id: string;
}

export default function Card({
  title,
  exam_id,
  end,
  start,
  duration,
  course_id,
}: ICardProps) {
  const { mutate } = usePostStupostdentClassesTestsAttempts();

  const router = useRouter();
  const pathname = usePathname();

  function mutateStupostdentClassesTestsAttempts() {
    mutate(
      { exam_id, course_id },
      {
        onSuccess: () => {
          router.push(`/${pathname}/question`);
        },
        onError: (err) => {
          if ((err as AxiosError).response?.status === 403) {
            toast.error(
              "دسترسی شما به این آزمون مجاز نیست یا زمان برگزاری به پایان رسیده است."
            );
            return;
          }

          if ((err as AxiosError).response?.status === 409) {
            toast.error("شما قبلاً یک تلاش برای این آزمون ثبت کرده‌اید.");
            return;
          }
          toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید");
        },
      }
    );
  }

  return (
    <>
      <Modal.Open id={exam_id}>
        <Button type="button" className="!bg-box-primary">
          <div className="w-full h-full !bg-box-primary !rounded-2xl !p-3 !flex !flex-col !gap-4 !text-text-primary">
            <div className="w-full flex justify-between items-center">
              <div className="flex items-center justify-center gap-2">
                <h3>{title}</h3>
              </div>
            </div>
          </div>
        </Button>
      </Modal.Open>
      <Modal.Window id={exam_id}>
        <Tests
          start={start}
          end={end}
          duration={duration}
          title={title}
          mutate={mutateStupostdentClassesTestsAttempts}
        />
      </Modal.Window>
    </>
  );
}
