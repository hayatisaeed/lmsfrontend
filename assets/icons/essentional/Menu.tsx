//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IMenuProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}
export default function Menu({ color = "DARK", size = "SM" }: IMenuProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 25 27"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.4297 7.875L4.30066 7.875"
        stroke={COLORS[color]}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20.4307 12.9376L4.30163 12.9376"
       stroke={COLORS[color]}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M20.4307 18.0001L4.30163 18.0001"
       stroke={COLORS[color]}
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
