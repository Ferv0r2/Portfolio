import React, { MouseEventHandler } from "react";
import { TradeButton } from "@/components/TradeButton";

interface Props {
  id: number;
  currentPotionIdx: number;
  sendTxUp?: MouseEventHandler<HTMLButtonElement>;
  sendTxMix?: MouseEventHandler<HTMLButtonElement>;
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
      {sendTxUp !== undefined && (
        <>
          <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
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
            <li className="w-3/12 sm:w-2/12 mx-auto">
              <img className="w-1/2 mx-auto" src="media/icons/after.png" />
            </li>
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 1}${
                  potionSize[id + 1]
                }.png`}
              />
            </li>
            <TradeButton
              className="hidden sm:block text-2xl w-4/12"
              onClick={sendTxUp}
            />
          </ul>
          <TradeButton
            className="block sm:hidden text-xl w-5/12"
            onClick={sendTxUp}
          />
        </>
      )}
      {sendTxMix !== undefined && currentPotionIdx !== 4 && (
        <>
          <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 1}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <h2>+</h2>
            </li>
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 2}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <img
                className="w-full sm:w-2/3 mx-auto"
                src="media/icons/after.png"
              />
            </li>
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 6}${potionSize[id]}.png`}
              />
            </li>
            <TradeButton
              className="hidden sm:block text-2xl w-4/12"
              onClick={sendTxMix}
            />
          </ul>
          <TradeButton
            className="block sm:hidden text-xl w-5/12"
            onClick={sendTxMix}
          />
        </>
      )}
      {sendTxMix !== undefined && currentPotionIdx === 4 && (
        <>
          <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 1}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <h2>+</h2>
            </li>
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx - 3}${potionSize[id]}.png`}
              />
            </li>
            <li className="w-1/12">
              <img
                className="w-full sm:w-2/3 mx-auto"
                src="media/icons/after.png"
              />
            </li>
            <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
              <img
                src={`media/items/${currentPotionIdx + 6}${potionSize[id]}.png`}
              />
            </li>
            <TradeButton
              className="hidden sm:block text-2xl w-4/12"
              onClick={sendTxMix}
            />
          </ul>
          <TradeButton
            className="block sm:hidden text-xl w-5/12"
            onClick={sendTxMix}
          />
        </>
      )}
    </>
  );
};
