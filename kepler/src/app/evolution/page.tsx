"use client";

import React, { useState, useEffect } from "react";
import { nftContract } from "@/blockchain";
import { EvolTableOfNum } from "@/components/EvolTableOfNum";
import { EvolTable } from "@/components/EvolTable";
import { Loading } from "@/components/Loading";

import { evolData } from "@/utils";

const Evolution = () => {
  return (
    <div className="max-w-4xl mx-auto min-h-screen text-white text-center font-GmarketSansMedium">
      {/* <EvolTableOfNum date={evol.date} tokenData={evol.token} /> */}
    </div>
  );
};

export default Evolution;
