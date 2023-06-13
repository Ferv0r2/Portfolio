import React, { MouseEventHandler } from "react";

interface Props {
  id: number;
  currentPotionIdx: number;
  sendTxUp?: MouseEventHandler<HTMLDivElement>;
  sendTxMix?: MouseEventHandler<HTMLDivElement>;
}

export const ShopPotion = ({
  id,
  currentPotionIdx,
  sendTxUp,
  sendTxMix,
}: Props) => {
  const potionSize = ["S", "M", "L"];

  return (
    <>
      {sendTxUp !== undefined ? (
        <>
          <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 1}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12 italic">
              <h2>X</h2>
            </li>
            <li className="w-1/12 text-2xl italic">
              <h1>10</h1>
            </li>
            <li className="w-3/12 sm:w-2/12 m-auto">
              <img className="w-1/2 m-auto" src="media/icons/after.png" />
            </li>
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 1}${
                  potionSize[id + 1]
                }.png`}
              />
            </li>
            <div
              className="hidden sm:block w-4/12 text-2xl cursor-pointer hover:text-shopItem"
              onClick={sendTxUp}
            >
              <p className="border-2 w-1/2 p-2 m-auto">교환</p>
            </div>
          </ul>
          <div
            className="block sm:hidden w-5/12 m-auto text-xl cursor-pointer hover:text-shopItem"
            onClick={sendTxUp}
          >
            <p className="border-2 w-1/2 p-2 m-auto">교환</p>
          </div>
        </>
      ) : null}
      {sendTxMix !== undefined && currentPotionIdx !== 4 && (
        <>
          <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 1}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <h2>+</h2>
            </li>
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 2}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <img
                className="w-full sm:w-2/3 m-auto"
                src="media/icons/after.png"
              />
            </li>
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 6}${potionSize[id]}.png`}
              />
            </li>
            <div
              className="hidden sm:block w-4/12 text-2xl cursor-pointer hover:text-shopItem"
              onClick={sendTxMix}
            >
              <p className="border-2 w-1/2 p-2 m-auto">교환</p>
            </div>
          </ul>

          <div
            className="block sm:hidden w-5/12 m-auto text-xl cursor-pointer hover:text-shopItem"
            onClick={sendTxMix}
          >
            <p className="border-2 w-1/2 p-2 m-auto">교환</p>
          </div>
        </>
      )}
      {sendTxMix !== undefined && currentPotionIdx === 4 && (
        <>
          <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 1}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <h2>+</h2>
            </li>
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx - 3}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <img
                className="w-full sm:w-2/3 m-auto"
                src="media/icons/after.png"
              />
            </li>
            <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 6}${potionSize[id]}.png`}
              />
            </li>
            <div
              className="hidden sm:block w-4/12 text-2xl cursor-pointer hover:text-shopItem"
              onClick={sendTxMix}
            >
              <p className="border-2 w-1/2 p-2 m-auto">교환</p>
            </div>
          </ul>

          <div
            className="block sm:hidden w-5/12 m-auto text-xl cursor-pointer hover:text-shopItem"
            onClick={sendTxMix}
          >
            <p className="border-2 w-1/2 p-2 m-auto">교환</p>
          </div>
        </>
      )}
    </>
  );
};
