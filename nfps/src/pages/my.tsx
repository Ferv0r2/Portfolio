import React, { useEffect, useState } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { v1 } from "uuid";
import clsx from "clsx";
import axios from "axios";

/* API */
import {
  AddProfileAPI,
  AddProfileImageAPI,
  CheckFundingAPI,
  CheckProfileAPI,
} from "api";

/* Hooks */
import useInput from "hooks/useInput";

/* Component */
import { Button } from "components/asset/button";
import { EmptyCard } from "components/asset/card/EmptyCard";
import { Product, ProductCard } from "components/card/ProductCard";
import { LoadingPage } from "components/loading/LoadingPage";
import {
  AutoImage,
  AutoSVG,
  progressing,
  replaceBalance,
  shortAddress,
} from "utils";

/* State */
import { isToastState, toastContentState, walletState } from "stores";
import { useRecoilValue, useSetRecoilState } from "recoil";
const MyPage: NextPage = () => {
  const router = useRouter();
  const wallet = useRecoilValue(walletState);
  const { isLoading: loadingProfile, data } = useQuery(
    ["Profile"],
    async () => {
      const res = await CheckProfileAPI({
        address: wallet.address,
        chain_id: wallet.network,
      });

      return res;
    },
    {
      staleTime: 500,
    }
  );
  const [projectAry, setProjectAry] = useState<Product[]>([]);
  const [blockNumber, setBlockNumber] = useState<number>(0);
  const [nickname, , onChangeNickname] = useInput<string>("");
  const [info, , onChangeInfo] = useInput<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isUpdate, setIsUpdate] = useState<boolean>(false);
  const [isModify, setIsModify] = useState<boolean>(false);
  const setIsToast = useSetRecoilState(isToastState);
  const setToastContent = useSetRecoilState(toastContentState);

  useEffect(() => {
    const callProducts = async () => {
      if (!wallet.address) {
        setToastContent({
          content: "먼저 지갑을 연결해 주세요.",
          type: "danger",
        });
        setIsToast(true);
        router.push("/");
        return;
      }
      const count = await sbtContract.methods.balanceOf(wallet.address).call();
      const bn = await getBN();

      const promises: Promise<void>[] = [];
      const projects: any = [];
      for (let id = 1; id <= count; id++) {
        const promise = async (index: number) => {
          const tokenId = await sbtContract.methods
            .tokenOfOwnerByIndex(wallet.address, index - 1)
            .call();
          const project = await fundContract.methods
            .fundingView(tokenId)
            .call();
          const funding = await CheckFundingAPI(index);
          projects.push({
            ...project,
            ...funding,
            index,
          });
        };
        promises.push(promise(id));
      }

      await Promise.all(promises);
      const after = projects.filter((v: any) => v.owner === wallet.address);
      after.sort((a: any, b: any) => a[1] - b[1]);
      setProjectAry(projects);
      setBlockNumber(bn);
      setIsLoading(false);
    };
    callProducts();
  }, [router, setIsToast, setToastContent, wallet.address]);

  const editProfileHandler = async () => {
    setIsUpdate(true);
    const nonce = "프로필 내용을 변경합니다.";
    const sign = await signCaller(nonce, wallet.address).catch(() => {
      setToastContent({
        content: "서명이 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
    });

    let token = tokenPacker({
      wallet: "metamask",
      nonce: nonce,
      network: wallet.network,
      address: wallet.address,
      signature: sign,
    });

    axios.defaults.headers.common["Authorization"] = token;

    try {
      await AddProfileAPI({
        nickname: nickname,
        content: info,
      });
      setToastContent({
        content: "프로필이 성공적으로 업데이트 되었습니다.",
        type: "success",
      });
      setIsToast(true);
    } catch (err) {
      setToastContent({
        content: "프로필 업데이트에 실패하였습니다.",
        type: "danger",
      });
      setIsToast(true);
    }
    setIsUpdate(false);
    setIsModify(false);
  };

  const imageHandler = async (e: any) => {
    setIsUpdate(true);
    const nonce = "프로필 이미지를 변경합니다.";
    let sign = await signCaller(nonce, wallet.address).catch(() => {
      setToastContent({
        content: "서명이 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      return;
    });

    let token = tokenPacker({
      wallet: "metamask",
      nonce: nonce,
      network: wallet.network,
      address: wallet.address,
      signature: sign,
    });

    const formData: any = new FormData();
    formData.append("image", e.target.files[0]);

    axios.defaults.headers.common["Authorization"] = token;
    try {
      await AddProfileImageAPI({
        formData,
      });
      setToastContent({
        content: "프로필 이미지가 성공적으로 업데이트 되었습니다.",
        type: "success",
      });
      setIsToast(true);
    } catch (err) {
      console.log(err);
      setToastContent({
        content: "프로필 이미지 업데이트에 실패하였습니다.",
        type: "danger",
      });
      setIsToast(true);
    }
    setIsUpdate(false);
  };

  if (isLoading || loadingProfile) return <LoadingPage />;

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-600">
      <div className="max-w-[1200px] mx-auto pt-12 pb-40">
        <div className="flex flex-col w-2/5 mx-auto">
          <div className="flex bg-white dark:bg-dark border border-white dark:border-dark-300 shadow-lg rounded-xl">
            <div className="border-r dark:border-dark-300 p-4">
              <div className="relative w-40">
                <div className="relative w-28 h-28 mx-auto">
                  <AutoImage
                    src={data.image_url || "/media/avatars/blank.svg"}
                    alt="profile"
                    className="object-cover rounded-full"
                  />
                  {isUpdate && (
                    <div className="absolute p-9">
                      <div className="animate-spin">
                        <AutoSVG
                          className="w-12 h-12 text-gray-300"
                          src="/media/icons/spinner.svg"
                        />
                      </div>
                    </div>
                  )}
                </div>
                {isModify ? (
                  <div className="absolute group cursor-pointer bottom-0 right-3">
                    <input
                      type="file"
                      className="absolute inset-0 text-sm text-slate-500 opacity-0 w-8 h-8 rounded-full"
                      accept="image/jpg,impge/png,image/jpeg"
                      onChange={imageHandler}
                    />
                    <button className="text-xs bg-gray-300 group-hover:bg-blue-200 rounded-full transition-colors duration-300">
                      <AutoSVG
                        src="/media/icons/edit.svg"
                        className="w-8 h-8 p-1.5"
                      />
                    </button>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-center p-3">
                {isModify ? (
                  <input
                    className="text-center dark:border-dark-300 dark:bg-dark-400 dark:text-gray-300 w-full rounded border border-gray-400 p-1"
                    type="text"
                    value={nickname}
                    onChange={onChangeNickname}
                    placeholder="닉네임"
                  />
                ) : (
                  <div className="w-full flex-none text-lg text-gray-800 dark:text-gray-300 font-bold leading-none p-2">
                    {data.nickname || "닉네임"}
                  </div>
                )}
                <div className="mt-1 text-xs text-gray-600 truncate-5-lines">
                  {shortAddress(data.address || wallet.address)}
                </div>
              </div>
            </div>
            <div className="w-full text-gray-500 dark:text-gray-400 text-sm p-4">
              <div className="w-full h-3/4">
                <label className="font-medium text-xs">프로필 소개</label>
                {isModify ? (
                  <textarea
                    className="mt-1 dark:border-dark-300 dark:bg-dark-400 dark:text-gray-300 w-full rounded border border-gray-400 p-1"
                    value={info}
                    onChange={onChangeInfo}
                    placeholder="프로필 소개"
                  />
                ) : (
                  <div className="mt-1">{data.content || "프로필 소개란"}</div>
                )}
              </div>
              <div className="h-1/4 flex justify-end">
                <Button
                  onClick={() => setIsModify(!isModify)}
                  disabled={isUpdate}
                  className={clsx(
                    "text-white",
                    isModify
                      ? "bg-danger hover:bg-danger-active disabled:bg-red-400"
                      : "bg-primary hover:bg-primary-active disabled:bg-blue-400"
                  )}
                >
                  {isModify ? (
                    <span>수정 취소</span>
                  ) : (
                    <span>프로필 수정하기</span>
                  )}
                </Button>
                {isModify ? (
                  <Button
                    className="ml-2 bg-primary hover:bg-primary-active disabled:bg-blue-400 text-white"
                    disabled={isUpdate}
                    onClick={editProfileHandler}
                  >
                    수정하기
                  </Button>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-4 gap-6 mt-12">
          {projectAry.length > 0 ? (
            projectAry?.map((v: any) => (
              <ProductCard
                key={v1()}
                keyID={v.keyID}
                name={data.nickname}
                title={v.title}
                content={v.content}
                imgURI={v.image_url || "/dummy/temp.png"}
                creator={wallet.address}
                progress={progressing(v[1], v[0])}
                amount={replaceBalance(v[0])}
                expired={v[3] - blockNumber}
              />
            ))
          ) : (
            <EmptyCard>보유한 프로젝트가 없습니다.</EmptyCard>
          )}
        </div>
      </div>
    </div>
  );
};

export default MyPage;
