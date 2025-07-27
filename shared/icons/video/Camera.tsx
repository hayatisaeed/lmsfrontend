//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface ICameraProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Camera({ color = "DARK", size = "MD" }: ICameraProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <ellipse
        cx="8.5"
        cy="9.20837"
        rx="2.125"
        ry="2.125"
        stroke={COLORS[color]}
        strokeWidth="1.2"
      />
      <path
        d="M6.92625 14.875H10.0744C12.2851 14.875 13.3905 14.875 14.1845 14.3541C14.5283 14.1286 14.8234 13.8388 15.0531 13.5013C15.5837 12.7217 15.5837 11.6364 15.5837 9.46591C15.5837 7.29538 15.5837 6.21011 15.0531 5.43051C14.8234 5.09301 14.5283 4.80324 14.1845 4.57773C13.6743 4.24301 13.0355 4.12337 12.0576 4.08061C11.5909 4.08061 11.1891 3.7334 11.0975 3.28409C10.9603 2.61013 10.3575 2.125 9.6575 2.125H7.34315C6.64311 2.125 6.04039 2.61013 5.9031 3.28409C5.81158 3.7334 5.40976 4.08061 4.94307 4.08061C3.9651 4.12337 3.32634 4.24301 2.81612 4.57773C2.47238 4.80324 2.17724 5.09301 1.94755 5.43051C1.41699 6.21011 1.41699 7.29538 1.41699 9.46591C1.41699 11.6364 1.41699 12.7217 1.94755 13.5013C2.17724 13.8388 2.47238 14.1286 2.81612 14.3541C3.61016 14.875 4.71552 14.875 6.92625 14.875Z"
        stroke={COLORS[color]}
        strokeWidth="1.2"
      />
      <path
        d="M13.4583 7.08337H12.75"
        stroke={COLORS[color]}
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}
