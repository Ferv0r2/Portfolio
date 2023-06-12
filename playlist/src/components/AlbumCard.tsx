import React from "react";
import { v1 } from "uuid";
import { AutoImage, AutoSVG } from "@/utils";

interface Props {
  img: string;
  title: string;
  keyword: string[];
}

export const AlbumCard = ({ img, title, keyword }: Props) => {
  return (
    <div className="group cursor-pointer">
      <figure className="relative w-64 h-64 rounded-lg overflow-hidden">
        <AutoImage src={`/media/img/${img}.png`} alt={title} />
        <div className="absolute w-64 h-64 bg-black opacity-0 transition-opacity group-hover:opacity-50 duration-300" />
      </figure>
      <div className="py-4">
        <h2 className="text-slate-300 font-bold text-lg">{title}</h2>
        <p className="pt-2 text-gray-400">
          {keyword.map((v) => (
            <label key={v1()}>#{v} </label>
          ))}
        </p>
      </div>
    </div>
  );
};
