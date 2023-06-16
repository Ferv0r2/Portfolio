"use client";

import React from "react";
import Link from "next/link";
import { v1 } from "uuid";
import { useRecoilValue } from "recoil";

import { MasterLayout } from "@/layout/MasterLayout";
import { accountState } from "@/stores";
import { AutoImage, proposalData } from "@/utils";

export default function Proposal({ params }: { params: { id: number } }) {
  const account = useRecoilValue(accountState);

  const onVote = () => {
    alert("이미 마감된 제안입니다.");
  };

  return (
    <MasterLayout bgType="bg-govBg">
      <div className="max-w-3xl w-11/12 pt-6 mx-auto font-GmarketSansMedium text-[#ececec]">
        <Link href="/governance">
          <div className="relative w-48 sm:w-72 text-sm sm:text-lg hover:text-[#988bd4]">
            <figure className="relative w-48 sm:w-72 h-12">
              <AutoImage src="/media/icons/pro_prev.png" alt="back" />
            </figure>
            <p className="absolute inset-0 flex items-center justify-center">
              목록으로 돌아가기
            </p>
          </div>
        </Link>

        <div className="mt-6 mb-20 p-8 sm:p-12 rounded-2xl text-lg bg-[#06050c] whitespace-pre-wrap">
          <div className="font-GmarketSansBold text-2xl sm:text-3xl text-center p-0 sm:p-4 italic">
            {proposalData[proposalData.length - params.id]?.title || ""}
          </div>
          <div className="flex w-full sm:w-10/12 mx-auto rounded-2xl bg-[#242329] text-center my-12 font-GmarketSansMedium">
            <div className="grid grid-cols-3 p-4 w-full">
              {proposalData[proposalData.length - params.id]?.status ===
              "지향" ? (
                <>
                  <div>
                    <div>찬성</div>
                    <div className="text-emerald-600">{params.id * 1024}</div>
                  </div>
                  <div>
                    <div>반대</div>
                    <div className="text-red-400">{params.id * 153}</div>
                  </div>
                  <div>
                    <div>결과</div>
                    <div className="text-emerald-600">
                      {proposalData[proposalData.length - params.id]?.status ||
                        ""}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div>
                    <div>찬성</div>
                    <div className="text-emerald-600">{params.id * 458}</div>
                  </div>
                  <div>
                    <div>반대</div>
                    <div className="text-red-400">{params.id * 1789}</div>
                  </div>
                  <div>
                    <div>결과</div>
                    <div className="text-red-400">
                      {proposalData[proposalData.length - params.id]?.status ||
                        ""}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="text-[#ececec] pb-8 text-center">
            <h2>작성자</h2>
            <p className="mt-4 text-base truncate">{account.account}</p>
          </div>

          <div className="text-[#ececec] pb-8 min-h-[200px]">
            <h2 className="text-center">세부 내용</h2>
            <p className="mt-4 text-base leading-8 w-full sm:w-4/5 mx-auto">
              {proposalData[proposalData.length - params.id]?.content || ""}
            </p>
          </div>
          <div className="text-[#ececec] pb-8 min-h-[200px] text-center">
            <h2>요약</h2>
            <p className="mt-4 text-base leading-8">
              {proposalData[proposalData.length - params.id]?.summary || ""}
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full sm:w-2/5 mx-auto text-center text-xl font-GmarketSansBold">
            {["찬성", "반대"].map((v) => (
              <button
                key={v1()}
                onClick={onVote}
                className="bg-[#51408b] rounded-lg p-4 italic hover:text-[#988bd4]"
              >
                {v}하기
              </button>
            ))}
          </div>
          <div className="flex justify-between items-center mt-8">
            <h2>MY NFT</h2>
            <div className="w-48 bg-[#212126] text-[#afafaf] text-center font-GmarketSansMedium p-2 rounded-lg">
              <p>수량: 30개</p>
            </div>
          </div>
          <div className="scroll grid grid-cols-2 sm:grid-cols-5 gap-8 mt-8 h-40 overflow-y-scroll">
            {[...Array(30)].map((_, i) => (
              <figure key={v1()} className="relative w-24 h-24 mx-auto">
                <AutoImage
                  src={`/media/nft/${String(i + 1).padStart(2, "0")}.png`}
                  alt={`nft${i + 1}`}
                />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </MasterLayout>
  );
}
