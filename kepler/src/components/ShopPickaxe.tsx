import React, { MouseEventHandler } from "react";

interface Props {
  id: number;
  sendTx: MouseEventHandler<HTMLDivElement>;
}

export const ShopPickaxe = ({ id, sendTx }: Props) => {
  const rank = ["normal", "rare", "unique"];

  return (
    <>
      <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-lg">
        <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
          <img src="media/items/faded_stone.png" />
        </li>
        <li className="w-1/12 m-auto italic">
          <h2>X</h2>
        </li>
        <li className="w-1/12 m-auto text-2xl italic">
          <h1>{(id + 1) * 10}</h1>
        </li>
        <li className="w-3/12 sm:w-2/12 m-auto">
          <img className="w-1/2 m-auto" src="media/icons/after.png" />
        </li>
        <li className="w-3/12 sm:w-2/12 m-auto bg-shopItem rounded-2xl">
          <img src={`media/items/${rank[id]}_pickaxe.png`} />
        </li>
        <div
          className="hidden sm:block w-4/12 m-auto text-2xl cursor-pointer hover:text-shopItem"
          onClick={sendTx}
        >
          <p className="border-2 w-1/2 p-2 m-auto">교환</p>
        </div>
      </ul>
      <div
        className="block sm:hidden w-5/12 m-auto text-xl cursor-pointer hover:text-shopItem"
        onClick={sendTx}
      >
        <p className="border-2 w-1/2 p-2 m-auto">교환</p>
      </div>
    </>
  );
};
