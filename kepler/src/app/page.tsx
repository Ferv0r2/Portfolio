"use client";

import React from "react";
import Link from "next/link";
import { v1 } from "uuid";

import { MasterLayout } from "@/layout/MasterLayout";
import { AutoImage, navData } from "@/utils";

export default function Home() {
  return (
    <MasterLayout bgType="bg-main">
      <main className="min-h-screen max-w-3xl mx-auto">
        <figure className="relative w-80 h-64 sm:w-128 sm:h-108 mx-auto">
          <AutoImage src="/media/banners/main_banner.png" alt="banner" />
        </figure>
        <div className="max-w-xl md:max-w-2xl mx-auto text-center grid grid-cols-1 gap-y-4 sm:grid-cols-2 text-base md:text-lg text-lightGray items-center font-GmarketSansMedium italic">
          {navData.map((v) => (
            <Link key={v1()} href={v.link}>
              <div className="w-11/12 mx-auto items-center">
                <div className="px-4 py-2 cursor-pointer hover:text-hoverPink">
                  <p className="w-full mx-auto py-4 px-3 border-4 border-gray-100 rounded">
                    {v.name}
                  </p>
                </div>
              </div>
            </Link>
          ))}
          <div className="col-span-1 sm:col-span-2 grid grid-cols-1 sm:grid-cols-2 w-10/12 mx-auto text-sm sm:text-base my-4">
            <div className="w-full pb-5 text-center">
              <p>More Information?</p>
            </div>
            <div className="w-full pb-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.kepler.wontae.site/"
                className="flex underline underline-offset-4 justify-center items-center hover:text-hoverPink"
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
