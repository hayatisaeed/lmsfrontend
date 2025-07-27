//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface IArrowLeftProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function ArrowLeft({
  size = "MD",
  color = "DARK",
}: IArrowLeftProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 6H2M2 6L5 3M2 6L5 9"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
