"use client";

import React, { useState } from "react";

import { MasterLayout } from "@/layout/MasterLayout";

import { MiningSlider } from "@/components/MiningSlider";
import { MiningModal } from "@/components/MiningModal";

export default function Mining() {
  const [pickId, setPick] = useState<number>(0);
  const [pickCnt, setPickCnt] = useState<number[]>([5, 5, 5]);
  const [stone, setStone] = useState(35);
  const [stoneCnt, setStoneCnt] = useState(0);
  const [modal, setModal] = useState(false);

  const gachaId = () => {
    let pointer = 35;
    let counter = 0;

    const itemGacha = Math.random() * 100; // 0 ~ 99 실수
    const itemNum = Math.floor(Math.random() * 5) + 30; // 0 ~ 4

    if (pickId === 2) {
      if (itemGacha < 0.8) {
        pointer = itemNum;
        counter = 3;
      } else if (itemGacha < 10.4) {
        pointer = itemNum;
        counter = 2;
      } else if (itemGacha < 48.8) {
        pointer = itemNum;
        counter = 1;
      }
    } else if (pickId === 1) {
      if (itemGacha < 4) {
        pointer = itemNum;
        counter = 2;
      } else if (itemGacha < 32) {
        pointer = itemNum;
        counter = 1;
      }
    } else if (pickId === 0) {
      if (itemGacha < 20) {
        pointer = itemNum;
        counter = 1;
      }
    }

    return [pointer, counter];
  };

  const sendTxItem = async () => {
    if (pickCnt[pickId] === 0) {
      alert("곡괭이가 부족합니다.");
      return;
    }

    const itemCode = gachaId();
    const used = [...pickCnt];
    used[pickId]--;

    setStone(itemCode[0]);
    setStoneCnt(itemCode[1]);
    setPickCnt(used);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <MasterLayout bgType="bg-miningBg">
      <div className="max-w-4xl mx-auto min-h-screen text-white text-center font-GmarketSansMedium">
        <img
          className="w-full sm:w-10/12 mx-auto"
          src="media/banners/mining_banner.png"
        />
        <img
          className="w-11/12 sm:w-8/12 -mt-5 mx-auto"
          src="media/video/mining.png"
        />

        {modal && (
          <MiningModal
            pickId={pickId}
            stone={stone}
            stoneCnt={stoneCnt}
            close={closeModal}
          />
        )}
        <div className="py-8 w-40 mx-auto">
          <div
            className="rounded-2xl py-3 text-lg font-GmarketSansBold cursor-pointer  bg-miningBtnBg hover:bg-miningBtnHover"
            onClick={sendTxItem}
          >
            START
          </div>
        </div>
        <p className="text-sm sm:text-base p-6">
          아래에 가지고 있는 곡괭이를 선택 후 "START" 버튼을 눌러 믹스스톤을
          채굴해주세요
        </p>
        <div className="pb-16">
          <MiningSlider setPick={setPick} />
          <p className="py-5">남은 수량 : {pickCnt[pickId]}개</p>
        </div>
      </div>
    </MasterLayout>
  );
}
