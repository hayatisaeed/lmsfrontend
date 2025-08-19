//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IMultipleForwardProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function MultipleForward({
  color = "LIGHT",
  size = "MD",
}: IMultipleForwardProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9.44632 4.56628L6.13608 7.50872C4.82889 8.67066 4.17529 9.25164 4.17529 10.0001C4.17529 10.7485 4.82889 11.3295 6.13608 12.4914L9.44632 15.4339C10.043 15.9643 10.3413 16.2295 10.5873 16.119C10.8333 16.0085 10.8333 15.6094 10.8333 14.811V12.8572C13.8333 12.8572 17.0833 14.2858 18.3333 16.6668C18.3333 9.0477 13.8888 7.14294 10.8333 7.14294V5.18912C10.8333 4.39079 10.8333 3.99163 10.5873 3.88117C10.3413 3.77071 10.043 4.0359 9.44632 4.56628Z"
        stroke={COLORS[color]}
        strokeWidth="1.1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.05063 3.75L2.70379 7.78635C2.04203 8.40084 1.66602 9.26313 1.66602 10.1662C1.66602 11.1182 2.0837 12.0222 2.80861 12.6392L7.05063 16.25"
        stroke={COLORS[color]}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </svg>
  );
}
