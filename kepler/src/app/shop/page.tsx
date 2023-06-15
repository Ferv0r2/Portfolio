"use client";

import React, { useEffect, useState } from "react";
import { v1 } from "uuid";

import useInput from "@/hooks/useInput";

import { MasterLayout } from "@/layout/MasterLayout";
import { ShopModal } from "@/components/ShopModal";
import { ShopPickaxe } from "@/components/ShopPickaxe";
import { ShopKey } from "@/components/ShopKey";
import { ShopPotion } from "@/components/ShopPotion";

export default function Shop() {
  const [currentIdx, setIndex] = useState<number>(0);
  const [currentPotionIdx, setPotionIndex] = useState<number>(0);
  const [stone, setStone] = useState<number>(80);
  const [nft, setNFT] = useState<string[]>([]);
  const [tokenId1, setTokenId1, changeTokenId1] = useInput("");
  const [tokenId2, setTokenId2, changeTokenId2] = useInput("");
  const [tokenId3, setTokenId3, changeTokenId3] = useInput("");
  const [level, setLevel] = useState<number>(0);
  const [modal, setModal] = useState<boolean>(false);

  useEffect(() => {
    const temp = Array.from({ length: 30 }, (_, i) => i).map((v) => String(v));
    setNFT(temp);
  }, []);

  const sendTx = (id: number) => {
    setStone(stone - (id + 1) * 10);
    alert("스톤 거래 완료!");
  };

  const sendTxUp = () => {
    alert("포션 업그레이드 완료!");
  };

  const sendTxMix = () => {
    alert("포션 믹스 완료!");
  };

  const sendTxNFT = () => {
    alert("열쇠 거래 완료!");

    const temp = [...nft].filter(
      (v) => v !== tokenId1 && v !== tokenId2 && v !== tokenId3
    );

    setNFT(temp);
    setTokenId1("");
    setTokenId2("");
    setTokenId3("");
    setModal(false);
  };

  const setOpen = (id: number) => {
    const tokenIds = [tokenId1, tokenId2, tokenId3];
    const isEmpty = tokenIds.some((v, i) => id >= i && v === "");
    const filteredIds = tokenIds.filter((v) => v !== "");
    const overlap = new Set(filteredIds);
    const nullToken = filteredIds.filter((v) => !nft.includes(v));

    if (isEmpty) {
      alert("해당하는 번호를 모두 채워 주세요.");
      return;
    }

    if (filteredIds.length !== overlap.size) {
      alert("중복되는 숫자를 제거해 주세요.");
      return;
    }

    if (nullToken.length > 0) {
      let message = "";

      if (id === 0) {
        message = nullToken[0];
      } else {
        message = nullToken.join(", ");
      }

      alert(`${message}번 NFT가 없습니다.`);
      return;
    }

    setLevel(id);
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
    } else {
      alert("1종부터 5종까지 존재합니다.");
    }
  };

  const nextPotionSlide = () => {
    const slideCount = 5;
    if (currentPotionIdx !== slideCount - 1) {
      setPotionIndex(currentPotionIdx + 1);
    } else {
      alert("1종부터 5종까지 존재합니다.");
    }
  };

  const sell_item = ["곡괭이", "열쇠", "포션"];

  return (
    <MasterLayout bgType="bg-black">
      <div className="min-h-screen max-w-2xl mx-auto pb-20 text-white font-GmarketSansMedium">
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
        <div className="w-10/12 sm:w-full mx-auto border-2 shadow-custom">
          <div className="relative w-full sm:w-8/12 mx-auto">
            <img
              className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
              src="media/banners/shop_title.png"
            />
          </div>

          {currentIdx == 0 && (
            <div className="py-16 text-center">
              {[...Array(3)].map((_, i) => (
                <ShopPickaxe key={v1()} id={i} sendTx={() => sendTx(i)} />
              ))}
              <div className="block sm:flex w-2/3 sm:w-1/2 mx-auto text-center items-center pt-8">
                <p className="w-full sm:w-9/12 pb-8 sm:pb-0 mx-auto text-lg sm:text-2xl">
                  남은 빛바랜 스톤 갯수
                </p>
                <p className="w-full sm:w-3/12 mx-auto text-4xl">{stone}</p>
              </div>
            </div>
          )}
          {currentIdx == 1 && (
            <div className="py-16 text-center">
              {[...Array(3)].map((_, i) => (
                <ShopKey
                  key={v1()}
                  id={i}
                  tokenId1={tokenId1}
                  tokenId2={tokenId2}
                  tokenId3={tokenId3}
                  onChangeTokenId1={changeTokenId1}
                  onChangeTokenId2={changeTokenId2}
                  onChangeTokenId3={changeTokenId3}
                  setOpen={() => setOpen(i)}
                />
              ))}

              <div className="block sm:flex w-1/2 mx-auto text-center items-center pt-8">
                <p className="w-full sm:w-7/12 mx-auto pb-6 sm:pb-0 text-lg sm:text-2xl">
                  남은 NFT 갯수
                </p>
                <p className="w-full sm:w-5/12 mx-auto text-2xl sm:text-4xl">
                  {nft.length}
                </p>
              </div>
            </div>
          )}
          {currentIdx == 2 && (
            <div className="relative py-16 text-center">
              <div className="w-10/12 sm:w-5/12 mx-auto bg-shopItem p-4 items-center rounded-lg z-3">
                <p className="pb-3">현재 보고 있는 종</p>
                <div className="flex w-1/2 sm:w-1/3 mx-auto items-center">
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
                sendTxUp={sendTxUp}
              />
              <ShopPotion
                id={1}
                currentPotionIdx={currentPotionIdx}
                sendTxUp={sendTxUp}
              />
              {[...Array(3)].map((_, i) => (
                <ShopPotion
                  key={v1()}
                  id={i}
                  currentPotionIdx={currentPotionIdx}
                  sendTxMix={sendTxMix}
                />
              ))}
            </div>
          )}
          {modal && (
            <ShopModal
              id={level}
              tokenId={[tokenId1, tokenId2, tokenId3]}
              sendTxNFT={sendTxNFT}
              close={closeModal}
            />
          )}
        </div>

        <div className="flex w-2/3 sm:w-1/3 py-8 mx-auto items-center">
          <span className="w-1/4 cursor-pointer" onClick={prevSlide}>
            <img
              className="w-1/2 bg-shopItem rounded-md p-1 mx-auto border-2 border-shopItem hover:border-white"
              src="media/icons/shop_prev.png"
            />
          </span>
          <p className="w-1/2 text-xl text-center">
            {sell_item[currentIdx]} 교환
          </p>
          <span className="w-1/4 cursor-pointer" onClick={nextSlide}>
            <img
              className="w-1/2 bg-shopItem rounded-md p-1 mx-auto border-2 border-shopItem hover:border-white"
              src="media/icons/shop_next.png"
            />
          </span>
        </div>

        <div className="text-center text-sm sm:text-base py-3">
          <p>예제 NFT로 번호는 01 ~ 30 까지 있습니다</p>
        </div>
      </div>
    </MasterLayout>
  );
}
