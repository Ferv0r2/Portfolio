import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import dynamic from "next/dynamic";
import clsx from "clsx";
import { useTheme } from "next-themes";
import { useQuery } from "react-query";

/* API */
import { CheckFundingAPI, CheckProfileAPI } from "api";

/* Hook */
import useInput from "hooks/useInput";

/* Component */
import { Card } from "components/asset/card";
import { Button } from "components/asset/button";
import { fundContract, getBN, sbtContract } from "components/blockchain";
import { StatusCard } from "components/card/StatusCard";
import { FundingTable } from "components/table/FundingTable";
import { MilestoneUser } from "components/milestone/MilestoneUser";
import { VoteModal } from "components/modal/VoteModal";
import { FundingModal } from "components/modal/FundingModal";
import { LoadingPage } from "components/loading/LoadingPage";

import {
  accounting,
  AutoImage,
  AutoSVG,
  bnToDate,
  formatDateDot,
  hexBalance,
  replaceBalance,
  shortAddress,
  toDate,
} from "utils";

/* State */
import { useRecoilValue, useSetRecoilState } from "recoil";
import { IProject, isToastState, toastContentState, walletState } from "stores";
import { LoadingSpan } from "~/components/loading/LoadingSpan";

const MarkdownPreview = dynamic(() => import("@uiw/react-markdown-preview"), {
  ssr: false,
});

type Status = 0 | 1 | 2 | 3 | 4 | 5;
// 0: 펀딩예정
// 1: 펀딩중
// 2: 마일스톤 진행중
// 3: 마일스톤 끝까지 완료
// 4: 마일스톤 도중 중단됨
// 5: 펀딩 중단됨

const Product = () => {
  const { theme } = useTheme();
  const router = useRouter();
  const { isLoading: isLoadingProject, data } = useQuery(
    ["Project"],
    async () => {
      const res = await CheckFundingAPI(Number(router.query.id));
      return res;
    }
  );

  const wallet = useRecoilValue(walletState);
  const [projectCount, setProjectCount] = useState<number>(0);
  const [project, setProject] = useState<IProject>({
    limitprice: 0,
    totalFundamount: 0,
    fundingStart: 0,
    fundingEnd: 0,
    fundingList: {},
    daoPass: 0,
    daoReject: 0,
    owner: "0x0000000000000000000000000000000000000000",
  });
  const [mileStoneAry, setMileStoneAry] = useState([]);
  const [mileStoneStep, setMileStoneStep] = useState<number>(0);
  const [daoAry, setDaoAry] = useState([]);
  const [profileData, setProfileData] = useState({
    image_url: "",
    nickname: "",
    content: "",
  });
  const [isStatus, setIsStatus] = useState<Status | number>(0);
  const [tabIndex, setTabIndex] = useState<number>(0);
  const [amount, setAmount, onChangeAmount] = useInput<number>(0);
  const [blockNumber, setBlockNumber] = useState<number>(0);
  const [isCount, setIsCount] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpenFund, setIsOpenFund] = useState<boolean>(false);
  const [isOpenVote, setIsOpenVote] = useState<boolean>(false);
  const [isOwner, setIsOwner] = useState<boolean>(false);
  const [isVoted, setIsVoted] = useState<number>(0);
  const [UPDATES, setUPDATES] = useState<number>(0);
  const setIsToast = useSetRecoilState(isToastState);
  const setToastContent = useSetRecoilState(toastContentState);

  useEffect(() => {
    const getData = async () => {
      if (!project.fundingStart) return;
      const bn = await getBN();
      const count = await sbtContract.methods.totalSupply().call();
      if (bn < project.fundingStart) {
        setIsStatus(0);
      } else if (bn < project.fundingEnd) {
        setIsStatus(1);
      } else if (bn > project.fundingEnd) {
        setIsStatus(2);
      }
      setBlockNumber(bn);
      setIsCount(count);
    };
    getData();
  }, [project.fundingStart, project.fundingEnd]);

  useEffect(() => {
    const projectData = async () => {
      setIsLoading(true);
      const funding = await fundContract.methods
        .fundingView(router.query.id)
        .call(); // [목표액, 모금액, 펀딩시작일, 펀딩종료일,[펀더지갑], [펀딩금액]]

      const milestone = await fundContract.methods
        .milestonView(router.query.id)
        .call(); // [마일갯수, [마일시작일], [마일종료일], [마일중도금], [마일중도금비율]]

      const milestep = await fundContract.methods
        .milestonStepView(router.query.id)
        .call(); // 마일스톤 단계

      const funder = await fundContract.methods
        .funderView(
          router.query.id,
          milestep,
          wallet.address || "0x0000000000000000000000000000000000000000"
        )
        .call(); // [대기, 찬성, 반대]

      const voter = await fundContract.methods.daoView(router.query.id).call(); // [[찬성], [반대]]

      const nftOwner = await sbtContract.methods
        .ownerOf(router.query.id)
        .call();
      const nftCount = await sbtContract.methods.balanceOf(nftOwner).call();

      const res = await CheckProfileAPI({
        address: project.owner,
        chain_id: wallet.network || 97,
      });

      const milestoneList: any = [];
      for (let m = 0; m < milestone[1].length; m++) {
        const milestoneData = [];
        for (let i = 1; i <= 4; i++) {
          milestoneData.push(milestone[i][m]);
        }
        milestoneList.push(milestoneData);
      }

      const funders = funding[4]?.map((v: any) => v.toUpperCase());
      const fundingList = funders?.reduce(
        (obj: any, key: any, index: number) => ({
          ...obj,
          [key]: funding[5][index],
        }),
        {}
      );

      const votedAry = Object.values(funder);
      const checkVoted: any = votedAry.indexOf(
        votedAry.filter((v) => v !== "0")[0]
      );

      setProject({
        limitprice: funding[0] || 0,
        totalFundamount: funding[1] || 0,
        fundingStart: funding[2] || 0,
        fundingEnd: funding[3] || 0,
        fundingList: fundingList || {},
        daoPass: voter[0][milestep],
        daoReject: voter[1][milestep],
        owner: nftOwner,
      });
      setMileStoneAry(milestoneList);
      setDaoAry(voter);
      setMileStoneStep(milestep);
      setProjectCount(nftCount);
      setIsVoted(checkVoted < 0 ? 0 : checkVoted);
      setProfileData(res);
      setIsLoading(false);
    };
    projectData();
  }, [router.query.id, wallet.address, wallet.network, project.owner, UPDATES]);

  useEffect(() => {
    const timer = setTimeout(() => {
      blockNumber < project.fundingEnd && setBlockNumber(blockNumber + 1);
    }, 3000);

    return () => {
      clearInterval(timer);
    };
  }, [blockNumber, project.fundingEnd]);

  const checkWallet = () => {
    if (!wallet.address) {
      setToastContent({
        content: "먼저 지갑을 연결해 주세요.",
        type: "danger",
      });
      setIsToast(true);
      return false;
    }

    return true;
  };

  const fundingHandler = async (id: string) => {
    if (!checkWallet()) return;
    if (amount === 0) {
      setToastContent({
        content: "펀딩 금액을 입력해 주세요.",
        type: "primary",
      });
      setIsToast(true);
      return;
    }

    setIsLoading(true);
    try {
      await fundContract.methods.funding(id).send({
        from: wallet.address,
        gas: 10000000,
        value: hexBalance(amount),
      });
    } catch (err) {
      console.log(err);
      setToastContent({
        content: "에러! 펀딩이 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      setIsLoading(false);
      return;
    }

    setIsLoading(false);
    setUPDATES(UPDATES + 1);
    setIsOpenFund(false);
    setAmount(0);
    setToastContent({
      content: "펀딩이 완료되었습니다.",
      type: "success",
    });
    setIsToast(true);
    return;
  };

  const passHandler = async (id: string) => {
    if (!checkWallet()) return;
    setIsLoading(true);
    try {
      await fundContract.methods.DAOMilestonPass(id, mileStoneStep).send({
        from: wallet.address,
        gas: 10000000,
      });
    } catch (err) {
      console.log(err);
      setToastContent({
        content: "에러! 찬성 투표가 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      setIsLoading(false);
      return;
    }

    setUPDATES(UPDATES + 1);
    setIsLoading(false);
    setIsOpenVote(false);
    setToastContent({
      content: "찬성 투표가 완료되었습니다.",
      type: "success",
    });
    setIsToast(true);
    return;
  };

  const rejectHandler = async (id: string) => {
    if (!checkWallet()) return;
    setIsLoading(true);
    try {
      await fundContract.methods.DAOMilestonReject(id, mileStoneStep).send({
        from: wallet.address,
        gas: 10000000,
      });
    } catch (err) {
      console.log(err);
      setToastContent({
        content: "에러! 반대 투표가 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      setIsLoading(false);
      return;
    }

    setUPDATES(UPDATES + 1);
    setIsLoading(false);
    setIsOpenVote(false);
    setToastContent({
      content: "반대 투표가 완료되었습니다.",
      type: "danger",
    });
    setIsToast(true);
    return;
  };

  const interHandler = async () => {
    if (!checkWallet()) return;
    setIsLoading(true);
    try {
      await fundContract.methods
        .interMediatePayment(router.query.id, mileStoneStep)
        .send({
          from: wallet.address,
          gas: 1000000,
        });
    } catch (err) {
      console.log(err);
      setToastContent({
        content: "중도금 출금이 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      setIsLoading(false);
      return;
    }

    setUPDATES(UPDATES + 1);
    setIsLoading(false);
    setToastContent({
      content: "중도금 출금이 완료되었습니다.",
      type: "success",
    });
    setIsToast(true);
    return;
  };

  const refundHandler = async () => {
    if (!checkWallet()) return;
    setIsLoading(true);
    try {
      await fundContract.methods.Refund(router.query.id).send({
        from: wallet.address,
        gas: 1000000,
      });
    } catch (err) {
      console.log(err);
      setToastContent({
        content: "환불이 취소되었습니다.",
        type: "danger",
      });
      setIsToast(true);
      setIsLoading(false);
      return;
    }

    setUPDATES(UPDATES + 1);
    setIsLoading(false);
    setToastContent({
      content: "환불이 완료되었습니다.",
      type: "success",
    });
    setIsToast(true);
    return;
  };

  const closeHandler = () => {
    setIsOpenFund(false);
    setAmount(0);
    return;
  };

  const statusChanger = (num: number) => {
    if (num + 1 > 6 || num - 1 < -1) return;
    setIsStatus(num);
    return;
  };

  const buttonHanlder = async () => {
    if (Number(isStatus) === 0) return;
    if (Number(isStatus) === 1) return setIsOpenFund(true);
    if (Number(isStatus) === 2)
      return isOwner ? interHandler() : setIsOpenVote(true);
    if (Number(isStatus) === 3) return isOwner && interHandler();

    return !isOwner && refundHandler();
  };

  const stats = [
    "펀딩 예정",
    "펀딩중",
    "마일스톤 중",
    "완료",
    "환불중",
    "환불중",
  ];

  if (isLoadingProject) return <LoadingPage />;

  return (
    <>
      {isOpenFund && (
        <FundingModal
          isLoading={isLoading}
          id={router.query.id}
          amount={amount}
          onChangeAmount={onChangeAmount}
          onFunding={fundingHandler}
          close={closeHandler}
        />
      )}
      {isOpenVote && (
        <VoteModal
          isLoading={isLoading}
          id={router.query.id}
          isVoted={isVoted}
          voting={project.fundingList[wallet.address.toUpperCase()]}
          onPass={passHandler}
          onReject={rejectHandler}
          close={() => setIsOpenVote(false)}
        />
      )}
      <div className="min-h-screen bg-slate-50 dark:bg-dark-600">
        <div className="max-w-[1200px] mx-auto pt-16 pb-40">
          <div className="flex justify-between items-center">
            <div className="text-3xl text-center font-medium flex items-center">
              <span
                className={clsx(
                  "px-4 py-2 w-28 rounded-lg text-base text-white mr-6",
                  isStatus <= 3 ? "bg-primary-active" : "bg-danger-active"
                )}
              >
                {stats[isStatus]}
              </span>
              <span className="font-bold">{data.title}</span>

              <div className="grid grid-cols-3 place-items-center py-0.5 bg-gray-500 text-white mx-6 rounded text-sm">
                <div
                  className="cursor-pointer hover:bg-gray-600 h-full pt-2 text-white"
                  onClick={() => statusChanger(Number(isStatus) - 1)}
                >
                  <AutoSVG
                    className="w-4 h-4 mx-1"
                    src="/media/icons/arrow-bottom.svg"
                  />
                </div>
                <span className="p-1.5">{isStatus}</span>
                <div
                  className="cursor-pointer hover:bg-gray-600 h-full pt-2 text-white"
                  onClick={() => statusChanger(Number(isStatus) + 1)}
                >
                  <AutoSVG
                    className="rotate-180 w-4 h-4 mx-1"
                    src="/media/icons/arrow-bottom.svg"
                  />
                </div>
              </div>

              <button
                type="button"
                className="text-sm border mr-4 p-2 rounded dark:border-dark-300 bg-gray-500 text-white hover:bg-gray-600"
                onClick={() => setIsOwner(!isOwner)}
              >
                임시 버튼 (오너)
              </button>
            </div>
            <div className="flex">
              <Button
                className="flex items-center bg-white dark:bg-dark shadow hover:bg-dark dark:hover:bg-dark-600 hover:text-white mr-4"
                onClick={() => {
                  if (Number(router.query.id) > 1)
                    router.push(`/funding/${Number(router.query.id) - 1}`);
                }}
              >
                <AutoSVG className="mr-2" src="/media/icons/arrow-left.svg" />
                <span className="pr-1">이전</span>
              </Button>
              <Button
                className="flex items-center bg-white dark:bg-dark shadow hover:bg-dark dark:hover:bg-dark-600 hover:text-white"
                onClick={() => {
                  if (Number(router.query.id) < isCount) {
                    router.push(`/funding/${Number(router.query.id) + 1}`);
                  } else {
                    setToastContent({
                      content: "마지막 펀딩입니다.",
                      type: "primary",
                    });
                    setIsToast(true);
                  }
                }}
              >
                <span className="pl-1">다음</span>
                <AutoSVG className="ml-2" src="/media/icons/arrow-right.svg" />
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-5 gap-6 pt-6">
            <div className="col-span-3">
              <div className="relative w-full h-96">
                <AutoImage
                  src={data.image_url || "/dummy/temp.png"}
                  alt="bnb"
                  className="object-cover rounded-xl"
                />
              </div>
            </div>
            <div className="col-span-2 flex flex-col text-center rounded-xl border dark:border-dark-300 bg-white dark:bg-dark">
              <div className="grid grid-cols-2 gap-4 p-6 items-center">
                <StatusCard
                  status={Number(isStatus)}
                  blockNumber={blockNumber}
                  project={project}
                  milestep={Number(mileStoneStep)}
                  milestones={mileStoneAry}
                />
              </div>

              {Number(isStatus) <= 1 ? (
                <div className="grid grid-cols-5 gap-4 px-8 py-3">
                  <div className="col-span-2 text-sm text-center dark:text-gray-300">
                    <p className="mt-1">펀딩 목표액</p>
                    <p className="mt-1">현재 단계</p>
                    <p className="mt-1">펀딩 기간</p>
                  </div>
                  <div className="col-span-3 text-left text-gray-dark:text-gray-400 text-sm">
                    <p className="mt-1">
                      {project.limitprice
                        ? accounting(replaceBalance(project.limitprice))
                        : 0}{" "}
                      BUSD
                    </p>
                    <p className="mt-1">
                      {Number(isStatus) === 0 ? "펀딩 대기중" : "펀딩 진행중"}
                    </p>
                    <p className="mt-1">
                      <span>{formatDateDot(new Date(data.created_at))}</span>
                      <span className="mx-0.5">~</span>
                      <span>
                        <>
                          {formatDateDot(
                            bnToDate(
                              data.created_at,
                              toDate(project.fundingEnd - project.fundingStart)
                            ) || new Date()
                          )}
                        </>
                      </span>
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {Number(isStatus) === 2 ? (
                <div className="grid grid-cols-5 gap-4 px-8 py-3">
                  <div className="col-span-2 text-sm text-center dark:text-gray-300">
                    <p className="mt-1">이전 단계</p>
                    <p className="mt-1">현재 단계</p>
                    <p className="mt-1">다음 단계</p>
                  </div>
                  <div className="col-span-3 text-left text-gray-dark:text-gray-400 text-sm">
                    <p className="mt-1">펀딩 완료</p>
                    <p className="mt-1">
                      마일스톤 {Number(mileStoneStep) + 1} 진행중
                    </p>
                    <p className="mt-1">
                      마일스톤 {Number(mileStoneStep) + 2} 시작
                    </p>
                  </div>
                </div>
              ) : (
                ""
              )}
              {Number(isStatus) >= 3 ? (
                <div className="grid grid-cols-5 gap-4 px-8 py-3">
                  <div className="col-span-2 text-sm text-center dark:text-gray-300">
                    <p className="mt-1">이전 단계</p>
                    <p className="mt-1">현재 단계</p>
                    <p className="mt-1">다음 단계</p>
                  </div>
                  <div className="col-span-3 text-left text-gray-dark:text-gray-400 text-sm">
                    <p className="mt-1">마일스톤 진행</p>
                    <p className="mt-1">프로젝트 종료</p>
                    <p className="mt-1">없음</p>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="p-8 pb-6 pt-4 mt-auto w-full">
                <Button
                  className={clsx(
                    "text-white w-full",
                    Number(isStatus) >= 4
                      ? "bg-danger hover:bg-danger-active disabled:bg-red-400"
                      : "bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400"
                  )}
                  onClick={buttonHanlder}
                  disabled={
                    Number(isStatus) === 0 ||
                    (Number(isStatus) === 3 && !isOwner) ||
                    (Number(isStatus) >= 4 && isOwner) ||
                    isLoading
                  }
                >
                  {Number(isStatus) === 0 ? <span>펀딩대기</span> : ""}
                  {Number(isStatus) === 1 ? (
                    isLoading ? (
                      <LoadingSpan content="펀딩중..." />
                    ) : (
                      <span>펀딩하기</span>
                    )
                  ) : (
                    ""
                  )}
                  {Number(isStatus) === 2 ? (
                    <span>
                      {isOwner ? (
                        isLoading ? (
                          <LoadingSpan content="중도금 받는중..." />
                        ) : (
                          "중도금 받기"
                        )
                      ) : isLoading ? (
                        <LoadingSpan content="투표중..." />
                      ) : (
                        "투표하기"
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                  {Number(isStatus) === 3 ? (
                    <span>
                      {isOwner ? (
                        isLoading ? (
                          <LoadingSpan content="자금 받는중..." />
                        ) : (
                          "자금 받기"
                        )
                      ) : (
                        "프로젝트 완료"
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                  {Number(isStatus) >= 4 ? (
                    <span>
                      {isOwner ? (
                        "환불 진행중"
                      ) : isLoading ? (
                        <LoadingSpan content="환불 받는중..." />
                      ) : (
                        "환불 받기"
                      )}
                    </span>
                  ) : (
                    ""
                  )}
                </Button>
                {(isOwner && Number(isStatus) === (2 || 3)) ||
                (!isOwner && Number(isStatus) >= 4) ? (
                  <span className="mt-2 text-xs ml-2">
                    ※ 자금을 수령 시 수수료 2.5%를 제하고 받습니다.
                  </span>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-6 pt-4">
            <div className="col-span-2 -mt-10">
              <nav className="inline-flex flex-row bg-white dark:bg-dark dark:border-dark-300 border border-b-0 rounded rounded-b-none">
                <button
                  type="button"
                  onClick={() => setTabIndex(0)}
                  className={clsx(
                    "text-gray-dark:text-gray-400 w-40 py-4 px-6 block hover:text-blue-500 focus:outline-none",
                    tabIndex === 0 &&
                      "font-medium border-b-2 border-blue-500 dark:border-primary"
                  )}
                >
                  프로젝트 소개
                </button>
                <button
                  type="button"
                  onClick={() => setTabIndex(1)}
                  className={clsx(
                    "text-gray-dark:text-gray-400 w-40 py-4 px-6 block hover:text-blue-500 focus:outline-none",
                    tabIndex === 1 &&
                      "font-medium border-b-2 border-blue-500 dark:border-primary"
                  )}
                >
                  마일스톤
                </button>
                {isOwner ? (
                  <button
                    type="button"
                    onClick={() => setTabIndex(2)}
                    className={clsx(
                      "text-gray-dark:text-gray-400 w-40 py-4 px-6 block hover:text-blue-500 focus:outline-none",
                      tabIndex === 2 &&
                        "font-medium border-b-2 border-blue-500 dark:border-primary"
                    )}
                  >
                    펀딩 현황
                  </button>
                ) : (
                  ""
                )}
              </nav>
              <Card
                className={clsx(
                  "border p-6 bg-white dark:text-gray-300 dark:border-dark-300 rounded-tl-none rounded-xl",
                  tabIndex === 0 ? "dark:bg-dark-400" : "dark:bg-dark"
                )}
              >
                {tabIndex === 0 ? (
                  <div className="leading-relaxed" data-color-mode={theme}>
                    <MarkdownPreview source={data.content} />
                  </div>
                ) : (
                  ""
                )}
                {tabIndex === 1 ? (
                  <MilestoneUser
                    mileData={data.milestone}
                    blockNumber={blockNumber}
                    isOwner={isOwner}
                    dao={daoAry}
                    milestones={mileStoneAry}
                  />
                ) : (
                  ""
                )}
                {tabIndex === 2 ? (
                  <FundingTable fundingList={project.fundingList} />
                ) : (
                  ""
                )}
              </Card>
            </div>
            <Card className="self-start border mt-5 bg-white dark:bg-dark dark:border-dark-300 rounded-xl">
              <h3 className="text-xs font-medium text-gray-dark:text-gray-400 px-6 pt-4">
                프로젝트 생성자 정보
              </h3>
              <div className="mt-3 px-6 pb-4 border-b dark:border-dark-300">
                <div className="flex items-center">
                  <div className="relative w-7 h-7 mr-2">
                    <AutoImage
                      className="rounded-full object-cover border"
                      src={profileData?.image_url || "/media/avatars/blank.svg"}
                      alt="icon"
                    />
                  </div>
                  <div className="text-sm font-medium mr-2">
                    {profileData?.nickname || "이름없음"}
                  </div>
                  <div className="text-xs">
                    {shortAddress(project?.owner) ||
                      "0x0000000000000000000000000000000000000000"}
                  </div>
                </div>
                <p className="mt-2 text-xs">{profileData?.content}</p>
              </div>
              <div className="grid grid-cols-2 text-center">
                <div className="border-r dark:border-dark-300">
                  <p className="text-xs my-2">프로젝트 수</p>
                  <p className="pb-3">{projectCount || 1}</p>
                </div>
                <div>
                  <p className="text-xs my-2">받은 펀딩 금액</p>
                  <p className="pb-3">
                    {Number(
                      (replaceBalance(project.totalFundamount) || 0).toFixed(5)
                    )}{" "}
                    BUSD
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
