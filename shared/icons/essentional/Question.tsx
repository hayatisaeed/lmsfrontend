//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IQuestionProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Question({
  color = "DARK",
  size = "MD",
}: IQuestionProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="12"
        cy="12"
        r="9.84375"
        stroke={COLORS[color]}
        strokeWidth="1.5"
      />
      <path
        d="M10.1543 8.92383C10.1543 7.90447 10.9806 7.07812 12 7.07812C13.0194 7.07812 13.8457 7.90447 13.8457 8.92383C13.8457 9.60053 13.4815 10.1922 12.9385 10.5135C12.4706 10.7903 12 11.2103 12 11.7539V12.9844"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="15.9375" r="0.984375" fill={COLORS[color]} />
    </svg>
  );
}
