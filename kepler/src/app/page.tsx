"use client";

import React, { useEffect } from "react";
import Link from "next/link";

import { useSetRecoilState } from "recoil";
import { bgState } from "@/stores";
import { MasterLayout } from "@/layout/MasterLayout";
import { AutoImage } from "@/utils";

export default function Home() {
  const setBg = useSetRecoilState(bgState);

  useEffect(() => {
    setBg("bg-main");
  }, []);

  const category = ["Today's Evolution", "Random Box", "Mining", "Goldot Shop"];
  const link = ["/evolution", "/box", "/mining", "/shop"];

  return (
    <MasterLayout>
      <main className="min-h-screen max-w-3xl m-auto">
        <div className="w-80 h-64 sm:w-128 sm:h-108 m-auto">
          <img src="/media/banners/main_banner.png" />
        </div>
        <div className="max-w-xl md:max-w-2xl m-auto text-center grid grid-cols-1 gap-y-4 sm:grid-cols-2 text-base md:text-lg text-light_gray items-center font-GmarketSansMedium italic">
          {category.map((v, i) => (
            <Link href={link[i]}>
              <div className="w-11/12 mx-auto items-center">
                <div className="px-8 py-2 cursor-pointer hover:text-hover_pink">
                  <p className="w-full mx-auto py-4 px-3 border-4 border-gray-100 rounded">
                    {v}
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
