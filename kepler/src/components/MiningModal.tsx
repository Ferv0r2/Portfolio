import React, { MouseEventHandler } from "react";
import { miningCode } from "@/utils";
import { v1 } from "uuid";

interface Props {
  pickId: number;
  stone: number;
  stoneCnt: number;
  close: MouseEventHandler<HTMLDivElement | HTMLButtonElement>;
}

export const MiningModal = ({ pickId, stone, stoneCnt, close }: Props) => {
  const rank = ["normal", "rare", "unique"];

  const stones = [35, 35, 35].map((v, i) => (i < stoneCnt ? stone : v));

  return (
    <div className="fixed top-0 right-0 bottom-0 left-0 bg-black bg-opacity-70 z-10">
      <div className="absolute bg-miningBg top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10/12 sm:w-8/12 lg:w-4/12 min-h-halfScreen m-auto p-2 rounded-md animation-fill-forwards animate-miningFlicker">
        <div className="relative font-GmarketSansMedium pt-16">
          <div
            className="absolute top-5 right-6 text-xl transform cursor-pointer hover:scale-125"
            onClick={close}
          >
            <p>X</p>
          </div>
          <div className="text-center">
            <video
              muted
              autoPlay
              poster={`media/video/mining.png`}
              className="w-10/12 pt-20 m-auto"
            >
              <source src={`media/video/mining_${rank[pickId]}.mov`} />
            </video>
            <p className="animate-showInfinity text-2xl sm:text-3xl pt-16 mb-6">
              믹스스톤 채굴 중 ...
            </p>
          </div>
          <div className="absolute w-11/12 sm:w-8/12 top-5 sm:top-12 left-3 sm:left-24 transform bg-gradient-to-b from-miningModalTop to-miningModalBottom rounded-3xl border-8 border-miningModalBorder scale-0 animation-fill-forwards animation-delay-5000 animate-showDisplay">
            <p className="text-miningModalText text-xl sm:text-3xl pt-6 sm:pt-8">
              채굴 결과
            </p>
            <div className="relative w-full h-64 sm:h-96 -mt-4">
              {pickId == 0 && (
                <div className="absolute -mt-8 w-10/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    src={`media/items/${miningCode["code"][stones[0]]}.png`}
                  />

                  <p className="text-base sm:text-xl -mt-6 sm:mt-auto font-GmarketSansMedium">
                    {miningCode["name"][stones[0]]}
                  </p>
                </div>
              )}

              {pickId == 1 ? (
                <div className="absolute -mt-8 w-9/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-80 h-80">
                    {[...Array(2)].map((_, i) => (
                      <img
                        className={`absolute top-1/2 left-${
                          i + 1
                        }/3 transform -translate-x-1/2 -translate-y-1/2`}
                        src={`media/items/${miningCode["code"][stones[i]]}.png`}
                      />
                    ))}
                  </div>
                  <div className="text-base sm:text-xl -mt-6 sm:mt-auto pt-0 sm:pt-8 font-GmarketSansMedium">
                    {[...Array(2)].map((_, i) => (
                      <p key={v1()}>{miningCode["name"][stones[i]]}</p>
                    ))}
                  </div>
                </div>
              ) : null}

              {pickId == 2 && (
                <div className="absolute -mt-8 w-9/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-80 h-80">
                    <img
                      className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2"
                      src={`media/items/${miningCode["code"][stones[0]]}.png`}
                    />
                    <img
                      className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                      src={`media/items/${miningCode["code"][stones[1]]}.png`}
                    />
                    <img
                      className="absolute top-1/2 left-2/3 transform -translate-x-1/2 -translate-y-1/2"
                      src={`media/items/${miningCode["code"][stones[2]]}.png`}
                    />
                  </div>
                  <div className="text-base sm:text-xl -mt-6 sm:mt-auto pt-0 sm:pt-8 font-GmarketSansMedium">
                    {[...Array(3)].map((_, i) => (
                      <p key={v1()}>{miningCode["name"][stones[i]]}</p>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="pt-8 text-center">
              <button
                className="bg-miningBtnBg text-white w-24 m-auto mb-8 p-2 text-xl rounded-xl hover:text-miningBtnBg hover:bg-white"
                onClick={close}
              >
                확인
              </button>
            </div>
          </div>
        </div>
      </div>
      {pickId == 0 && (
        <div className="flex bg-gradient-to-b from-miningModalTop to-miningModalBottom rounded-3xl border-4 border-miningModalBorder w-72 h-32 items-center absolute top-24 sm:top-1/4 left-6 sm:left-1/2 transform scale-0 -translate-x-0 -translate-y-0 animate-picking animation-delay-4000 animation-fill-forwards">
          <img
            className="w-32 h-32"
            src={`media/items/${miningCode["code"][stones[0]]}.png`}
          />
          <p className="text-center text-lg">{miningCode["name"][stones[0]]}</p>
        </div>
      )}

      {pickId == 1 && (
        <>
          <div className="flex bg-gradient-to-b from-miningModalTop to-miningModalBottom rounded-3xl border-4 border-miningModalBorder w-72 h-32 items-center absolute top-16 sm:top-1/3 left-16 sm:left-1/3 transform scale-0 -translate-x-0 -translate-y-0 animate-picking animation-delay-4000 animation-fill-forwards">
            <img
              className="w-32 h-32"
              src={`media/items/${miningCode["code"][stones[0]]}.png`}
            />
            <p className="text-center text-lg">
              {miningCode["name"][stones[0]]}
            </p>
          </div>
          <div className="flex bg-gradient-to-b from-miningModalTop to-miningModalBottom rounded-3xl border-4 border-miningModalBorder w-72 h-32 items-center absolute top-24 sm:top-1/4 left-6 sm:left-1/2 transform scale-0 -translate-x-0 -translate-y-0 animate-picking animation-delay-2500 animation-fill-forwards">
            <img
              className="w-32 h-32"
              src={`media/items/${miningCode["code"][stones[1]]}.png`}
            />
            <p className="text-center text-lg">
              {miningCode["name"][stones[1]]}
            </p>
          </div>
        </>
      )}

      {pickId == 2 && (
        <>
          <div className="flex bg-gradient-to-b from-miningModalTop to-miningModalBottom rounded-3xl border-4 border-miningModalBorder w-72 h-32 items-center absolute top-32 sm:top-1/4 left-12 sm:left-1/2 transform scale-0 -translate-x-0 -translate-y-0 animate-picking animation-delay-4000 animation-fill-forwards">
            <img
              className="w-32 h-32"
              src={`media/items/${miningCode["code"][stones[0]]}.png`}
            />
            <p className="text-center text-lg">
              {miningCode["name"][stones[0]]}
            </p>
          </div>
          <div className="flex bg-gradient-to-b from-miningModalTop to-miningModalBottom rounded-3xl border-4 border-miningModalBorder w-72 h-32 items-center absolute top-16 sm:top-1/3 left-16 sm:left-1/3 transform scale-0 -translate-x-0 -translate-y-0 animate-picking animation-delay-2500 animation-fill-forwards">
            <img
              className="w-32 h-32"
              src={`media/items/${miningCode["code"][stones[1]]}.png`}
            />
            <p className="text-center text-lg">
              {miningCode["name"][stones[1]]}
            </p>
          </div>
          <div className="flex bg-gradient-to-b from-miningModalTop to-miningModalBottom rounded-3xl border-4 border-miningModalBorder w-72 h-32 items-center absolute top-24 sm:top-1/4 left-6 sm:left-1/2 transform scale-0 -translate-x-0 -translate-y-0 animate-picking animation-delay-1000 animation-fill-forwards">
            <img
              className="w-32 h-32"
              src={`media/items/${miningCode["code"][stones[2]]}.png`}
            />
            <p className="text-center text-lg">
              {miningCode["name"][stones[2]]}
            </p>
          </div>
        </>
      )}
    </div>
  );
};
