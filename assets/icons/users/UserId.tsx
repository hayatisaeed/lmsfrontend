//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface IUserIdProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function UserId({ color = "DARK", size = "MD" }: IUserIdProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="7.875"
        cy="7.875"
        r="1.75"
        stroke={COLORS[color]}
        strokeWidth="1.2"
      />
      <path
        d="M11.375 13.125C11.375 14.0915 11.375 14.875 7.875 14.875C4.375 14.875 4.375 14.0915 4.375 13.125C4.375 12.1585 5.942 11.375 7.875 11.375C9.808 11.375 11.375 12.1585 11.375 13.125Z"
        stroke={COLORS[color]}
        strokeWidth="1.2"
      />
      <path
        d="M1.75 10.5C1.75 7.20017 1.75 5.55025 2.77513 4.52513C3.80025 3.5 5.45017 3.5 8.75 3.5H12.25C15.5498 3.5 17.1997 3.5 18.2249 4.52513C19.25 5.55025 19.25 7.20017 19.25 10.5C19.25 13.7998 19.25 15.4497 18.2249 16.4749C17.1997 17.5 15.5498 17.5 12.25 17.5H8.75C5.45017 17.5 3.80025 17.5 2.77513 16.4749C1.75 15.4497 1.75 13.7998 1.75 10.5Z"
        stroke={COLORS[color]}
        strokeWidth="1.2"
      />
      <path
        d="M16.625 10.5H13.125"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16.625 7.875H12.25"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M16.625 13.125H14"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
