import React from "react";

interface Props {
  tokenId?: number;
  tokenURI: string;
}

export const NFTBox = ({ tokenId, tokenURI }: Props) => {
  const baseURI =
    "https://opensea.io/assets/klaytn/0x928267e7db3d173898553ff593a78719bb16929f";

  const onErrorImg = (e: any) => {
    e.target.style = `display: none`;
  };

  return (
    <div className="NFTBox">
      {tokenId ? (
        <a target="_blank" href={baseURI + tokenId}>
          <p className="NFTBox__name">{tokenId}</p>
          <div className="NFTBox__img">
            <img src={tokenURI} onError={onErrorImg} />
            <video src={tokenURI} autoPlay loop onError={onErrorImg} />
          </div>
        </a>
      ) : (
        <>
          <div className="NFTBox__img">
            <img src={tokenURI} onError={onErrorImg} />
            <video src={tokenURI} autoPlay loop onError={onErrorImg} />
          </div>
        </>
      )}
    </div>
  );
};
