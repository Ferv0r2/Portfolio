"use client";

import React, { useState, useEffect } from "react";
import { nftContract } from "@/blockchain";
import { EvolTableOfNum } from "@/components/EvolTableOfNum";
import { EvolTable } from "@/components/EvolTable";
import { Loading } from "@/components/Loading";

import { evolData } from "@/utils";

import { useSetRecoilState, useRecoilValue, useRecoilState } from "recoil";
import {
  accountState,
  bgState,
  evoledState,
  evolState,
  mixEvolState,
  mixTotalState,
  spawnedState,
} from "@/stores";
const Evolution = () => {
  const setBg = useSetRecoilState(bgState);
  const account = useRecoilValue(accountState);
  const [evol, setEvol] = useRecoilState(evolState);
  const [evoled, setEvoled] = useRecoilState(evoledState);
  const [spawned, setSpawned] = useRecoilState(spawnedState);
  const [mixTotal, setMixTotal] = useRecoilState(mixTotalState);
  const [mixEvol, setMixEvol] = useRecoilState(mixEvolState);
  const [isLoading, setLoading] = useState(true);
  const [isSubLoading, setSubLoading] = useState(true);

  useEffect(() => {
    setBg("bg-black");
  }, []);

  if (isLoading) return <Loading />;
  return (
    <div className="max-w-4xl m-auto min-h-screen text-white text-center font-GmarketSansMedium">
      {/* <EvolTableOfNum date={evol.date} tokenData={evol.token} /> */}
    </div>
  );
};

export default Evolution;
