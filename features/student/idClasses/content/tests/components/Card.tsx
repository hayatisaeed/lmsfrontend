//modal
import { Modal } from "@/shared/components";

//ui
import { Button } from "@/shared/ui";

//modal
import Tests from "../modal/Tests";

//api
import { usePostStudentClassesTestsAttempts } from "@/services/tanstack/student/classes/idClasses/tests/mutation";

//NEXT
import { usePathname, useRouter } from "next/navigation";

//toast
import toast from "react-hot-toast";

//types
import { AxiosError } from "axios";
import { AppDispatch } from "@/core/stores/redux/Provider";

//redux
import { useDispatch } from "react-redux";
import { addQuestion } from "@/core/stores/redux/slice/questionTest";
import { useGetExamsAttempts } from "@/services/tanstack/student/classes/idClasses/tests/queries";

//react
import { useState } from "react";

interface ICardProps {
  title: string;
  start: string;
  end: string;
  exam_id: string;
  duration: number;
  course_id: string;
  started: boolean;
}

export default function Card({
  title,
  exam_id,
  end,
  start,
  duration,
  course_id,
  started,
}: ICardProps) {
  const [isLoading, setIsLoading] = useState(false);

  const { mutate, isPending: isPendingClassesTestsAttempts } =
    usePostStudentClassesTestsAttempts();

  const { refetch } = useGetExamsAttempts(exam_id);

  const router = useRouter();
  const pathname = usePathname();

  const dispatch = useDispatch<AppDispatch>();

  async function mutateStupostdentClassesTestsAttempts() {
    if (started) {
      setIsLoading(true);
      const { data } = await refetch();
      dispatch(addQuestion(data));
      setIsLoading(false);
    } else {
      mutate(
        { exam_id, course_id },
        {
          onSuccess: (date) => {
            dispatch(addQuestion(""));
            router.push(`/${pathname}/question`);
          },
          onError: (err) => {
            const statusCode = (err as AxiosError).response?.status;

            if (statusCode === 403) {
              toast.error(
                "دسترسی شما به این آزمون مجاز نیست یا زمان برگزاری به پایان رسیده است."
              );
              return;
            }

            if (statusCode === 409) {
              toast.error("شما قبلاً یک تلاش برای این آزمون ثبت کرده‌اید.");
              return;
            }
            toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
          },
        }
      );
    }
  }

  const isPending = isLoading || isPendingClassesTestsAttempts;

  return (
    <>
      <Modal.Open id={exam_id}>
        <Button type="button" className="!bg-box-primary">
          <div className="w-full  !bg-box-primary !rounded-2xl !p-3 !flex !flex-col !gap-4 !text-text-primary">
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
          isPending={isPending}
          mutate={mutateStupostdentClassesTestsAttempts}
        />
      </Modal.Window>
    </>
  );
}
