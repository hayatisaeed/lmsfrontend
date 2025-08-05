//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface ICloseProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Close({ color = "DARK", size = "MD" }: ICloseProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 1.00005L1 13M0.999949 1L12.9999 13"
        stroke={COLORS[color]}
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}
