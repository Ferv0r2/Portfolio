"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { govContract } from "@/blockchain";

import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { accountState } from "@/stores";

const Governance = () => {
  const account = useRecoilValue(accountState);
  const [proposalArray, setProposals] = useState<string[]>([]);
  const [section, setSection] = useState(0);
  const [status, setStatus] = useState(0);

  return (
    <div className="max-w-4xl m-auto min-h-screen text-white text-center font-GmarketSansMedium">
      <div className="relative">
        <img
          className="w-11/12 sm:w-10/12 m-auto"
          src="media/icons/gov_icon.png"
        />
        <div className="absolute italic text-shadow-purple text-center font-bold transform top-16 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <p className="text-3xl py-3">Kepler-452b</p>
          <p className="text-4xl py-3">GOVERNANCE</p>
        </div>
      </div>
      <div className="pb-12 italic">
        <Link href="/proposal">
          <div className="w-1/4 m-auto rounded-3xl -mt-6 p-3 text-xl font-GmarketSansBold cursor-pointer bg-govBtn">
            제안 작성하기
          </div>
        </Link>
      </div>
      <div className="KeplerGovernancePage__main">
        <div className="italic">
          <p>
            케플러 식물 NFT를 소유중이라면 투표를 진행하고 제안을 작성할 수
            있습니다.
          </p>
          <p className="py-2">
            더 나은 Kepler-452b 프로젝트를 위해 여러분의 의견을 보여주세요
          </p>
        </div>
        <div className="py-12 text-lg italic">
          <div className="text-2xl font-bold">LIST</div>
          <div className="py-6">
            <div className="flex w-9/12 m-auto bg-govBtn p-6 rounded-2xl items-center justify-center text-center">
              <div className="w-1/12 m-auto">
                {/* <ul>{ids}</ul> */}
                <ul>{0}</ul>
              </div>
              <div className="w-9/12 m-auto border-r-2">
                {/* <ul className="w-11/12 m-auto">{titles}</ul> */}
                <ul className="w-11/12 m-auto">{"제목입니다."}</ul>
              </div>
              <div className="w-2/12 m-auto">
                {/* <ul>{stats}</ul> */}
                <ul>{"상태"}</ul>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-2/3 sm:w-1/3 py-8 m-auto items-center">
          <span className="w-1/4 cursor-pointer" onClick={() => {}}>
            <img
              className="w-1/2 rounded-md p-1 m-auto"
              src="media/icons/gov_prev.png"
            />
          </span>
          <p className="w-1/2 text-xl">{section + 1}</p>
          <span className="w-1/4 cursor-pointer" onClick={() => {}}>
            <img
              className="w-1/2 rounded-md p-1 m-auto"
              src="media/icons/gov_next.png"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Governance;
