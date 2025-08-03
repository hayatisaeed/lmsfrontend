//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IHelpProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Help({ color = "DARK", size = "MD" }: IHelpProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_878_8082)">
        <circle
          cx="9.49967"
          cy="9.49992"
          r="7.91667"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
        <circle
          cx="9.49967"
          cy="9.49992"
          r="3.16667"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
        <path
          d="M11.875 7.12492L15.0417 3.95825"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
        <path
          d="M3.95801 15.0417L7.12467 11.875"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
        <path
          d="M7.125 7.12492L3.95833 3.95825"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
        <path
          d="M15.042 15.0417L11.8753 11.875"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_878_8082">
          <rect width="19" height="19" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
