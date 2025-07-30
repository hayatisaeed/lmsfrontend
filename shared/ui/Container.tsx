import { ReactNode } from "react";

interface IContainerProps {
  children: ReactNode;
  title?: string;
}

export default function Container({ children, title }: IContainerProps) {
  return (
    <div className="w-full flex flex-col justify-start bg-white-primary p-5 rounded-2xl gap-7 pb-7">
      <div className="flex justify-start items-center gap-2">
        <div className="bg-primary w-[3px] h-4 rounded-2xl"></div>
        <h3 className="text-text-primary font-semibold ">{title}</h3>
      </div>
      {children}
    </div>
  );
}
