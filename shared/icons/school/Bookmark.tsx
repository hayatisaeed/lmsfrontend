//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IBookmarkProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Bookmark({
  size = "MD",
  color = "DARK",
}: IBookmarkProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M14.875 11.3977V7.8607C14.875 4.82294 14.875 3.30405 13.9414 2.36034C13.0078 1.41663 11.5052 1.41663 8.5 1.41663C5.4948 1.41663 3.99219 1.41663 3.0586 2.36034C2.125 3.30405 2.125 4.82293 2.125 7.8607V11.3977C2.125 13.5911 2.125 14.6878 2.64499 15.167C2.89299 15.3956 3.20602 15.5391 3.53948 15.5773C4.23868 15.6573 5.05519 14.9351 6.6882 13.4908C7.41003 12.8523 7.77095 12.5331 8.18853 12.449C8.39416 12.4075 8.60584 12.4075 8.81147 12.449C9.22905 12.5331 9.58997 12.8523 10.3118 13.4908C11.9448 14.9351 12.7613 15.6573 13.4605 15.5773C13.794 15.5391 14.107 15.3956 14.355 15.167C14.875 14.6878 14.875 13.5911 14.875 11.3977Z"
        stroke={COLORS[color]}
        strokeWidth="1.5"
      />
      <path
        d="M10.625 4.25H6.375"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}
