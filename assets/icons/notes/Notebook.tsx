//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface INotebookProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Notebook({
  color = "DARK",
  size = "MD",
}: INotebookProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.25 6.5C2.25 4.37868 2.25 3.31802 2.90901 2.65901C3.56802 2 4.62868 2 6.75 2H11.25C13.3713 2 14.432 2 15.091 2.65901C15.75 3.31802 15.75 4.37868 15.75 6.5V12.5C15.75 14.6213 15.75 15.682 15.091 16.341C14.432 17 13.3713 17 11.25 17H6.75C4.62868 17 3.56802 17 2.90901 16.341C2.25 15.682 2.25 14.6213 2.25 12.5V6.5Z"
        stroke={COLORS[color]}
        strokeWidth="1.3"
      />
      <path
        d="M6 2.375V17"
        stroke={COLORS[color]}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M1.5 9.5H3"
        stroke={COLORS[color]}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M1.5 12.5H3"
        stroke={COLORS[color]}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M1.5 6.5H3"
        stroke={COLORS[color]}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M8.625 5.375H12.375"
        stroke={COLORS[color]}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M8.625 8H12.375"
        stroke={COLORS[color]}
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}
