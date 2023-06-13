"use client";

import React, { useState } from "react";

import { ShopModal } from "@/components/ShopModal";
import { Loading } from "@/components/Loading";

import { useRecoilState } from "recoil";
import { ShopPickaxe } from "@/components/ShopPickaxe";
import { ShopKey } from "@/components/ShopKey";
import { ShopPotion } from "@/components/ShopPotion";
import { MasterLayout } from "@/layout/MasterLayout";
import { v1 } from "uuid";

export default function Shop() {
  const [currentIdx, setIndex] = useState<number>(0);
  const [currentPotionIdx, setPotionIndex] = useState<number>(0);
  const [stone, setStone] = useState<number>(80);
  const [nft, setNFT] = useState<number>(0);
  const [tokenId1, setTokenId1] = useState<string>("");
  const [tokenId2, setTokenId2] = useState<string>("");
  const [tokenId3, setTokenId3] = useState<string>("");
  const [tokenURI, setTokenURI] = useState<string[]>([]);
  const [level, setLevel] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  const sendTx = async (lv: number) => {
    alert("스톤 거래 완료!");
  };

  const sendTxUp = async (lv: number) => {
    alert("포션 업그레이드 완료!");
  };

  const sendTxMix = async (lv: number) => {
    alert("포션 믹스 완료!");
  };

  const sendTxNFT = async () => {
    const tokenArray = [];
    if (level === 0) {
      tokenArray.push(tokenId1);
    } else if (level === 1) {
      tokenArray.push(tokenId1);
      tokenArray.push(tokenId2);
    } else if (level === 2) {
      tokenArray.push(tokenId1);
      tokenArray.push(tokenId2);
      tokenArray.push(tokenId3);
    } else {
      console.log("error");
    }

    alert("열쇠 거래 완료!");

    setTokenId1("");
    setTokenId2("");
    setTokenId3("");
    setModal(false);
  };

  const setOpen = async (lv: number) => {
    setLevel(lv);
    setModal(true);
  };

  const closeModal = () => {
    setModal(false);
  };

  const prevSlide = () => {
    if (currentIdx !== 0) {
      setIndex(currentIdx - 1);
    } else {
      alert("첫 페이지 입니다.");
    }
  };

  const nextSlide = () => {
    const slideCount = 3;
    if (currentIdx !== slideCount - 1) {
      setIndex(currentIdx + 1);
    } else {
      alert("마지막 페이지 입니다.");
    }
  };

  const prevPotionSlide = () => {
    if (currentPotionIdx !== 0) {
      setPotionIndex(currentPotionIdx - 1);
    }
  };

  const nextPotionSlide = () => {
    const slideCount = 5;
    if (currentPotionIdx !== slideCount - 1) {
      setPotionIndex(currentPotionIdx + 1);
    }
  };

  const sell_item = ["곡괭이 교환", "열쇠 교환", "포션 교환"];

  return (
    <MasterLayout bgType="bg-black">
      <div className="min-h-screen max-w-2xl mx-auto text-white font-GmarketSansMedium">
        <img
          className="w-11/12 sm:w-full mx-auto"
          src="media/logos/shop_logo.png"
        />
        <p className="text-center text-xl sm:text-2xl pt-4 pb-12">
          골닷 상점에 오신 걸 환영합니다
        </p>
        <img
          className="w-10/12 sm:w-full mx-auto"
          src="media/banners/shop_banner.png"
        />
        <div className="w-10/12 sm:w-full m-auto border-2 shadow-custom">
          <div className="relative w-full sm:w-8/12 m-auto">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="media/banners/shop_title.png"
            />
          </div>

          {currentIdx == 0 && (
            <div className="py-16 text-center">
              <ShopPickaxe id={0} sendTx={(e) => sendTx(0)} />
              <ShopPickaxe id={1} sendTx={(e) => sendTx(1)} />
              <ShopPickaxe id={2} sendTx={(e) => sendTx(2)} />
              <div className="block sm:flex w-2/3 sm:w-1/2 m-auto text-center items-center pt-8">
                <p className="w-full sm:w-9/12 pb-8 sm:pb-0 m-auto text-lg sm:text-2xl">
                  남은 빛바랜 스톤 갯수
                </p>
                <p className="w-full sm:w-3/12 m-auto text-4xl">{stone}</p>
              </div>
            </div>
          )}
          {currentIdx == 1 && (
            <div className="py-16 text-center">
              {[...Array(3)].map((_, i) => (
                <ShopKey
                  key={v1()}
                  id={i}
                  inputs={[]}
                  nums={[]}
                  setOpen={() => {}}
                />
              ))}

              <div className="block sm:flex w-1/2 m-auto text-center items-center pt-8">
                <p className="w-full sm:w-7/12 m-auto pb-6 sm:pb-0 text-lg sm:text-2xl">
                  남은 NFT 갯수
                </p>
                <p className="w-full sm:w-5/12 m-auto text-2xl sm:text-4xl">
                  {nft}
                </p>
              </div>
            </div>
          )}
          {currentIdx == 2 && (
            <div className="relative py-16 text-center">
              <div className="w-10/12 sm:w-5/12 m-auto bg-shopItem p-4 items-center rounded-lg z-3">
                <p className="pb-3">현재 보고 있는 종</p>
                <div className="flex w-1/2 sm:w-1/3 m-auto items-center">
                  <span className="w-3/12" onClick={prevPotionSlide}>
                    <img
                      className="p-0.5 border-2 border-shopItem cursor-pointer rounded-lg hover:border-white"
                      src="media/icons/shop_prev.png"
                    />
                  </span>
                  <p className="w-6/12">{currentPotionIdx + 1} 종</p>
                  <span className="w-3/12" onClick={nextPotionSlide}>
                    <img
                      className="p-0.5 border-2 border-shopItem cursor-pointer rounded-lg hover:border-white"
                      src="media/icons/shop_next.png"
                    />
                  </span>
                </div>
              </div>

              <ShopPotion
                id={0}
                currentPotionIdx={currentPotionIdx}
                sendTxUp={(e) => sendTxUp(20)}
              />
              <ShopPotion
                id={1}
                currentPotionIdx={currentPotionIdx}
                sendTxUp={(e) => sendTxUp(10)}
              />
              {[...Array(3)].map((_, i) => (
                <ShopPotion
                  id={i}
                  currentPotionIdx={currentPotionIdx}
                  sendTxMix={(e) => sendTxMix(20 - 10 * i)}
                />
              ))}
            </div>
          )}
          {modal && (
            <ShopModal
              tokenId={[tokenId1, tokenId2, tokenId3]}
              urls={tokenURI}
              tx={sendTxNFT}
              close={closeModal}
            />
          )}
        </div>

        <div className="flex w-2/3 sm:w-1/3 py-8 m-auto items-center">
          <span className="w-1/4 cursor-pointer" onClick={prevSlide}>
            <img
              className="w-1/2 bg-shopItem rounded-md p-1 m-auto border-2 border-shopItem hover:border-white"
              src="media/icons/shop_prev.png"
            />
          </span>
          <p className="w-1/2 text-xl text-center">{sell_item[currentIdx]}</p>
          <span className="w-1/4 cursor-pointer" onClick={nextSlide}>
            <img
              className="w-1/2 bg-shopItem rounded-md p-1 m-auto border-2 border-shopItem hover:border-white"
              src="media/icons/shop_next.png"
            />
          </span>
        </div>

        <div className="text-center text-sm sm:text-base py-3">
          <p>예제 NFT로 번호는 0 ~ 30 까지 있습니다.</p>
        </div>
      </div>
    </MasterLayout>
  );
}
