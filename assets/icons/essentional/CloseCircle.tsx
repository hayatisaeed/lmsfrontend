//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface ICloseCircleProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function CloseCircle({
  color = "DARK",
  size = "MD",
}: ICloseCircleProps) {
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
        d="M14.5 9.50002L9.5 14.5M9.49998 9.5L14.5 14.5"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
