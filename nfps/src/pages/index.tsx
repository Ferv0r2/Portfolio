import React from "react";
import { NextPage } from "next/types";

/* Component */
import { Carousel } from "components/slider/Carousel";
import { MainCard } from "components/card/MainCard";
import { Product } from "components/card/ProductCard";
import { AutoImage } from "utils";

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-zinc-50 dark:bg-dark-600">
      <Carousel />
      <div className="max-w-[1200px] mx-auto pt-28 pb-40">
        <div className="flex items-center">
          <h2 className="text-2xl font-bold mr-4">인기있는 프로젝트</h2>
          <div className="relative w-8 h-8">
            <AutoImage src="/media/icons/arrow-right.svg" alt="more" />
          </div>
        </div>
        <div className="grid gap-10 grid-cols-2 mt-10">
          {productItems.map((v: Product, i) => (
            <MainCard
              key={v.title}
              keyID={i}
              title={v.title}
              content={v.content}
              imgURI={v.imgURI}
              name={v.name}
              creator={v.creator}
              progress={v.progress}
              amount={v.amount}
              expired={v.expired}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

const productItems: Product[] = [
  {
    keyID: 1,
    imgURI: "/dummy/imco.jpg",
    title: "IMCO",
    content: "온체인 프로젝트의 마케팅을 돕기위해 제작된 IMC 솔루션 입니다.",
    name: "Orbit",
    creator: "0x12A60872B053C009452cdb95178144c8fFbDeA4D",
    progress: 213,
    amount: 4342,
    expired: 12212,
  },
  {
    keyID: 2,
    imgURI: "/dummy/discord.jpg",
    title: "Discord Bot",
    content: "온체인과 연결된 디스코드봇 입니다.",
    name: "Orbit",
    creator: "0x12A60872B053C009452cdb95178144c8fFbDeA4D",
    progress: 1874,
    amount: 23421,
    expired: 11212,
  },
  {
    keyID: 3,
    imgURI: "/dummy/cc2e.jpg",
    title: "CC2E",
    content:
      "유저들과 광고 이용자에게 가치있는 토크노믹스를 제공하는 커뮤니티 입니다.",
    name: "Orbit",
    creator: "0x12A60872B053C009452cdb95178144c8fFbDeA4D",
    progress: 98,
    amount: 2342,
    expired: 13212,
  },
  {
    keyID: 4,
    imgURI: "/dummy/mtor.jpg",
    title: "MTOR",
    content: "메타오니어팀에서 발행될 토큰입니다.",
    name: "Orbit",
    creator: "0x12A60872B053C009452cdb95178144c8fFbDeA4D",
    progress: 87,
    amount: 1567,
    expired: 14212,
  },
];

export default Home;
