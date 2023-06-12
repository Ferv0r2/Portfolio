import React, { MouseEventHandler } from "react";
import { Loading } from "@/components/Loading";
import { v1 } from "uuid";

interface Props {
  open: boolean;
  close: MouseEventHandler<HTMLDivElement>;
  tokenId: string[];
  urls: string[];
  tx: any;
}

export const ShopModal = ({ open, close, tokenId, urls, tx }: Props) => {
  return (
    <>
      {open ? (
        <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-10">
          <div className="absolute bg-shopItem top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 sm:w-8/12 lg:w-4/12 min-h-halfScreen m-auto p-2 rounded-md shadow-custom animate-show">
            <div className="relative font-GmarketSansMedium pt-16">
              <div
                className="absolute top-5 right-6 text-xl cursor-pointer transform hover:scale-125"
                onClick={close}
              >
                <p>X</p>
              </div>
              <div className="pb-8 text-center items-center">
                <p className="py-0 sm:py-2 text-2xl sm:text-3xl">
                  소각되는 NFT
                </p>
                <div className="relative flex w-full sm:w-1/2 m-auto flex-wrap">
                  {urls ? (
                    urls.map((v, i) => {
                      return (
                        <div className="w-5/12 m-auto" key={v1()}>
                          <img className="m-2" src={v} />
                          <p>{`#${tokenId[i]}`}</p>
                        </div>
                      );
                    })
                  ) : (
                    <Loading />
                  )}
                </div>
                <p className="py-8 text-xl">이 NFT가 맞나요?</p>
                <button
                  onClick={tx}
                  className="border-2 text-white w-32 m-auto p-2 text-xl rounded-xl hover:text-shopItem hover:bg-white"
                >
                  교환 확정
                </button>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
};
