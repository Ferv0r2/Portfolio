import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { collectionState } from "stores";
import { projectDataArray } from "utils";

interface ModifyData {
  id: number;
  homepage: string;
  thumbnail: string;
}

export const useCollection = () => {
  const [collections, setCollections] = useRecoilState(collectionState);

  useEffect(() => {
    if (collections.length === 0) {
      setCollections(projectDataArray);
    }
  }, [collections.length, setCollections]);

  const onAddCollection = (contract: string) => {
    setCollections([
      ...collections,
      {
        id: collections.length + 1,
        contract: contract,
        chain_id: 8217,
        interface: "kip17",
        name: "TestName",
        symbol: "testSymbol",
        holder_count: 0,
        total_supply: 100,
        event_count: 0,
      },
    ]);
  };

  const onModify = (data: ModifyData) => {
    const newCollection = collections.map((project) => project);
    console.log(newCollection);
    setCollections(newCollection);
  };

  const onDelete = (id: number) => {
    const newCollection = collections.filter((v) => v.id !== id);
    setCollections(newCollection);
  };

  return { collections, onAddCollection, onModify, onDelete };
};
