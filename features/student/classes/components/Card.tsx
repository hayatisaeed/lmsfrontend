import {  NotebookBookmark } from "@/assets/icons";
import Image from "next/image";
import Link from "next/link";

interface ICardProps {
  image?: string;
  name?: string;
  tags?: string[];
  link: string;
}

export default function Card({ image, name, tags, link }: ICardProps) {
  return (
    <Link
      href={link}
      className="w-full h-full bg-box-primary rounded-2xl p-3 flex flex-col gap-4"
    >
      <Image
        src={image || "/images/class.png"}
        width={200}
        height={60}
        alt="class"
        className="object-contain w-full rounded-2xl"
      />
      <div className="w-full flex justify-between items-center">
        <div className="flex items-center justify-center gap-2">
          <div className="p-2 rounded-full bg-white-primary">
            <NotebookBookmark color="DARK" size="SM" />
          </div>
          <h3>{name}</h3>
        </div>
        {/* <button
          type="button"
          className="bg-transparent border-0 outline-0 text-lg"
        >
          ...
        </button> */}
      </div>
      <div className="flex gap-2 flex-wrap mb-3">
        {tags?.map((tag, index) => (
          <h3
            key={index}
            className="bg-white-primary py-1 px-2 rounded-md text-[13px]"
          >
            #{tag}
          </h3>
        ))}
      </div>
    </Link>
  );
}
