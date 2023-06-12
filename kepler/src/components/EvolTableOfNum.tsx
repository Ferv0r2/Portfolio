import React from "react";
import { v1 } from "uuid";

interface Props {
  date: string;
  tokenData: number[];
}

export const EvolTableOfNum = ({ date, tokenData }: Props) => {
  const baseURI =
    "https://opensea.io/assets/klaytn/0x928267e7db3d173898553ff593a78719bb16929f";
  return (
    <div className="font-bold">
      <h2 className="text-3xl italic py-6">Today Evolution</h2>
      <h3 className="italic py-6">{date}</h3>
      <div className="TotalEvolTable__infoBox">
        <div className="TotalEvolTable__token">
          <h2 className="py-6">전체 진화 번호 ({tokenData.length})</h2>
          <div className="flex w-10/12 h-48 overflow-y-scroll m-auto flex-wrap">
            {tokenData.length != 0 ? (
              tokenData.map((v) => {
                return (
                  <a
                    className="w-1/4 sm:w-2/12 m-auto py-3 hover:text-hover_pink"
                    key={v1()}
                    href={baseURI + v}
                  >
                    <h3>{v}</h3>
                  </a>
                );
              })
            ) : (
              <h2>비어 있습니다</h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
