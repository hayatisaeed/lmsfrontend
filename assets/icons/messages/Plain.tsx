//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface IPlainProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function Plain({ color = "DARK", size = "MD" }: IPlainProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_878_8054)">
        <path
          d="M15.5301 13.0585L16.9604 8.76741C18.21 5.01876 18.8348 3.14443 17.8454 2.15504C16.856 1.16565 14.9816 1.79043 11.233 3.03998L6.94188 4.47035C3.91635 5.47886 2.40359 5.98311 1.97371 6.72257C1.56475 7.42602 1.56475 8.29482 1.97371 8.99827C2.40359 9.73773 3.91635 10.242 6.94188 11.2505C7.42768 11.4124 7.67057 11.4934 7.8736 11.6293C8.07036 11.761 8.23938 11.93 8.3711 12.1268C8.50702 12.3298 8.58799 12.5727 8.74992 13.0585C9.75842 16.084 10.2627 17.5968 11.0021 18.0267C11.7056 18.4357 12.5744 18.4357 13.2778 18.0267C14.0173 17.5968 14.5216 16.084 15.5301 13.0585Z"
          stroke={COLORS[color]}
          strokeWidth="1.5"
        />
        <path
          d="M13.5978 7.46256C13.8923 7.1713 13.8949 6.69643 13.6037 6.40192C13.3124 6.10741 12.8375 6.10478 12.543 6.39604L13.5978 7.46256ZM8.44629 11.5024L8.97367 12.0357L13.5978 7.46256L13.0704 6.9293L12.543 6.39604L7.91891 10.9692L8.44629 11.5024Z"
          fill={COLORS[color]}
        />
      </g>
      <defs>
        <clipPath id="clip0_878_8054">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
