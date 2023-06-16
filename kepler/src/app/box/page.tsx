"use client";

import React, { useState } from "react";
import { v1 } from "uuid";

import { MasterLayout } from "@/layout/MasterLayout";
import { BoxSlider } from "@/components/BoxSlider";
import { BoxModal } from "@/components/BoxModal";
import { AutoImage, probData } from "@/utils";

export default function Box() {
  const [boxId, setBoxId] = useState<number>(0);
  const [key, setKey] = useState<number[]>([5, 5, 5]);
  const [item, setItem] = useState<number>(20);
  const [modal, setModal] = useState<boolean>(false);

  const gachaId = () => {
    const itemGacha = Math.random() * 100; // 0 ~ 99 실수
    const itemNum = Math.floor(Math.random() * 5); // 0 ~ 4

    const largeP = probData.large_potion[boxId] * 5;
    const largeMP = probData.large_mix_potion[boxId] * 5 + largeP;
    const mediumP = probData.medium_potion[boxId] * 5 + largeMP;
    const mediumMP = probData.medium_mix_potion[boxId] * 5 + mediumP;
    const smallP = probData.small_potion[boxId] * 5 + mediumMP;
    const smallMP = probData.small_mix_potion[boxId] * 5 + smallP;
    const stoneM = probData.stone[boxId] * 5 + smallMP;
    const pickA = probData.low_pickaxe[boxId] + stoneM;
    const pickB = probData.intermediate_pickaxe[boxId] + pickA;
    const pickC = probData.advanced_pickaxe[boxId] + pickB;

    let pointer = 0;
    if (itemGacha < largeP) {
      pointer = itemNum;
    } else if (itemGacha < largeMP) {
      pointer = itemNum + 5;
    } else if (itemGacha < mediumP) {
      pointer = itemNum + 10;
    } else if (itemGacha < mediumMP) {
      pointer = itemNum + 15;
    } else if (itemGacha < smallP) {
      pointer = itemNum + 20;
    } else if (itemGacha < smallMP) {
      pointer = itemNum + 25;
    } else if (itemGacha < stoneM) {
      pointer = itemNum + 30;
    } else if (itemGacha < pickA) {
      pointer = 36;
    } else if (itemGacha < pickB) {
      pointer = 37;
    } else if (itemGacha < pickC) {
      pointer = 38;
    }

    return pointer;
  };

  const sendTxKey = () => {
    if (key[boxId] === 0) {
      alert("열쇠가 부족합니다.");
      return;
    }

    const itemCode = gachaId();
    const used = [...key];
    used[boxId]--;

    setKey(used);
    setItem(itemCode);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const rank = ["Normal", "Rare", "Unique"];
  const potionSize = [
    {
      label: "대형",
      data: probData.large_potion[boxId],
      mix: probData.large_mix_potion[boxId],
    },
    {
      label: "중형",
      data: probData.medium_potion[boxId],
      mix: probData.medium_mix_potion[boxId],
    },
    {
      label: "소형",
      data: probData.small_potion[boxId],
      mix: probData.small_mix_potion[boxId],
    },
  ];
  const rankPick = [
    {
      label: "상급",
      data: probData.advanced_pickaxe[boxId],
    },
    {
      label: "중급",
      data: probData.intermediate_pickaxe[boxId],
    },
    {
      label: "하급",
      data: probData.low_pickaxe[boxId],
    },
  ];

  return (
    <MasterLayout bgType="bg-gradient-to-b from-boxTop to-boxBottom">
      <main className="min-h-screen max-w-4xl mx-auto text-white">
        {modal && <BoxModal boxId={boxId} item={item} close={closeModal} />}
        <BoxSlider setBoxId={setBoxId} />

        <div className="pt-20 pb-14 w-40 mx-auto">
          <div
            className="bg-gradient-to-b from-btnTop to-btnBottom text-center px-6 py-4 rounded-2xl cursor-pointer hover:from-white hover:to-white hover:text-btnTop"
            onClick={sendTxKey}
          >
            <p className="text-xl font-NanumSqureBold font-bold">OPEN BOX</p>
          </div>
        </div>
        <div className="w-9/12 mx-auto">
          <div className="block sm:flex px-5 py-10 bg-areaPurple rounded-3xl font-bold font-GmarketSansMedium text-center">
            {rank.map((v, i) => (
              <div key={v1()} className="w-6/12 sm:w-4/12 mx-auto">
                <p>{v} Key</p>
                <div className="pb-4 sm:pb-0 flex items-center justify-center m-4">
                  <figure className="relative w-8 h-8">
                    <AutoImage src={`media/items/K${i + 1}.png`} alt="key" />
                  </figure>
                  <p className="italic">{key[i]}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-sm sm:text-base py-10 font-GmarketSansMedium text-center">
          <p className="py-3">박스별로 사용되는 열쇠가 다릅니다</p>
          <p>선택된 박스에 따라 아래 확률 표가 설정됩니다</p>
        </div>
        <div className="pb-24 font-NanumSquareBold">
          <div className="w-10/12 mx-auto bg-tableBg p-3 sm:p-8">
            <div className="font-GmarketSansLight border-b-4 border-bar py-6 text-center text-2xl sm:text-3xl">
              <p className="text-tableTitle font-bold">Percentage Table</p>
            </div>
            <div className="w-full p-2 pt-4 sm:p-8">
              <div className="flex">
                <div className="w-full text-center">
                  <p className="text-lg sm:text-2xl pb-2 font-GmarketSansMedium ">
                    기존 포션
                  </p>
                  <div className="text-tableText">
                    {potionSize.map((v) => (
                      <div className="block sm:flex" key={v.label}>
                        <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 mx-auto">
                          {v.label} 5종류 각 {v.data}%
                        </p>
                        <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 mx-auto">
                          총 {v.data * 5}%
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full text-center">
                  <p className="text-lg sm:text-2xl pb-2 font-GmarketSansMedium ">
                    믹스종 포션
                  </p>
                  <div className="text-tableText">
                    {potionSize.map((v) => (
                      <div className="block sm:flex" key={v.label}>
                        <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 mx-auto">
                          {v.label} 5종류 각 {v.mix}%
                        </p>
                        <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 mx-auto">
                          총 {v.mix * 5}%
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex pt-6 sm:pt-20">
                <div className="w-full text-center">
                  <p className="text-lg sm:text-2xl pb-2 font-GmarketSansMedium">
                    곡괭이
                  </p>
                  <div className="text-tableText">
                    {rankPick.map((v) => (
                      <div className="block sm:flex" key={v.label}>
                        <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 mx-auto">
                          {v.label} 곡괭이
                        </p>
                        <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 mx-auto">
                          총 {v.data}%
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="w-full text-center">
                  <p className="text-lg sm:text-2xl pb-2 font-GmarketSansMedium ">
                    믹스 스톤
                  </p>
                  <div className="text-tableText">
                    <div className="block sm:flex">
                      <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 mx-auto">
                        믹스 스톤 각 {probData.stone[boxId]}%
                      </p>
                      <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 mx-auto">
                        총 {probData.stone[boxId] * 5}%
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MasterLayout>
  );
}
