import { ReactNode } from "react";

interface IAuthLayoutProps {
  children: ReactNode;
}

export default function AuthLayout({ children }: IAuthLayoutProps) {
  return <div>{children}</div>;
}
