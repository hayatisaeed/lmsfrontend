"use client";

//react
import { useEffect, useRef, useState } from "react";

//types
import { ChangeEvent } from "react";

//constant
import { lettersFn } from "@/shared/constant/letters";

//ui
import { Button } from "@/shared/ui";

//icon
import { UploadSquare, Paperclip, Trash } from "@/assets/icons";

//api
import api from "@/core/config/api/api";

//clsx
import clsx from "clsx";

//axios
import axios, { CancelTokenSource } from "axios";

interface IQuestionProps {
  body_richtext: string;
  setSending: (start: boolean) => void;
  attempt_id: string;
  handleDataDisplay: (answer: boolean) => void;
  question_id: string;
  number?: number;
  question: string;
  answers?: { answer: string; id: number }[];
  score?: number;
  text?: boolean;
  mutateAnswer: (
    data: {
      attempt_id: string;
      question_id: string;
      text: string;
      version: number;
    },
    setNull?: () => void
  ) => void;
}

export default function Question({
  handleDataDisplay,
  attempt_id,
  question_id,
  text = false,
  number,
  question,
  answers,
  score,
  body_richtext,
  setSending,
  mutateAnswer,
}: IQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answerMessage, setAnswerMessage] = useState<string>(body_richtext);
  const [files, setFiles] = useState<File[]>([]);
  const [progresses, setProgresses] = useState<Record<string, number>>({});
  const [cancelTokens, setCancelTokens] = useState<
    Record<string, CancelTokenSource>
  >({});
  const [errorFiles, setErrorFiles] = useState<Record<string, boolean>>({});
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    if (!isMounted) {
      setIsMounted(true);
      return;
    }

    if (!answerMessage && selectedAnswer === null) return;

    const timeout = setTimeout(() => {
      setSending(true);
      mutateAnswer({
        text: answerMessage,
        attempt_id,
        question_id,
        version: selectedAnswer || -1,
      });
    }, 5000);

    return () => {
      clearTimeout(timeout);
      setSending(false);
    };
  }, [answerMessage, selectedAnswer, attempt_id, question_id, isMounted]);

  function handleSelect(id: number) {
    const wasAnswered = selectedAnswer !== null;
    setSelectedAnswer(id);

    mutateAnswer(
      { text: String(id), version: id, attempt_id, question_id },
      () => {
        setSelectedAnswer(null);
        handleDataDisplay(false);
      }
    );

    if (!wasAnswered) {
      handleDataDisplay(true);
    }
  }

  function handleTextChange(value: string) {
    const wasAnswered = !!answerMessage;
    setAnswerMessage(value);

    if (!wasAnswered && value.trim() !== "") {
      handleDataDisplay(true);
    } else if (wasAnswered && value.trim() === "") {
      handleDataDisplay(false);
    }
  }

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  function handleClickFile() {
    fileInputRef.current?.click();
  }

  async function handleFileUpload(e: ChangeEvent<HTMLInputElement>) {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length > 0 && files.length === 0) {
      handleDataDisplay(true);
    }
    setFiles((prevFiles) => [...prevFiles, ...selectedFiles]);

    selectedFiles.forEach(async (file) => {
      const formData = new FormData();
      formData.append("file", file);

      const source = axios.CancelToken.source();
      setCancelTokens((prev) => ({ ...prev, [file.name]: source }));

      await api
        .post(`/courses/questions/${question_id}/files/`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
          cancelToken: source.token,
          onUploadProgress(progressEvent) {
            const percent = Math.round(
              (progressEvent.loaded * 100) / (progressEvent.total || 1)
            );
            setProgresses((prev) => ({ ...prev, [file.name]: percent }));
          },
        })
        .then(() => {
          setCancelTokens((prev) => {
            const { [file.name]: _, ...rest } = prev;
            return rest;
          });
        })
        .catch((err) => {
          if (axios.isCancel(err)) {
            console.log("Upload canceled:", file.name);
          } else {
            setErrorFiles((prev) => ({ ...prev, [file.name]: true }));
          }
        });
    });
  }

  async function handleRemoveFile(file: File) {
    if (progresses[file.name] < 100 && cancelTokens[file.name]) {
      cancelTokens[file.name].cancel("User canceled upload");
    }

    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);

    setProgresses((prev) => {
      const { [file.name]: _, ...rest } = prev;
      return rest;
    });
    setCancelTokens((prev) => {
      const { [file.name]: _, ...rest } = prev;
      return rest;
    });
    setErrorFiles((prev) => {
      const { [file.name]: _, ...rest } = prev;
      return rest;
    });

    if (newFiles.length === 0) {
      handleDataDisplay(false);
    }

    if (progresses[file.name] === 100) {
      try {
        await api.post(`/your/custom/endpoint/`, { fileName: file.name });
        console.log("File successfully removed on server");
      } catch (err) {
        console.error("Error removing file from server:", err);
      }
    }
  }

  return (
    <div className="w-full p-5 rounded-2xl bg-box-primary flex flex-col justify-start gap-4">
      <div className="flex w-full items-center justify-between">
        <h3 className="font-kalameh text-lg">
          📌 سوال <span className="font-shabnam">{number}</span>
        </h3>
        <p className="font-shabnam text-xs">{score && `(${score} نمره)`}</p>
      </div>
      <h3 className="leading-7 text-justify">{question}</h3>

      {/* answers */}
      <div className="flex flex-col gap-4">
        {answers &&
          answers.map((answer, index) => (
            <label
              key={answer.id}
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                className="cursor-pointer"
                name={`question-${number}`}
                checked={selectedAnswer === answer.id}
                onChange={() => handleSelect(answer.id)}
              />
              <h3 className="flex items-center gap-1">
                <span>{`${lettersFn[index]} )`}</span>
                <span>{answer.answer}</span>
              </h3>
            </label>
          ))}
      </div>

      {/* text */}
      {text && (
        <div className="flex flex-col w-full gap-5">
          <div className="flex flex-col w-full bg-white-primary rounded-xl p-4">
            <textarea
              className="w-full bg-white-primary p-1 outline-0 rounded-xl placeholder:text-sm text-sm resize-none"
              placeholder="جواب سوال :"
              rows={5}
              value={answerMessage}
              onChange={(e) => handleTextChange(e.target.value)}
            />

            <div className="w-full flex justify-end">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                hidden
                onChange={handleFileUpload}
              />
              <Button
                size="SM"
                color="PRIMARY"
                type="submit"
                iconLeft
                icon={<Paperclip size="SM" color="PRIMARY" />}
                onClick={handleClickFile}
                className="!bg-[#f2f5fd] text-xs !text-primary !rounded-xl !px-4 !py-3"
              >
                ارسال فایل
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {files.map((file) => (
              <div
                className="w-full rounded-xl bg-white-primary p-3 flex items-center gap-2 justify-between"
                key={file.name}
              >
                <div className="flex flex-col grow gap-2">
                  <div className="flex w-full items-center justify-between">
                    <button
                      type="button"
                      onClick={() => handleRemoveFile(file)}
                      className="border-0 outline-0 bg-transparent cursor-pointer"
                    >
                      <Trash size="SM" color="DARK" />
                    </button>
                    <h3 className="text-sm">{file.name}</h3>
                  </div>
                  <div
                    className={clsx(
                      "w-full flex items-end rounded-full",
                      errorFiles[file.name]
                        ? "bg-red-100"
                        : progresses[file.name] < 100
                        ? "bg-[#f2f5fd]"
                        : "bg-[#ebf2ef]"
                    )}
                  >
                    <div
                      style={{ width: `${progresses[file.name] || 0}%` }}
                      className={clsx(
                        "h-2 rounded-full",
                        errorFiles[file.name]
                          ? "bg-errors"
                          : progresses[file.name] < 100
                          ? "bg-[#4741D7]"
                          : "bg-backgrdound-box-green"
                      )}
                    ></div>
                  </div>
                  <div className="w-full flex items-center justify-between">
                    <h3 className="text-sm font-shabnam">
                      {errorFiles[file.name]
                        ? "خطا"
                        : `${progresses[file.name] || 0}%`}
                    </h3>
                    <h3 className="text-sm">
                      {errorFiles[file.name]
                        ? "مشکل در بارگذاری!"
                        : progresses[file.name] < 100
                        ? `${(file.size / 1024 / 1024).toFixed(2)} مگابایت`
                        : "با موفقیت به پایان رسید."}
                    </h3>
                  </div>
                </div>
                <div
                  className={clsx(
                    "size-8 rounded-full flex items-center justify-center",
                    errorFiles[file.name]
                      ? "bg-red-100"
                      : progresses[file.name] < 100
                      ? "bg-[#f2f5fd]"
                      : "bg-[#ebf2ef]"
                  )}
                >
                  <UploadSquare
                    color={
                      errorFiles[file.name]
                        ? "DANGER"
                        : progresses[file.name] < 100
                        ? "PURPLE"
                        : "GREEN"
                    }
                    size="SM"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
