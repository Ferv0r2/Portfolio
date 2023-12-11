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
    <div>
      <img
        src={img}
        alt={title}
        className="w-full h-64 object-cover object-center rounded-lg"
        height="400"
        style={{
          aspectRatio: "600/400",
          objectFit: "cover",
        }}
        width="600"
      />
      <h3 className="text-xl font-bold mb-2 mt-4">{title}</h3>
      <p className="text-zinc-500 dark:text-zinc-400">{description}</p>
      <Link className="text-blue-500 hover:text-blue-700 mt-4" href={url}>
        See More
      </Link>
    </div>
  );
};
