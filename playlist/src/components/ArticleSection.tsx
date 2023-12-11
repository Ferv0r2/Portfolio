import React from "react";
import { ArticleCard } from "./ArticleCard";
import { useInView } from "react-intersection-observer";
import clsx from "clsx";

interface Props {
  title: string;
  data: {
    img: string;
    title: string;
    description: string;
    url: string;
  }[];
}

const delays = ["", "delay-150", "delay-300"];

export const ArticleSection = ({ title, data }: Props) => {
  const [ref, inView] = useInView({
    threshold: 0.5,
    triggerOnce: false,
  });

  return (
    <section className="w-full">
      <main className="container mx-auto px-4 md:px-6 py-8">
        <section className="mb-8">
          <h2 className="text-2xl font-bold mb-4">{title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {data.map((article, index) => (
              <div
                ref={ref}
                className={clsx(
                  `${
                    inView ? "animate-fade-in-up" : "translate-y-20 opacity-20"
                  } transition-all duration-1000`,
                  delays[index]
                )}
              >
                <ArticleCard
                  img={article.img}
                  title={article.title}
                  description={article.description}
                  url={article.url}
                />
              </div>
            ))}
          </div>
        </section>
      </main>
    </section>
  );
};
