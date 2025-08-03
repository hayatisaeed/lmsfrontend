//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IUploadSquareProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function UploadSquare({
  color = "DARK",
  size = "MD",
}: IUploadSquareProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_870_6042)">
        <path
          d="M9 12.75L9 7.5M9 7.5L11.25 9.75M9 7.5L6.75 9.75"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12 5.25H9H6"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5C12.5355 1.5 14.3033 1.5 15.4017 2.59835C16.5 3.6967 16.5 5.46447 16.5 9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9Z"
          stroke={COLORS[color]}
          strokeWidth="1.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_870_6042">
          <rect width="18" height="18" rx="5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
