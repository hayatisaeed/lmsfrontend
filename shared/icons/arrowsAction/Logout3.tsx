//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface ILogout3Props {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Logout3({
  color = "DARK",
  size = "MD",
}: ILogout3Props) {
  return (
    <svg
      width={SIZES[size]}
      height={size}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.66821 5.83332C6.6783 4.0208 6.75868 3.03921 7.399 2.39889C8.13123 1.66666 9.30974 1.66666 11.6668 1.66666H12.5001C14.8571 1.66666 16.0356 1.66666 16.7679 2.39889C17.5001 3.13112 17.5001 4.30963 17.5001 6.66666V13.3333C17.5001 15.6903 17.5001 16.8689 16.7679 17.6011C16.0356 18.3333 14.8571 18.3333 12.5001 18.3333H11.6668C9.30974 18.3333 8.13123 18.3333 7.399 17.6011C6.75868 16.9608 6.6783 15.9792 6.66821 14.1667"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M6.66667 16.25C4.70248 16.25 3.72039 16.25 3.11019 15.6398C2.5 15.0296 2.5 14.0475 2.5 12.0833V7.91667C2.5 5.95248 2.5 4.97039 3.11019 4.36019C3.72039 3.75 4.70248 3.75 6.66667 3.75"
        stroke={COLORS[color]}
        strokeWidth="1.5"
      />
      <path
        d="M12.5 10L5 10M5 10L6.66667 11.6667M5 10L6.66667 8.33334"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
