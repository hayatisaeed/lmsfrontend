"use client";
import { useRef, useState } from "react";
import { lettersFn } from "@/shared/constant/letters";
import { Button } from "@/shared/ui";
import { Paperclip } from "@/assets/icons";

interface IQuestionProps {
  number: number;
  question: string;
  answers?: { answer: string; id: number }[];
  score?: number;
  onSelect?: (selectedId: number) => void;
  text?: boolean;
}

export default function Question({
  text = false,
  number,
  question,
  answers,
  score,
  onSelect,
}: IQuestionProps) {
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedAnswer(id);
    if (onSelect) onSelect(id);
  };

  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="w-full p-5 rounded-2xl bg-box-primary flex flex-col justify-start gap-4">
      <div className="flex w-full items-center justify-between">
        <h3 className="font-kalameh text-lg">
          📌 سوال <span className="font-shabnam">{number}</span>
        </h3>
        <p className="font-shabnam text-xs">{score && `(${score} نمره)`}</p>
      </div>
      {/* question */}
      <h3 className="leading-7">{question}</h3>

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
      <div className="flex flex-col w-full bg-white-primary rounded-xl p-4">
        <textarea
          className="w-full bg-white-primary p-1 outline-0 rounded-xl placeholder:text-sm text-sm resize-none"
          placeholder="جواب سوال :"
          rows={5}
        />

        <div className="w-full flex justify-end">
          <input ref={fileInputRef} type="file" accept="image/*" hidden />
          <Button
            size="SM"
            color="PRIMARY"
            type="submit"
            iconLeft
            icon={<Paperclip size="SM" color="PRIMARY" />}
            onClick={handleClick}
            className="!bg-[#f2f5fd] text-xs !text-primary !rounded-xl !px-4 !py-3"
          >
            ارسال فایل
          </Button>
        </div>
      </div>
    </div>
  );
}
