"use client";

//container
import { Container } from "@/shared/ui";
import DisplayInformation from "./DisplayInformation";
import Question from "./Question";
import { useState } from "react";
import { useSelector } from "react-redux";

//redux
import { RootState } from "@/core/stores/redux/Provider";

//react-query
import {
  usePostSubmitExamp,
  usePutAutoSaveAnswer,
} from "@/services/tanstack/student/classes/idClasses/tests/mutation";
import toast from "react-hot-toast";
import { AxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";

export default function ContainerQuestion() {
  const { idClass } = useParams();

  const questions = useSelector<RootState>((store) => store.sliceQuestion);

  const { mutate: autoSaveAnswer } = usePutAutoSaveAnswer();

  const { mutate: submitExamp } = usePostSubmitExamp();

  const router = useRouter();

  const [dataDisplay, setDataDisplay] = useState<{
    questionAll: number;
    answers: number;
    remaining: number;
    duration: number;
  }>({ answers: 0, questionAll: 0, remaining: 0, duration: 150 });

  function mutateSubmitExamp() {
    submitExamp("", {
      onSuccess: () => {
        toast.success("آزمون شما با موفقیت ثبت شد");
        setTimeout(() => {
          router.replace(`/student/classes/${idClass}/content/`);
        }, 500);
      },
      onError: (err) => {
        if ((err as AxiosError).request) {
          toast.error(
            "ابتدا دسترسی خود را به اینترنت مطمعن کنید و بعد آزمون را ثبت کنید."
          );
          return;
        }
        toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
      },
    });
  }

  function mutateAutoSaveAnswer(
    data: {
      exam_id: string;
      question_id: string;
      text: string;
      version: number;
    },
    setNull?: () => void
  ) {
    autoSaveAnswer(data, {
      onError: (err) => {
        setNull?.();
        if ((err as AxiosError).request) {
          toast.error(
            "ابتدا دسترسی خود را به اینترنت مطمعن کنید و بعد به سوالات پاسخ دهید."
          );
          return;
        }
        toast.error("مشکلی پیش آمده لطفا دوباره امتحان کنید.");
      },
    });
  }

  return (
    <div className="w-full flex flex-col gap-5">
      <DisplayInformation data={dataDisplay} submit={mutateSubmitExamp} />
      <Container title="آزمون میان ترم ریاضی فیزیک">
        <div className="flex flex-col w-full gap-5">
          <Question
            exam_id="5"
            text
            question_id="5"
            mutateAnswer={mutateAutoSaveAnswer}
            score={3}
            answers={[
              { id: 1, answer: "5" },
              { id: 2, answer: "34324324" },
              { id: 3, answer: "5645" },
              { id: 4, answer: "3424" },
            ]}
            number={1}
            question="علی در یک کتابخانه ۱۲ کتاب ریاضی، ۸ کتاب فیزیک و ۵ کتاب شیمی دارد. اگر بخواهد از بین این کتاب‌ها فقط یک کتاب به صورت تصادفی انتخاب کند، احتمال اینکه کتاب انتخاب‌شده از نوع کتاب‌های ریاضی باشد، چند است؟"
          />
        </div>
      </Container>
    </div>
  );
}
