//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IPaperclipProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Paperclip({
  color = "LIGHT",
  size = "MD",
}: IPaperclipProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M6.09921 9.97521L9.97543 6.26482C10.4408 5.81935 10.4408 5.09709 9.97543 4.65161C9.51004 4.20614 8.7555 4.20614 8.29012 4.65161L4.44198 8.33511C3.55775 9.18151 3.55775 10.5538 4.44198 11.4002C5.32622 12.2466 6.75985 12.2466 7.64408 11.4002L11.5484 7.66294C12.8515 6.41561 12.8515 4.39328 11.5484 3.14595C10.2453 1.89862 8.13259 1.89862 6.82951 3.14595L3.68359 6.15727"
        stroke={COLORS[color]}
        strokeLinecap="round"
      />
    </svg>
  );
}
