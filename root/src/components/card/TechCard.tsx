import { FC } from "react";
import { v1 } from "uuid";

interface Props {
  lang: string;
  content: string[];
}

const TechCard: FC<Props> = ({ lang, content }) => {
  return (
    <div className="pb-4">
      <div className="inline-flex items-center dark:bg-zinc-800 dark:border-zinc-500 bg-white px-3 py-2 rounded-lg rounded-b-none border border-b-0">
        <img
          className="w-8 mr-1"
          src={`images/lang/${lang.toLowerCase()}.svg`}
          alt={lang}
        />
        <h3 className="text-lg font-semibold">{lang}</h3>
      </div>

      <div className="rounded-lg rounded-tl-none dark:bg-zinc-800 dark:border-zinc-500 bg-white border p-4 sm:p-4">
        {content?.map((v) => (
          <div key={v1()} className="mt-1">
            {v}
          </div>
        ))}
      </div>
    </div>
  );
};

export { TechCard };
