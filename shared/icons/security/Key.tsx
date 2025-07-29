//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";

interface IKeyProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Key({ color = "DARK", size = "MD" }: IKeyProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g opacity="0.4" clipPath="url(#clip0_878_8025)">
        <path
          d="M11.7606 10.9402C14.3781 10.9402 16.5 8.8269 16.5 6.22008C16.5 3.61325 14.3781 1.5 11.7606 1.5C9.14304 1.5 7.02112 3.61325 7.02112 6.22008C7.02112 7.42754 7.57222 8.30569 7.57222 8.30569L1.8408 14.0137C1.58363 14.2698 1.22357 14.9358 1.8408 15.5505L2.50212 16.2091C2.75929 16.4286 3.40589 16.736 3.93495 16.2091L4.70648 15.4407C5.47802 16.2091 6.35978 15.77 6.69043 15.3309C7.24153 14.5625 6.58022 13.7942 6.58022 13.7942L6.80065 13.5746C7.85876 14.6284 8.78461 14.0137 9.11526 13.5746C9.66636 12.8062 9.11526 12.0378 9.11526 12.0378C8.89482 11.5988 8.45397 11.5988 9.00504 11.0499L9.66639 10.3913C10.1954 10.8304 11.2829 10.9402 11.7606 10.9402Z"
          stroke={COLORS[color]}
          strokeWidth="1.2"
          strokeLinejoin="round"
        />
        <path
          d="M13.414 6.22027C13.414 7.12963 12.6738 7.86681 11.7607 7.86681C10.8476 7.86681 10.1074 7.12963 10.1074 6.22027C10.1074 5.31091 10.8476 4.57373 11.7607 4.57373C12.6738 4.57373 13.414 5.31091 13.414 6.22027Z"
          stroke={COLORS[color]}
          strokeWidth="1.2"
        />
      </g>
      <defs>
        <clipPath id="clip0_878_8025">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
