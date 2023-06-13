"use client";

import React from "react";
import Link from "next/link";

import { MasterLayout } from "@/layout/MasterLayout";
import { AutoImage } from "@/utils";
import { v1 } from "uuid";

export default function Home() {
  const category = [
    {
      name: "Today's Evolution",
      link: "/evolution",
    },
    {
      name: "Random Box",
      link: "/box",
    },
    {
      name: "Mining",
      link: "/mining",
    },
    {
      name: "Goldot Shop",
      link: "/shop",
    },
  ];

  return (
    <MasterLayout bgType="bg-main">
      <main className="min-h-screen max-w-3xl m-auto">
        <div className="w-80 h-64 sm:w-128 sm:h-108 m-auto">
          <img src="/media/banners/main_banner.png" />
        </div>
        <div className="max-w-xl md:max-w-2xl m-auto text-center grid grid-cols-1 gap-y-4 sm:grid-cols-2 text-base md:text-lg text-light_gray items-center font-GmarketSansMedium italic">
          {category.map((v, i) => (
            <Link key={v1()} href={v.link}>
              <div className="w-11/12 mx-auto items-center">
                <div className="px-8 py-2 cursor-pointer hover:text-hover_pink">
                  <p className="w-full mx-auto py-4 px-3 border-4 border-gray-100 rounded">
                    {v.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="col-span-1 sm:col-span-2 items-center">
            <Link href="/governance">
              <div className="w-11/12 mx-auto items-center">
                <div className="px-8 sm:px-4 py-2 cursor-pointer hover:text-hover_pink">
                  <p className="w-full m-auto py-4 px-3 border-4 border-gray-100 rounded">
                    Governance
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-span-1 sm:col-span-2 grid grido-cols-1 sm:grid-cols-2 w-10/12 items-center text-sm sm:text-base my-4">
            <div className="w-full pb-5 text-center">
              <p>More Information?</p>
            </div>
            <div className="w-full pb-5">
              <a
                href="https://docs.kepler.wontae.site/"
                className="flex justify-center items-center hover:text-hover_pink"
              >
                <p>GUIDE BOOK</p>
                <figure className="relative w-4 h-4 ml-3 mb-1">
                  <AutoImage src="/media/icons/external.png" alt="export" />
                </figure>
              </a>
            </div>
          </div>
        </div>
      </main>
    </MasterLayout>
  );
}
