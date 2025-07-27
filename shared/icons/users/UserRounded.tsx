//import constant
import { COLORS, SIZES } from "@/shared/constant/icons";


interface IUserRoundedProps {
  size?: keyof typeof SIZES;
  color?: keyof typeof COLORS;
}

export default function UserRounded({
  color = "DARK",
  size = "MD",
}: IUserRoundedProps) {
  return (
    <svg
      width={SIZES[size]}
      height={SIZES[size]}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="6.99984" cy="3.49996" r="2.33333" stroke={COLORS[color]} />
      <ellipse
        cx="6.99984"
        cy="9.91671"
        rx="4.08333"
        ry="2.33333"
        stroke={COLORS[color]}
      />
    </svg>
  );
}
