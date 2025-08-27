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

import { useParams, usePathname, useRouter } from "next/navigation";

//types
import { IExamSession } from "@/services/tanstack/student/classes/idClasses/tests/types";

export default function ContainerQuestion() {
  const { idClass } = useParams();

  const questions = useSelector<RootState>(
    (store) => store.sliceQuestion
  ) as IExamSession;

  const { mutate: autoSaveAnswer } = usePutAutoSaveAnswer();

  const { mutate: submitExamp } = usePostSubmitExamp();

  const [sending, setSending] = useState<boolean>(false);

  const router = useRouter();
  const pathname = usePathname();

  if (!questions) {
    const newPath = pathname.split("/").slice(0, -1).join("/") || "/";
    router.push(newPath);
  }

  const [dataDisplay, setDataDisplay] = useState<{
    questionAll: number;
    answers: number;
    remaining: number;
    duration: number;
  }>({
    questionAll: questions.questions?.length || 0,
    duration: questions.remaining_seconds,
    remaining:
      questions.questions?.length -
      questions.questions.filter((question) => question.assets?.length > 0)
        .length,
    answers: questions.questions.filter(
      (question) => question.assets?.length > 0
    ).length,
  });

  function handleDataDisplay(answered: boolean) {
    setDataDisplay((prev) => {
      let newAnswers = prev.answers;
      let newRemaining = prev.remaining;

      if (answered) {
        newAnswers = prev.answers + 1;
        newRemaining = prev.remaining - 1;
      } else {
        newAnswers = prev.answers - 1;
        newRemaining = prev.remaining + 1;
      }

      return {
        ...prev,
        answers: newAnswers,
        remaining: newRemaining,
      };
    });
  }

  async function mutateSubmitExamp() {
    const waitForSending = () =>
      new Promise<void>((resolve) => {
        const start = Date.now();

        const interval = setInterval(() => {
          if (!sending || Date.now() - start >= 5000) {
            clearInterval(interval);
            resolve();
          }
        }, 100);
      });

    await waitForSending();

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
      attempt_id: string;
      question_id: string;
      text: string;
      version: number;
    },
    setNull?: () => void
  ) {
    setSending(true);

    autoSaveAnswer(data, {
      onSuccess: () => {
        setSending(false);
      },
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
      <Container title="سوالات آزمون : ">
        <div className="flex flex-col w-full gap-5">
          {questions.questions?.map((question) => (
            <Question
              key={question.id}
              question_id={question.id}
              text
              mutateAnswer={mutateAutoSaveAnswer}
              question={question.title}
              number={question.assets?.[0]}
              answers={question.options}
              attempt_id={questions.id}
              handleDataDisplay={handleDataDisplay}
              setSending={setSending}
              body_richtext={question.body_richtext}
            />
          ))}
        </div>
      </Container>
    </div>
  );
}
