import React, { MouseEventHandler } from "react";
import { v1 } from "uuid";

interface Props {
  id: number;
  tokenId: string[];
  sendTxNFT: MouseEventHandler<HTMLButtonElement>;
  close: MouseEventHandler<HTMLDivElement>;
}

export const ShopModal = ({ id, tokenId, sendTxNFT, close }: Props) => {
  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-10">
      <div className="absolute bg-shopItem top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 sm:w-8/12 lg:w-4/12 min-h-halfScreen mx-auto p-2 rounded-md shadow-custom animate-show">
        <div className="relative font-GmarketSansMedium pt-16">
          <div
            className="absolute top-5 right-6 text-xl cursor-pointer transform hover:scale-125"
            onClick={close}
          >
            <p>X</p>
          </div>
          <div className="pb-8 text-center items-center">
            <p className="py-0 sm:py-2 text-2xl sm:text-3xl">소각되는 NFT</p>
            <div className="relative flex w-full sm:w-1/2 mx-auto flex-wrap">
              {[...Array(id + 1)].map((_, i) => (
                <div className="w-5/12 mx-auto" key={v1()}>
                  <img src={`media/nft/${tokenId[i].padStart(2, "0")}.png`} />
                  <p className="mt-2">{`#${tokenId[i].padStart(2, "0")}`}</p>
                </div>
              ))}
            </div>
            <p className="py-8 text-xl">이 NFT가 맞나요?</p>
            <button
              onClick={sendTxNFT}
              className="border-2 text-white w-32 mx-auto p-2 text-xl rounded-lg hover:text-hoverPink"
            >
              교환 확정
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
