import React from "react";
import Link from "next/link";

interface Props {
  img: string;
  title: string;
  description: string;
  url: string;
}

export const ArticleCard = ({ img, title, description, url }: Props) => {
  return (
    <div className="group">
      <figure className="relative">
        <div className="group-hover:opacity-100 duration-300 absolute transition-opacity opacity-0 inset-0 flex flex-col item-center justify-center bg-black/75 z-10 rounded-lg">
          <Link className="cursor-pointer" href={url}>
            <div className="flex justify-center">
              <span className="px-4 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-lg text-gray-100 transition-colors duration-300">
                See more
              </span>
            </div>
          </Link>
        </div>
        <img
          src={img || ""}
          alt={title}
          className="w-full h-64 object-cover object-center rounded-lg border shadow-lg"
        />
      </figure>
      <h3 className="relative inline-flex text-xl font-bold mb-2 mt-4">
        {title}
        <span className="absolute inset-x-0 -bottom-1 h-1 transform scale-x-0 origin-left bg-indigo-600  group-hover:scale-x-100 transition-transform" />
      </h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
    </div>
  );
};
