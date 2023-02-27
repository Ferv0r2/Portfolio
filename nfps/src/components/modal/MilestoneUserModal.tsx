import React, { FC, MouseEventHandler, useEffect, useState } from "react";
import { v1 } from "uuid";
import { useRouter } from "next/router";

/* API */
import { IMileData } from "api/APIModel";
import { FundingOutputAPI } from "api";

/* Component */
import { Button } from "components/asset/button";
import { Badge } from "components/asset/badge";
import { AutoSVG } from "utils";
import axios from "axios";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isToastState, toastContentState, walletState } from "stores";

interface Props {
  mileData: IMileData;
  price: number;
  isOwner: boolean;
  isIndex: number;
  startBN: number;
  endBN: number;
  close: MouseEventHandler<HTMLButtonElement>;
}

const MilestoneUserModal: FC<Props> = ({
  mileData,
  price,
  isOwner,
  startBN,
  endBN,
  close,
}) => {
  const router = useRouter();
  const wallet = useRecoilValue(walletState);
  const [isChecked, setIsChecked] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSigned, setIsSigned] = useState<boolean>(false);
  const [isSigning, setIsSigning] = useState<boolean>(false);
  const setIsToast = useSetRecoilState(isToastState);
  const setToastContent = useSetRecoilState(toastContentState);

  useEffect(() => {
    sessionStorage.getItem("FUNDING_TOKEN") && setIsSigned(true);
    setIsChecked({
      ...mileData.output,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const tokenHandler = async () => {
    if (!wallet.address) {
      setToastContent({
        content: "먼저 지갑을 연결해 주세요.",
        type: "danger",
      });
      setIsToast(true);
      return;
    }
    setIsSigning(true);
    const nonce = "본 서명을 통해 사용자를 식별하고 펀딩을 생성할 수 있습니다.";
    let sign;
    try {
      sign = await signCaller(nonce, wallet.address);
    } catch (err) {
      setToastContent({
        content: "서명이 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      setIsSigning(false);
      return;
    }

    let token = tokenPacker({
      wallet: "metamask",
      nonce: nonce,
      network: wallet.network,
      address: wallet.address,
      signature: sign,
    });

    sessionStorage.setItem("FUNDING_TOKEN", token);
    setIsSigned(true);
    setIsSigning(false);
  };

  const outputHandler = async (index: number, id: number, done: boolean) => {
    setIsLoading(true);
    axios.defaults.headers.common["Authorization"] =
      sessionStorage.getItem("FUNDING_TOKEN");

    let res;
    try {
      res = await FundingOutputAPI({
        token_id: Number(router.query.id),
        output_id: id,
        done: !done,
      });
    } catch (err) {
      setToastContent({
        content: "산출물 상태 변경이 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      setIsLoading(false);
    }
    setToastContent({
      content: `${index}번 산출물 상태가 변경되었습니다.`,
      type: "success",
    });
    setIsToast(true);

    setIsChecked({
      ...isChecked,
      [index]: {
        done: res.done,
      },
    });
    setIsLoading(false);
  };

  console.log(isChecked);

  return (
    <>
      <div className="py-12 bg-gray-700/50 dark:bg-black/60 transition duration-150 ease-in-out z-30 fixed top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-4 px-1 md:px-3 bg-white dark:bg-dark shadow-md rounded border border-gray-400 dark:border-dark-300">
            <div className="custom-scroll py-4 px-4 md:px-7 max-h-[360px] overflow-auto">
              <div className="w-full flex items-center text-gray-600 dark:text-gray-300 mb-3">
                <Badge className="bg-info-active mr-2">진행중</Badge>
                <h1 className="text-gray-800 dark:text-gray-300 text-lg font-bold">
                  {mileData.title}
                </h1>
              </div>
              <div className="mt-6 text-gray-800 dark:text-gray-300 font-medium">
                <span>산출물 리스트</span>
                {isOwner ? (
                  <span className="text-xs ml-2">
                    ※ 산출물을 확인하려면 서명이 필요합니다.
                  </span>
                ) : (
                  ""
                )}
              </div>
              <div className="mt-3 relative min-h-[80px]">
                {mileData.output.map((v, i) => (
                  <div key={v1()} className="flex items-center mt-2">
                    {isOwner ? (
                      <input
                        type="checkbox"
                        className="w-5 h-5 mr-2"
                        checked={isChecked[i]?.done || false}
                        onChange={() => outputHandler(i, v.id, v.done)}
                      />
                    ) : v.done ? (
                      <AutoSVG
                        src="/media/icons/check.svg"
                        className="w-5 h-5 text-primary-active mr-2"
                      />
                    ) : (
                      <AutoSVG
                        src="/media/icons/warning.svg"
                        className="w-5 h-5 text-danger-active mr-2"
                      />
                    )}
                    <span>{v.title}</span>
                  </div>
                ))}
                {isLoading ? (
                  <div className="absolute top-1/3 left-1/3 bg-black/75 rounded transform -translate-x-1/2 -translate-y-1/2">
                    <div className="flex items-center text-white p-2">
                      <div className="animate-spin">
                        <AutoSVG
                          className="w-6 h-6"
                          src="/media/icons/spinner.svg"
                        />
                      </div>
                      <div className="ml-2">로딩중입니다...</div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
              {isOwner ? (
                <>
                  <div className="mt-1 flex items-center">
                    <Button
                      className="flex items-center text-sm bg-indigo-600 hover:bg-indigo-70 disabled:bg-indigo-400 font-medium text-white mt-1 rounded px-3 py-2"
                      onClick={tokenHandler}
                      disabled={isSigned}
                    >
                      <AutoSVG
                        className="w-5 h-5 mr-1"
                        src="/media/icons/edit.svg"
                      />

                      {isSigning ? (
                        <span className="flex items-center justify-center">
                          <span className="mr-2">서명중...</span>
                          <div className="animate-spin">
                            <AutoSVG
                              src="/media/icons/spinner.svg"
                              className="w-6 h-6"
                            />
                          </div>
                        </span>
                      ) : isSigned ? (
                        <span>서명됨</span>
                      ) : (
                        <span>서명하기</span>
                      )}
                    </Button>
                  </div>
                  <div className="mt-2 text-xs text-gray-600 dark:text-gray-300">
                    ※ {"<"}필수{">"} 중복 서명을 최소화하며 사용자 식별을 위한
                    과정입니다.
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="mt-2 w-full h-10 flex items-center">
                <span className="text-gray-800 dark:text-gray-300 text-sm font-medium mr-12">
                  중도금 비율
                </span>
                <div>
                  <span className="text-2xl font-medium mr-1 text-indigo-700">
                    {price}
                  </span>
                  <span className="text-sm">%</span>
                </div>
              </div>
              <div className="text-gray-800 dark:text-gray-300">
                <div className="flex items-center">
                  <span className="text-sm font-medium mr-5">
                    마일스톤 시작 블럭
                  </span>
                  <span className="">{startBN}</span>
                </div>
                <div className="mt-2 flex items-center">
                  <span className="text-sm font-medium mr-5">
                    마일스톤 마감 블럭
                  </span>
                  <span className="">{endBN}</span>
                </div>
              </div>
            </div>
            <div className="mt-4 pb-2 flex justify-center text-sm">
              <Button
                className="w-28 rounded text-center font-bold text-white bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400"
                onClick={close}
              >
                <span>확인</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { MilestoneUserModal };
