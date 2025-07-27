//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IAltArrowProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function AltArrow({
  color = "DARK",
  size = "MD",
}: IAltArrowProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 7 7"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_870_5970)">
        <path
          d="M1.4585 2.625L3.50016 4.375L5.54183 2.625"
          stroke={COLORS[color]}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_870_5970">
          <rect
            width="7"
            height="7"
            fill="white"
            transform="translate(0 7) rotate(-90)"
          />
        </clipPath>
      </defs>
    </svg>
  );
}
