//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IUnreadProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Unread({ color = "DARK", size = "MD" }: IUnreadProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12.9L10.1429 16.5L18 7.5"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
