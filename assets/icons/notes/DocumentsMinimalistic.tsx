//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IDocumentsMinimalisticProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function DocumentsMinimalistic({
  color = "DARK",
  size = "MD",
}: IDocumentsMinimalisticProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 19 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1001_9542)">
        <path
          d="M3.95801 6C3.95801 3.87868 3.95801 2.81802 4.65363 2.15901C5.34925 1.5 6.46884 1.5 8.70801 1.5H10.2913C12.5305 1.5 13.6501 1.5 14.3457 2.15901C15.0413 2.81802 15.0413 3.87868 15.0413 6V12C15.0413 14.1213 15.0413 15.182 14.3457 15.841C13.6501 16.5 12.5305 16.5 10.2913 16.5H8.70801C6.46884 16.5 5.34925 16.5 4.65363 15.841C3.95801 15.182 3.95801 14.1213 3.95801 12V6Z"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
        <path
          d="M7.125 9.75H11.875"
          stroke={COLORS[color]}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.125 6.75H11.875"
          stroke={COLORS[color]}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M7.125 12.75H9.5"
          stroke={COLORS[color]}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M1.58301 14.25V3.75"
          stroke={COLORS[color]}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M17.417 14.25V3.75"
          stroke={COLORS[color]}
          strokeWidth="1.5"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1001_9542">
          <rect width="19" height="18" rx="5" fill={COLORS[color]} />
        </clipPath>
      </defs>
    </svg>
  );
}
