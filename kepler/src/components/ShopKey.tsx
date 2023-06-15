import React, { ChangeEventHandler, MouseEventHandler } from "react";
import { TradeButton } from "@/components/TradeButton";
import { v1 } from "uuid";

interface Props {
  id: number;
  tokenId1: string;
  tokenId2: string;
  tokenId3: string;
  onChangeTokenId1: ChangeEventHandler<HTMLInputElement>;
  onChangeTokenId2: ChangeEventHandler<HTMLInputElement>;
  onChangeTokenId3: ChangeEventHandler<HTMLInputElement>;
  setOpen: MouseEventHandler<HTMLButtonElement>;
}

export const ShopKey = ({
  id,
  tokenId1,
  tokenId2,
  tokenId3,
  onChangeTokenId1,
  onChangeTokenId2,
  onChangeTokenId3,
  setOpen,
}: Props) => {
  const rank = ["normal", "rare", "unique"];

  const valueAry = [tokenId1, tokenId2, tokenId3];
  const onChangeAry = [onChangeTokenId1, onChangeTokenId2, onChangeTokenId3];

  return (
    <>
      <ul className="flex w-full py-8 px-4 sm:pl-12 items-center text-base sm:text-lg">
        <li className="w-4/12 mx-auto">
          {[...Array(id + 1)].map((_, i) => (
            <div key={v1()} className="py-2">
              <input
                className="w-full bg-white text-black text-center"
                placeholder="번호 입력"
                onChange={onChangeAry[i]}
                value={valueAry[i]}
              />
            </div>
          ))}
        </li>
        <li className="w-2/12 mx-auto">
          <img
            className="w-10/12 sm:w-1/2 mx-auto"
            src="media/icons/after.png"
          />
        </li>
        <li className="w-3/12 sm:w-2/12 mx-auto bg-shopItem rounded-2xl">
          <img src={`media/items/${rank[id]}_key.png`} />
        </li>
        <TradeButton
          className="hidden sm:block text-2xl w-4/12"
          onClick={setOpen}
        />
      </ul>
      <TradeButton
        className="block sm:hidden text-xl w-5/12"
        onClick={setOpen}
      />
    </>
  );
};
