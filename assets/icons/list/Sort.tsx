//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface ISortProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Sort({ color = "DARK", size = "MD" }: ISortProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 8H13"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6 13H13"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 18H13"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M17 20V4L20 8"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
