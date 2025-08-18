//clsx
import clsx from "clsx";

//types
import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  title?: string;
  className?: string;
  between?: ReactNode;
}

export default function Container({
  children,
  title,
  className,
  between,
}: IContainerProps) {
  return (
    <div
      className={clsx(
        "w-full flex flex-col justify-start bg-white-primary p-5  rounded-2xl gap-7 pb-7",
        className
      )}
    >
      <div className="flex justify-between gap-5  items-start md:items-center flex-col md:flex-row">
        <div className="flex items-center gap-2 ">
          <div className="bg-primary w-[3px] h-4 rounded-2xl"></div>
          <h3 className="text-text-primary font-semibold ">{title}</h3>
        </div>
        {between}
      </div>
      {children}
    </div>
  );
}
