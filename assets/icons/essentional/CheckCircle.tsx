//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface ICheckCircleProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function CheckCircle({
  color = "DARK",
  size = "MD",
}: ICheckCircleProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" stroke={COLORS[color]} strokeWidth="1.5" />
      <path
        d="M8.5 12.5L10.5 14.5L15.5 9.5"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
