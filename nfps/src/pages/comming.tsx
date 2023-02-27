import React, { useEffect, useState } from "react";
import { NextPage } from "next/types";
import { v1 } from "uuid";

/* API */
import { CheckFundingAPI, CheckProfileAPI } from "api";

/* Component */
import { ProductCard } from "components/card/ProductCard";
import { Button } from "components/asset/button";
import { fundContract, getBN, sbtContract } from "components/blockchain";
import { LoadingCard } from "components/loading/LoadingCard";
import { Filter } from "components/filter/Filter";
import { progressing, replaceBalance, toNumber } from "utils";

/* State */
import { useSetRecoilState } from "recoil";
import { isToastState, toastContentState } from "stores";

interface Project {
  title: string;
  image_url: string;
  nickname: string;
  token_id: number;
  created_at: Date;
}

const Comming: NextPage = () => {
  const [projectAry, setProjectAry] = useState<Project[]>([]);
  const [statusFilter, setStatusFilter] = useState<number>(0);
  const [detailFilter, setDetailFilter] = useState<number>(0);
  const [blockNumber, setBlockNumber] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const setIsToast = useSetRecoilState(isToastState);
  const setToastContent = useSetRecoilState(toastContentState);

  useEffect(() => {
    const getProject = async () => {
      setIsLoading(true);
      const count: number = await sbtContract.methods.totalSupply().call();
      const bn = await getBN();

      const promises: Promise<void>[] = [];
      const projects: any = [];
      for (let id = 1; id <= count; id++) {
        const promise = async (index: number) => {
          const project = await fundContract.methods.fundingView(index).call();
          const owner = await sbtContract.methods.ownerOf(index).call();
          const funding = await CheckFundingAPI(index);
          const profile = await CheckProfileAPI({
            address: owner,
            chain_id: 97,
          });
          projects.push({
            ...project,
            ...funding,
            nickname: profile.nickname || "이름없음",
            owner,
            index,
          });
        };
        promises.push(promise(id));
      }

      await Promise.all(promises);

      const after = projects.filter((v: any) => v[2] > bn);
      setProjectAry(after);
      setBlockNumber(bn);
      setIsLoading(false);
    };
    getProject();
  }, []);

  useEffect(() => {
    if (statusFilter === 0) {
    } else {
      if (detailFilter === 0) {
        setProjectAry(
          projectAry.sort(
            (a, b) => toNumber(a.created_at) - toNumber(b.created_at)
          )
        );
      } else {
        setProjectAry(
          projectAry.sort(
            (a, b) => toNumber(b.created_at) - toNumber(a.created_at)
          )
        );
      }
    }
  }, [projectAry, detailFilter, statusFilter]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-600">
      <div className="max-w-[1200px] mx-auto pt-10 pb-40">
        {/* <Filter
          status={statusFilter}
          detail={detailFilter}
          setStatus={setStatusFilter}
          setDetail={setDetailFilter}
        /> */}
        <div>
          <div className="grid grid-cols-4 gap-6 mt-8">
            {!isLoading ? (
              projectAry.length > 0 ? (
                projectAry?.map((v: any, i) => (
                  <ProductCard
                    key={v1()}
                    keyID={v.index}
                    name={v.nickname}
                    title={v.title || "제목없음"}
                    content={v.content || "내용없음"}
                    imgURI={v.image_url || "/dummy/temp.png"}
                    creator={v.owner}
                    progress={progressing(v[1], v[0])}
                    amount={replaceBalance(v[0])}
                    expired={v[2] - blockNumber}
                  />
                ))
              ) : (
                <div className="bg-white dark:bg-dark dark:border-dark-300 p-4 border rounded flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-1 h-5 mr-2 bg-dark rounded-sm" />
                    <p>펀딩 예정 항목이 없습니다.</p>
                  </div>
                </div>
              )
            ) : (
              <LoadingCard />
            )}
          </div>
          {projectAry.length > 20 && (
            <div className="grid justify-items-stretch pt-12">
              <Button
                className="border shadow bg-white dark:bg-dark w-2/5 p-4 justify-self-center hover:bg-dark hover:text-white"
                onClick={() => {
                  setToastContent({
                    content: "Comming Soon!",
                    type: "primary",
                  });
                  setIsToast(true);
                }}
              >
                Read More
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Comming;
