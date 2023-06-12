import React from "react";
import { NFTBox } from "@/components/NFTBox";

export const EvolTable = ({ date, name, info, tokenData }) => {
  const data = tokenData.map((dt) => {
    if (tokenData.size === 0) return <h2>{info}</h2>;
    return (
      <li key={dt[0]}>
        <NFTBox tokenId={dt[0]} tokenURI={dt[1]} />
      </li>
    );
  });

  return (
    <div className="EvolTable">
      <div className="EvolTable__infoBox">
        {date ? <p>{date}</p> : ""}
        <h2>
          {name} ({tokenData.size})
        </h2>
        <ul>{data}</ul>
      </div>
    </div>
  );
};
