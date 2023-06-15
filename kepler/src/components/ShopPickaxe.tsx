import React, { MouseEventHandler } from "react";
import { TradeButton } from "@/components/TradeButton";

interface Props {
  id: number;
  sendTx: MouseEventHandler<HTMLButtonElement>;
}

export const ShopPickaxe = ({ id, sendTx }: Props) => {
  const rank = ["normal", "rare", "unique"];

  return (
    <>
      <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
        <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
          <img src="/media/items/faded_stone.png" />
        </li>
        <li className="w-1/12 mx-auto italic">
          <h2>X</h2>
        </li>
        <li className="w-1/12 mx-auto text-2xl italic">
          <h1>{(id + 1) * 10}</h1>
        </li>
        <li className="w-3/12 sm:w-2/12 mx-auto">
          <img className="w-1/2 mx-auto" src="media/icons/after.png" />
        </li>
        <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
          <img src={`media/items/${rank[id]}_pickaxe.png`} />
        </li>
        <TradeButton
          className="hidden sm:block text-2xl w-4/12"
          onClick={sendTx}
        />
      </ul>
      <TradeButton
        className="block sm:hidden text-xl w-5/12"
        onClick={sendTx}
      />
    </>
  );
};
