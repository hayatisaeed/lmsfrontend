//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IArrowsALogout2Props {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function ArrowsALogout2({
  color = "DANGER",
  size = "MD",
}: IArrowsALogout2Props) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_870_6108)">
        <path
          d="M6.00122 4.66671C6.00929 3.21669 6.07359 2.43142 6.58585 1.91916C7.17163 1.33337 8.11444 1.33337 10.0001 1.33337L10.6667 1.33337C12.5523 1.33337 13.4952 1.33337 14.0809 1.91916C14.6667 2.50495 14.6667 3.44776 14.6667 5.33337L14.6667 10.6667C14.6667 12.5523 14.6667 13.4951 14.0809 14.0809C13.4952 14.6667 12.5523 14.6667 10.6667 14.6667L10.0001 14.6667C8.11444 14.6667 7.17163 14.6667 6.58585 14.0809C6.07359 13.5687 6.00929 12.7834 6.00122 11.3334"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <path
          d="M10 8L1.33333 8M1.33333 8L3.66667 6M1.33333 8L3.66667 10"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_870_6108">
          <rect width="16" height="16" rx="5" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
