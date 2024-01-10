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
      <figure className="relative overflow-hidden rounded-lg border shadow-lg">
        <img
          src={img || ""}
          alt={title}
          className="w-full h-64 object-cover object-center trnasition-transform duration-300 group-hover:scale-110"
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
