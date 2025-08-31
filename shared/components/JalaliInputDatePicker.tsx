"use client";
import React, { useState, useRef, useEffect } from "react";
import moment from "jalali-moment";
import { Button } from "../ui";

const persianMonths = [
  "فروردین",
  "اردیبهشت",
  "خرداد",
  "تیر",
  "مرداد",
  "شهریور",
  "مهر",
  "آبان",
  "آذر",
  "دی",
  "بهمن",
  "اسفند",
];

interface IJalaliInputDatePickerProps {
  setDate?: (date: string) => void; // خروجی "jYYYY/jM/jD"
}

export default function JalaliInputDatePicker({
  setDate,
}: IJalaliInputDatePickerProps) {
  const today = moment().locale("fa").format("jYYYY/jM/jD");
  const [jy, jm, jd] = today.split("/").map(Number);

  const [day, setDay] = useState<number>(jd);
  const [month, setMonth] = useState<number>(jm);
  const [year, setYear] = useState<number>(jy);
  const [showPicker, setShowPicker] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);
  const pickerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        pickerRef.current &&
        !pickerRef.current.contains(e.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(e.target as Node)
      ) {
        setShowPicker(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const daysInMonth = moment
    .from(`${year}/${month}/1`, "fa", "jYYYY/jM/jD")
    .jDaysInMonth();

  const formattedDate = moment
    .from(`${year}/${month}/${day}`, "fa", "jYYYY/jM/jD")
    .locale("fa")
    .format("jYYYY/jMM/jDD");

  const handleSubmit = () => {
    const newDate = `${year}/${month}/${day}`;
    setDate?.(newDate);
    setShowPicker(false);
  };

  const renderScrollColumn = (
    value: number,
    min: number,
    max: number,
    setValue: (val: number) => void,
    labelFn?: (val: number) => string
  ) => {
    const items = Array.from({ length: max - min + 1 }, (_, i) => i + min);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
      const container = e.currentTarget;
      const itemHeight = 36; // ارتفاع هر آیتم
      const index = Math.round(container.scrollTop / itemHeight);
      const newValue = items[index];
      if (newValue && newValue !== value) {
        setValue(newValue);
      }
    };

    return (
      <div
        className="flex flex-col items-center mx-2 w-20 h-40 overflow-y-auto snap-y snap-mandatory"
        onScroll={handleScroll}
      >
        {items.map((val) => (
          <div
            key={val}
            className={`h-9 flex items-center justify-center snap-center cursor-pointer transition 
            ${val === value ? "text-black font-bold scale-110" : "text-gray-400"}`}
            onClick={() => setValue(val)}
          >
            {labelFn ? labelFn(val) : val}
          </div>
        ))}
      </div>
    );
  };

  return (
    <div className="relative flex flex-col items-center w-full font-shabnam">
      <div className="flex justify-between items-center gap-1 bg-box-primary p-4 rounded-2xl w-full">
        <input
          ref={inputRef}
          type="text"
          readOnly
          value={formattedDate}
          onClick={() => setShowPicker(!showPicker)}
          className="outline-0 border-0 w-full bg-transparent font-shabnam"
        />
      </div>

      {showPicker && (
        <div
          ref={pickerRef}
          className="absolute -top-48 bg-white shadow-lg rounded p-4 flex flex-col items-center z-[100] font-shabnam"
        >
          <div className="flex">
            {renderScrollColumn(day, 1, daysInMonth, setDay)}
            {renderScrollColumn(month, 1, 12, setMonth, (val) => persianMonths[val - 1])}
            {renderScrollColumn(year, 1300, 1500, setYear)}
          </div>

          {/* دکمه ثبت */}
          <Button onClick={handleSubmit} className="mt-5" size="SM">
            ثبت تاریخ
          </Button>
        </div>
      )}
    </div>
  );
}
