//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface INotificationUnreadLinesProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function NotificationUnreadLines({
  color = "DARK",
  size = "MD",
}: INotificationUnreadLinesProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_870_6038)">
        <path
          d="M16.5 7.875V9C16.5 12.5355 16.5 14.3033 15.4017 15.4017C14.3033 16.5 12.5355 16.5 9 16.5C5.46447 16.5 3.6967 16.5 2.59835 15.4017C1.5 14.3033 1.5 12.5355 1.5 9C1.5 5.46447 1.5 3.6967 2.59835 2.59835C3.6967 1.5 5.46447 1.5 9 1.5H10.125"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle
          cx="14.25"
          cy="3.75"
          r="2.25"
          stroke={COLORS[color]}
          strokeWidth="1.2"
        />
        <path
          d="M5.25 10.5H12"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M5.25 13.125H9.75"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_870_6038">
          <rect width="18" height="18" rx="5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
