import { FC } from "react";
import { NFTCard } from "components/card";
import { TabTable } from "components/tab/TabTable";
import { Project } from "utils";

interface Props {
  nft: Project;
}

const NFTHomePage: FC<Props> = ({ nft }) => {
  return (
    <div className="row gy-8 pb-8">
      <NFTCard className="col-11 col-md-9 mx-auto" nft={nft} mode="detail" />
      <TabTable
        pid={nft.id}
        totalSupply={nft.total_supply}
        holderCount={nft.holder_count}
        className="col-11 col-md-9 mx-auto"
      />
    </div>
  );
};

export default NFTHomePage;
