import { ReactNode } from "react";

interface IItemDisplayInformationProps {
  content?: string;
  icon?: ReactNode;
  title?: string;
}

export default function ItemDisplayInformation({
  content,
  title,
  icon,
}: IItemDisplayInformationProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="bg-[#424242] flex justify-center items-center size-9 rounded-full">
        {icon}
      </div>
      <div className="flex flex-col justify-start ">
        <h3 className="text-white-primary text font-semibold text-lg font-shabnam">
          {content}
        </h3>
        <p className="text-xs text-white-primary">{title}</p>
      </div>
    </div>
  );
}
