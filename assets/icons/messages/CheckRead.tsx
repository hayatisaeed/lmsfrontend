//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface ICheckReadProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function CheckRead({
  color = "LIGHT",
  size = "MD",
}: ICheckReadProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12.9L7.14286 16.5L15 7.5"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 7.5625L11.4283 16.5625L11 16"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
