//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IArchiveCheckProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function ArchiveCheck({
  color = "DARK",
  size = "MD",
}: IArchiveCheckProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 18 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M15.375 5.75V10.25C15.375 13.0784 15.375 14.4926 14.4963 15.3713C13.6176 16.25 12.2034 16.25 9.375 16.25H8.625C5.79657 16.25 4.38236 16.25 3.50368 15.3713C2.625 14.4926 2.625 13.0784 2.625 10.25V5.75"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M1.5 4.25C1.5 3.54289 1.5 3.18934 1.71967 2.96967C1.93934 2.75 2.29289 2.75 3 2.75H15C15.7071 2.75 16.0607 2.75 16.2803 2.96967C16.5 3.18934 16.5 3.54289 16.5 4.25C16.5 4.95711 16.5 5.31066 16.2803 5.53033C16.0607 5.75 15.7071 5.75 15 5.75H3C2.29289 5.75 1.93934 5.75 1.71967 5.53033C1.5 5.31066 1.5 4.95711 1.5 4.25Z"
        stroke={COLORS[color]}
        strokeWidth="1.5"
      />
      <path
        d="M7.125 10.55L8.19643 11.75L10.875 8.75"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
