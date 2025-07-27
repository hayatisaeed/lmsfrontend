//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface IChatRoundDotsProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function ChatRoundDots({
  color = "DARK",
  size = "MD",
}: IChatRoundDotsProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4" clip-path="url(#clip0_148_2361)">
        <path
          d="M6.6665 10H6.674M9.99234 10H9.99984M13.3257 10H13.3332"
          stroke={COLORS[color]}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M10.0002 18.3334C14.6025 18.3334 18.3335 14.6025 18.3335 10.0001C18.3335 5.39771 14.6025 1.66675 10.0002 1.66675C5.39779 1.66675 1.66683 5.39771 1.66683 10.0001C1.66683 11.3331 1.97984 12.5931 2.53638 13.7105C2.68428 14.0074 2.7335 14.3468 2.64776 14.6673L2.15142 16.5223C1.93596 17.3276 2.67267 18.0643 3.47795 17.8488L5.33298 17.3525C5.65344 17.2667 5.99284 17.316 6.28977 17.4639C7.40713 18.0204 8.66709 18.3334 10.0002 18.3334Z"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
      </g>
      <defs>
        <clipPath id="clip0_148_2361">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
