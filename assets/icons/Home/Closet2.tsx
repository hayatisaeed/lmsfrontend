//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface ICloset2Props {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Closet2({
  color = "DARK",
  size = "MD",
}: ICloset2Props) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.16663 18.1819V1.81824"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1.83337 9.09096C1.83337 5.66257 1.83337 3.94837 2.90732 2.8833C3.98126 1.81824 5.70974 1.81824 9.16671 1.81824H12.8334C16.2903 1.81824 18.0188 1.81824 19.0928 2.8833C20.1667 3.94837 20.1667 5.66257 20.1667 9.09097V10.9091C20.1667 14.3375 20.1667 16.0517 19.0928 17.1168C18.0188 18.1819 16.2903 18.1819 12.8334 18.1819H9.16671C5.70974 18.1819 3.98126 18.1819 2.90732 17.1168C1.83337 16.0517 1.83337 14.3375 1.83337 10.9091V9.09096Z"
        stroke={COLORS[color]}
        strokeWidth="1.5"
      />
      <path
        d="M13.5385 12.7273L15.7949 10.2273L13.5385 7.72729"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
