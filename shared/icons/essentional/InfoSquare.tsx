//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface IInfoSquareProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function InfoSquare({
  color = "DARK",
  size = "MD",
}: IInfoSquareProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 15.5833V10.0833"
        stroke={COLORS[color]}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle
        cx="0.916667"
        cy="0.916667"
        r="0.916667"
        transform="matrix(1 0 0 -1 10.084 8.25)"
        fill={COLORS[color]}
      />
      <path
        d="M1.83398 10.9999C1.83398 6.67871 1.83398 4.51811 3.17641 3.17568C4.51884 1.83325 6.67944 1.83325 11.0007 1.83325C15.3219 1.83325 17.4825 1.83325 18.8249 3.17568C20.1673 4.51811 20.1673 6.67871 20.1673 10.9999C20.1673 15.3211 20.1673 17.4817 18.8249 18.8242C17.4825 20.1666 15.3219 20.1666 11.0007 20.1666C6.67944 20.1666 4.51884 20.1666 3.17641 18.8242C1.83398 17.4817 1.83398 15.3211 1.83398 10.9999Z"
        stroke={COLORS[color]}
        strokeWidth="1.5"
      />
    </svg>
  );
}
