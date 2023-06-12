"use client";

import React, { useState, useEffect } from "react";
// import { itemContract, boxContract } from "@/blockchain";

import { BoxSlider } from "@/components/BoxSlider";
import { BoxModal } from "@/components/BoxModal";
import { Loading } from "@/components/Loading";
import { probData } from "@/utils";

import { useRecoilValue, useSetRecoilState } from "recoil";
import { accountState, balanceState, bgState, boxIdState } from "@/stores";

export default function Box() {
  const setBg = useSetRecoilState(bgState);
  const account = useRecoilValue(accountState);
  const balance = useRecoilValue(balanceState);
  const boxId = useRecoilValue(boxIdState);
  const [isLoading, setLoading] = useState(true);
  const [key1, setKey1] = useState(0);
  const [key2, setKey2] = useState(0);
  const [key3, setKey3] = useState(0);
  const [item, setItem] = useState(20);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setBg("bg-gradient-to-b from-boxTop to-boxBottom");
    getKey();
  }, []);

  useEffect(() => {
    if (isLoading) getKey();
  });

  const getKey = async () => {
    // const getKey1 = await itemContract.methods.balanceOf(account, 39).call();
    // const getKey2 = await itemContract.methods.balanceOf(account, 40).call();
    // const getKey3 = await itemContract.methods.balanceOf(account, 41).call();

    // setKey1(getKey1);
    // setKey2(getKey2);
    // setKey3(getKey3);

    setLoading(false);
  };

  const gachaId = async () => {
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
    } else {
      console.log("error");
    }

    setItem(pointer);
  };

  const sendTxItem = async () => {
    await gachaId();
    getKey();
  };

  const sendTxKey = async () => {
    // const payer = await boxContract.methods.payers(boxId, account).call();

    // if (!payer) await sendTxItem();
    // const gacha = await boxContract.methods.gacha(boxId, account).call();

    // setItem(gacha);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="min-h-screen max-w-4xl m-auto text-white">
      <BoxSlider />

      <BoxModal open={modal} boxId={boxId} item={item} close={closeModal} />
      <div className="pt-20 pb-14 w-40 m-auto">
        <div
          className="bg-gradient-to-b from-btnTop to-btnBottom text-center px-6 py-4 rounded-2xl cursor-pointer hover:from-white hover:to-white hover:text-btnTop"
          onClick={sendTxKey}
        >
          <p className="text-xl font-NanumSqureBold font-bold">OPEN BOX</p>
        </div>
      </div>
      <div className="w-9/12 m-auto">
        <div className="block sm:flex px-5 py-10 bg-areaPurple rounded-3xl font-bold font-GmarketSansMedium text-center">
          <div className="w-6/12 sm:w-4/12 m-auto">
            <p>Normal Key</p>
            <div className="pb-4 sm:pb-0 flex items-center justify-center m-4">
              <img className="w-8" src="images/items/K1.png" />
              <p className="italic">{key1}</p>
            </div>
          </div>
          <div className="w-6/12 sm:w-4/12 m-auto">
            <p>Rare Key</p>
            <div className="pb-4 sm:pb-0 flex items-center justify-center m-4">
              <img className="w-8" src="images/items/K2.png" />
              <p className="italic">{key2}</p>
            </div>
          </div>
          <div className="w-6/12 sm:w-4/12 m-auto">
            <p>Unique Key</p>
            <div className="pb-4 sm:pb-0 flex items-center justify-center m-4">
              <img className="w-8" src="images/items/K3.png" />
              <p className="italic">{key3}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="text-sm sm:text-base py-10 font-GmarketSansMedium text-center">
        <p className="py-3">트랜잭션은 총 2번 발생합니다</p>
        <p>2 Klay 이상 소유해야 에러가 발생하지 않습니다</p>
      </div>
      <div className="pb-24 font-NanumSquareBold">
        <div className="w-10/12 m-auto bg-tableBg p-3 sm:p-8">
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
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      대형 5종류 각 {probData.large_potion[boxId]}%
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.large_potion[boxId] * 5}%
                    </p>
                  </div>
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      중형 5종류 각 {probData.medium_potion[boxId]}%
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.medium_potion[boxId] * 5}%
                    </p>
                  </div>
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      소형 5종류 각 {probData.small_potion[boxId]}%
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.small_potion[boxId] * 5}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full text-center">
                <p className="text-lg sm:text-2xl pb-2 font-GmarketSansMedium ">
                  믹스종 포션
                </p>
                <div className="text-tableText">
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      대형 5종류 각 {probData.large_mix_potion[boxId]}%
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.large_mix_potion[boxId] * 5}%
                    </p>
                  </div>
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      중형 5종류 각 {probData.medium_mix_potion[boxId]}%
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.medium_mix_potion[boxId] * 5}%
                    </p>
                  </div>
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      소형 5종류 각 {probData.small_mix_potion[boxId]}%
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.small_mix_potion[boxId] * 5}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex pt-6 sm:pt-20">
              <div className="w-full text-center">
                <p className="text-lg sm:text-2xl pb-2 font-GmarketSansMedium ">
                  곡괭이
                </p>
                <div className="text-tableText">
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      상급 곡괭이
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.advanced_pickaxe[boxId]}%
                    </p>
                  </div>
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      중급 곡괭이
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.intermediate_pickaxe[boxId]}%
                    </p>
                  </div>
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      하급 곡괭이
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.low_pickaxe[boxId]}%
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full text-center">
                <p className="text-lg sm:text-2xl pb-2 font-GmarketSansMedium ">
                  믹스 스톤
                </p>
                <div className="text-tableText">
                  <div className="block sm:flex">
                    <p className="w-full sm:w-8/12 text-sm sm:text-base p-3 m-auto">
                      믹스 스톤 각 {probData.stone[boxId]}%
                    </p>
                    <p className="w-full sm:w-4/12 text-sm sm:text-base p-3 m-auto">
                      총 {probData.stone[boxId] * 5}%
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
