"use client";

import React, { useState } from "react";
import Link from "next/link";
import clsx from "clsx";
import { v1 } from "uuid";

import { MasterLayout } from "@/layout/MasterLayout";
import { AutoImage, proposalData } from "@/utils";

const Governance = () => {
  const [section, setSection] = useState(0);

  const prevSlide = () => {
    if (section !== 0) {
      setSection(section - 1);
    } else {
      alert("첫 페이지 입니다.");
    }
  };

  const nextSlide = () => {
    if (section !== Math.ceil(proposalData.length / 5) - 1) {
      setSection(section + 1);
    } else {
      alert("마지막 페이지 입니다.");
    }
  };

  return (
    <MasterLayout bgType="bg-govBg">
      <main className="max-w-4xl mx-auto min-h-screen text-white text-center font-GmarketSansMedium">
        <div className="relative mt-8">
          <img
            className="w-11/12 sm:w-3/4 mx-auto"
            src="media/banners/gov_banner.png"
          />
          <div className="absolute inset-x-0 flex-col italic text-shadow-purple font-bold top-0">
            <p className="text-xl sm:text-3xl py-0 sm:py-3">Kepler-452b</p>
            <p className="text-2xl sm:text-4xl py-3">GOVERNANCE</p>
          </div>
        </div>
        <div className="pb-12">
          <button
            onClick={() => alert("현재는 제안을 생성할 수 없습니다.")}
            className="flex w-3/5 sm:w-1/4 mx-auto rounded-2xl justify-center -mt-6 p-3 text-lg sm:text-xl font-GmarketSansBold hover:text-[#988bd4] bg-govBtn"
          >
            제안 작성하기
          </button>
        </div>
        <div>
          <div className="italic w-10/12 mx-auto text-sm sm:text-base">
            <p>
              케플러 식물 NFT를 소유중이라면 투표를 진행하고 제안을 작성할 수
              있습니다.
            </p>
            <p className="py-2">
              더 나은 Kepler-452b 프로젝트를 위해 여러분의 의견을 보여주세요
            </p>
          </div>
          <div className="py-8 text-lg italic">
            <div className="py-3 text-2xl font-bold">LIST</div>
            <div className="w-11/12 sm:w-9/12 mx-auto bg-govBtn p-4 rounded-2xl items-center justify-center text-center">
              {proposalData
                .slice(section * 5, (section + 1) * 5)
                .map((v, i) => (
                  <Link
                    key={v1()}
                    href={`/governance/${
                      proposalData.length - (section * 5 + i)
                    }`}
                  >
                    <div className="grid grid-cols-9 p-2 text-sm sm:text-lg cursor-pointer hover:text-hoverPink">
                      <div className="">
                        {proposalData.length - (section * 5 + i)}
                      </div>
                      <div className="col-span-6 w-10/12 mx-auto truncate">
                        {v.title}
                      </div>
                      <div
                        className={clsx(
                          v.status === "지향"
                            ? "text-emerald-600"
                            : "text-red-400",
                          "col-span-2 sm:col-span-2 border-l-2"
                        )}
                      >
                        {v.status}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </div>
          <div className="flex pb-20 w-2/3 sm:w-1/3 mx-auto items-center">
            <button className="w-1/4" onClick={prevSlide}>
              <figure className="relative w-6 h-6 mx-auto">
                <AutoImage src="media/icons/gov_prev.png" alt="prev" />
              </figure>
            </button>
            <p className="w-1/2 text-xl">{section + 1}</p>
            <button className="w-1/4" onClick={nextSlide}>
              <figure className="relative w-6 h-6 mx-auto">
                <AutoImage src="media/icons/gov_next.png" alt="prev" />
              </figure>
            </button>
          </div>
        </div>
      </main>
    </MasterLayout>
  );
};

export default Governance;
