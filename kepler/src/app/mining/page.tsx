"use client";

import React, { useState, useEffect } from "react";
// import { itemContract, miningContract } from "@/blockchain";

import { MiningSlider } from "@/components/MiningSlider";
import { MiningModal } from "@/components/MiningModal";
import { Loading } from "@/components/Loading";

import { useSetRecoilState, useRecoilValue } from "recoil";
import { bgState, accountState, balanceState, pickIdState } from "@/stores";

export default function Mining() {
  const setBg = useSetRecoilState(bgState);
  const account = useRecoilValue(accountState);
  const balance = useRecoilValue(balanceState);
  const pickId = useRecoilValue(pickIdState);
  const [isLoading, setLoading] = useState(true);
  const [pick, setPick] = useState(0);
  const [stone, setStone] = useState(35);
  const [isCount, setCount] = useState(0);
  const [isBreak, setBreak] = useState(1);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setBg("bg-miningBg");
    getPick();
  }, []);

  useEffect(() => {
    if (isLoading) getPick();
  });

  const getPick = async () => {
    if (account === "") return;

    // const pickaxe = await itemContract.methods
    //   .balanceOf(account, 36 + pickId)
    //   .call();

    // setPick(pickaxe);
    setLoading(false);
  };

  const gachaId = async () => {
    let pointer = 35;
    let counter = 0;
    let status = 1;

    const destruct = Math.random() * 100; // 0 ~ 99 실수

    const itemGacha = Math.random() * 100; // 0 ~ 99 실수
    const itemNum = Math.floor(Math.random() * 5) + 30; // 0 ~ 4

    if (pickId === 2) {
      if (destruct < 40) {
        status = 0;
      }
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
      if (destruct < 55) {
        status = 0;
      }
      if (itemGacha < 4) {
        pointer = itemNum;
        counter = 2;
      } else if (itemGacha < 32) {
        pointer = itemNum;
        counter = 1;
      }
    } else if (pickId === 0) {
      if (destruct < 70) {
        status = 0;
      }
      if (itemGacha < 20) {
        pointer = itemNum;
        counter = 1;
      }
    } else {
      console.log("error");
    }

    setStone(pointer);
    setCount(counter);
    setBreak(status);
  };

  const sendTxUse = async () => {
    await gachaId();
  };

  const sendTxItem = async () => {
    if (balance < 2) {
      alert("2 Klay 이상 소유해야 합니다 :)");
      return;
    }

    if (pick === 0) {
      alert("곡괭이가 없습니다.");
      return;
    }

    // const payer = await miningContract.methods.payers(pickId, account).call();

    // if (!payer) await sendTxUse();

    // const gacha = await miningContract.methods.gachas(pickId, account).call();

    // getPick();
    // setStone(gacha[0]);
    // setCount(gacha[1]);
    setModal(true);
  };

  const closeModal = () => {
    if (isBreak === 1) {
      alert("곡괭이는 무사합니다!");
    } else {
      alert("곡괭이가 파괴되었습니다..");
    }
    setModal(false);
  };

  if (isLoading) return <Loading />;

  return (
    <div className="max-w-4xl m-auto min-h-screen text-white text-center font-GmarketSansMedium">
      <img
        className="w-full sm:w-10/12 m-auto"
        src="images/mining/mining_banner.png"
      />
      <img className="w-11/12 sm:w-8/12 -mt-5 m-auto" src="video/mining.png" />

      <MiningModal
        open={modal}
        pickId={pickId}
        stone={stone}
        close={closeModal}
        isCount={isCount}
      />
      <div className="py-8 w-40 m-auto">
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
        <MiningSlider />
        <p className="py-5">남은 수량 : {pick}개</p>
      </div>
    </div>
  );
}
