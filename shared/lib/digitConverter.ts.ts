// تبدیل اعداد انگلیسی به فارسی
export function toPersianDigits(input: number | string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return String(input).replace(/\d/g, (digit) => persianDigits[+digit]);
}

// تبدیل اعداد فارسی به انگلیسی
export function toEnglishDigits(input: string): string {
  const persianDigits = "۰۱۲۳۴۵۶۷۸۹";
  return input.replace(/[۰-۹]/g, (digit) =>
    String(persianDigits.indexOf(digit))
  );
}
