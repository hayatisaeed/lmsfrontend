//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IBook2Props {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Book2({ size = "MD", color = "DARK" }: IBook2Props) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 19 19"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.16663 6.33325C3.16663 4.09408 3.16663 2.97449 3.86225 2.27887C4.55787 1.58325 5.67745 1.58325 7.91663 1.58325H11.0833C13.3225 1.58325 14.4421 1.58325 15.1377 2.27887C15.8333 2.97449 15.8333 4.09408 15.8333 6.33325V12.6666C15.8333 14.9058 15.8333 16.0253 15.1377 16.721C14.4421 17.4166 13.3225 17.4166 11.0833 17.4166H7.91663C5.67745 17.4166 4.55787 17.4166 3.86225 16.721C3.16663 16.0253 3.16663 14.9058 3.16663 12.6666V6.33325Z"
        stroke={COLORS[color]}
        strokeWidth="1.2"
      />
      <path
        d="M15.7524 12.6667H6.25237C5.51614 12.6667 5.14802 12.6667 4.846 12.7477C4.02641 12.9673 3.38624 13.6075 3.16663 14.4271"
        stroke={COLORS[color]}
        strokeWidth="1.2"
      />
      <path
        d="M6.33337 5.54175H12.6667"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M6.33337 8.3125H10.2917"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
      <path
        d="M15.4375 15.0417H6.33337"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
