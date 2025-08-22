"use client";
import React, { useState, useRef, useEffect } from "react";
import moment from "jalali-moment";

type ColumnType = "day" | "month" | "year";

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
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  // ارسال تاریخ بعد از توقف تغییرات (debounce)
  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      const newDate = `${year}/${month}/${day}`;
      setDate?.(newDate);
    }, 500); // بعد از 500ms ارسال شود
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [day, month, year, setDate]);

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

  const handleChange = (type: ColumnType, dir: number) => {
    if (type === "day") {
      let newDay = day + dir;
      if (newDay < 1) newDay = daysInMonth;
      if (newDay > daysInMonth) newDay = 1;
      setDay(newDay);
    } else if (type === "month") {
      let newMonth = month + dir;
      let newYear = year;
      if (newMonth < 1) {
        newMonth = 12;
        newYear--;
      }
      if (newMonth > 12) {
        newMonth = 1;
        newYear++;
      }
      setMonth(newMonth);
      setYear(newYear);
      const maxDays = moment
        .from(`${newYear}/${newMonth}/1`, "fa", "jYYYY/jM/jD")
        .jDaysInMonth();
      if (day > maxDays) setDay(maxDays);
    } else if (type === "year") {
      const newYear = year + dir;
      setYear(newYear);
      const maxDays = moment
        .from(`${newYear}/${month}/1`, "fa", "jYYYY/jM/jD")
        .jDaysInMonth();
      if (day > maxDays) setDay(maxDays);
    }
  };

  const renderColumn = (
    value: number,
    max: number,
    type: ColumnType,
    labelFn?: (val: number) => string
  ) => {
    const range = 2;
    const items = [];

    for (let i = -range; i <= range; i++) {
      let val = value + i;
      if (val < 1) val += max;
      if (val > max) val -= max;

      const opacity = i === 0 ? 1 : 0.4 + 0.6 / (Math.abs(i) + 1);
      const scale = i === 0 ? 1 : 0.8;

      items.push(
        <div
          key={i}
          className="text-center transition-all duration-200"
          style={{ opacity, transform: `scale(${scale})`, margin: "2px 0" }}
        >
          {labelFn ? labelFn(val) : val}
        </div>
      );
    }

    return (
      <div className="flex flex-col items-center mx-2 w-20">
        <div
          onClick={() => handleChange(type, -1)}
          className="text-gray-400 cursor-pointer select-none"
        >
          ▲
        </div>
        <div className="relative h-32 overflow-hidden flex flex-col items-center justify-center">
          <div className="flex flex-col items-center transition-transform duration-300">
            {items}
          </div>
        </div>
        <div
          onClick={() => handleChange(type, 1)}
          className="text-gray-400 cursor-pointer select-none"
        >
          ▼
        </div>
      </div>
    );
  };

  const formattedDate = moment
    .from(`${year}/${month}/${day}`, "fa", "jYYYY/jM/jD")
    .locale("fa")
    .format("jYYYY/jMM/jDD");

  return (
    <div className="relative flex flex-col items-center w-full">
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
          className="absolute -top-32 bg-white shadow-lg rounded p-4 flex z-[100] font-shabnam"
        >
          {renderColumn(day, daysInMonth, "day")}
          {renderColumn(month, 12, "month", (val) => persianMonths[val - 1])}
          {renderColumn(year, 1500, "year")}
        </div>
      )}
    </div>
  );
}
