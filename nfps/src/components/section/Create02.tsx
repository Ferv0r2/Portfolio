import React, {
  Dispatch,
  FC,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import { useQuery } from "react-query";
import clsx from "clsx";

/* API */
import { CheckProfileAPI } from "api";

/* Component */
import { Button } from "components/asset/button";
import { Card } from "components/asset/card";
import { Wallet } from "components/blockchain";
import { ProductCard } from "components/card/ProductCard";
import { MainCard } from "components/card/MainCard";
import { FormWallet } from "components/wallet/FormWallet";
import {
  accounting,
  AutoImage,
  AutoSVG,
  formatDateDot,
  shortAddress,
  toDate,
} from "utils";

/* State */
import { useRecoilValue } from "recoil";
import { milestoneState } from "stores";

interface Props {
  wallet: Wallet;
  isLoading: boolean;
  title: string;
  image: string;
  content: string;
  price: number;
  startDate: Date;
  endDate: Date;
  expired: number;
  setIsTap: Dispatch<SetStateAction<number>>;
  registerHandler: MouseEventHandler<HTMLButtonElement>;
}

const Create02: FC<Props> = ({
  wallet,
  isLoading,
  title,
  image,
  content,
  price,
  startDate,
  endDate,
  expired,
  setIsTap,
  registerHandler,
}) => {
  const { data } = useQuery(
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
  const milestoneArray = useRecoilValue(milestoneState);
  const [isOpen, setIsOpen] = useState<number>(0);
  const [tabIndex, setTabIndex] = useState<number>(0);

  const openHandler = (tapIndex: number) => {
    if (isOpen === tapIndex) {
      setIsOpen(-1);
    } else {
      setIsOpen(tapIndex);
    }
  };

  return (
    <div>
      <div className="mt-8 px-8">
        <div className={isOpen === 0 ? "dark:bg-dark-600" : ""}>
          <div
            className={clsx(
              "flex justify-between shadow p-4 transition-colors duration-300",
              isOpen === 0
                ? "rounded bg-dark dark:bg-black/50 text-white"
                : "hover:bg-gray-700 dark:hover:bg-dark-300 hover:text-white"
            )}
            onClick={() => {
              openHandler(0);
            }}
          >
            <span>홈 화면 데모</span>
            <div
              className={clsx(
                "transition-transform rotate-90 duration-300",
                isOpen === 0 && "rotate-0"
              )}
            >
              <AutoSVG src="/media/icons/dropdown.svg" className="w-6 h-6" />
            </div>
          </div>
          {isOpen === 0 ? (
            <div
              className={clsx(
                "py-8 w-4/5 mx-auto animate__animated animate__fast",
                isOpen === 0 ? "animate__fadeIn" : "animate__fadeOut"
              )}
            >
              <MainCard
                title={title}
                content={content}
                imgURI={image}
                name={data?.nickname || "이름없음"}
                creator={wallet.address || "Connect Wallet"}
                progress={0}
                amount={0}
                expired={expired}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={isOpen === 1 ? "dark:bg-dark-600" : ""}>
          <div
            className={clsx(
              "flex justify-between shadow p-4 transition-colors duration-300",
              isOpen === 1
                ? "rounded bg-dark dark:bg-black/50 text-white"
                : "hover:bg-gray-700 dark:hover:bg-dark-300 hover:text-white"
            )}
            onClick={() => openHandler(1)}
          >
            <span>펀딩 목록 데모</span>
            <div
              className={clsx(
                "transition-transform rotate-90 duration-300",
                isOpen === 1 && "rotate-0"
              )}
            >
              <AutoSVG src="/media/icons/dropdown.svg" className="w-6 h-6" />
            </div>
          </div>

          {isOpen === 1 ? (
            <div
              className={clsx(
                "py-8 w-72 mx-auto group cursor-pointer my-4 animate__animated animate__fast",
                isOpen === 1 ? "animate__fadeIn" : "animate__fadeOut"
              )}
            >
              <ProductCard
                name={data?.nickname || "이름없음"}
                title={title}
                content={content}
                imgURI={image}
                creator={wallet.address || "Connect Wallet"}
                progress={0}
                amount={0}
                expired={expired}
              />
            </div>
          ) : (
            ""
          )}
        </div>
        <div className={isOpen === 2 ? "dark:bg-dark-600" : ""}>
          <div
            className={clsx(
              "flex justify-between shadow p-4 transition-colors duration-300",
              isOpen === 2
                ? "rounded bg-dark dark:bg-black/50 text-white"
                : "hover:bg-gray-700 dark:hover:bg-dark-300 hover:text-white"
            )}
            onClick={() => openHandler(2)}
          >
            <span>펀딩 세부정보 화면 데모</span>
            <div
              className={clsx(
                "transition-transform rotate-90 duration-300",
                isOpen === 2 && "rotate-0"
              )}
            >
              <AutoSVG src="/media/icons/dropdown.svg" className="w-6 h-6" />
            </div>
          </div>
          {isOpen === 2 ? (
            <div
              className={clsx(
                "px-4 py-8 animate__animated animate__fast",
                isOpen === 2 ? "animate__fadeIn" : "animate__fadeOut"
              )}
            >
              <div className="flex justify-between items-center">
                <div className="text-lg text-center font-bold flex items-center">
                  <span className="px-4 py-2 text-xs rounded-lg bg-primary-active text-white mr-4">
                    펀딩예정
                  </span>
                  <span className="text-lg">{title || "타이틀"}</span>
                </div>
              </div>
              <div className="grid grid-cols-5 gap-6 pt-4">
                <div className="col-span-3">
                  <div className="relative w-full h-72">
                    <AutoImage
                      src={image || "/dummy/temp.png"}
                      alt="bnb"
                      className="object-cover rounded-xl"
                    />
                  </div>
                </div>
                <div className="col-span-2 flex flex-col text-center rounded-xl border bg-white dark:bg-dark dark:border-dark-300">
                  <div className="grid grid-cols-2 gap-4 p-4 items-center text-sm">
                    <div className="mt-4">
                      <label className="text-xs text-gray-600 dark:text-gray-400">
                        펀딩 금액
                      </label>
                      <p className="mt-2">
                        <span className="text-xl mr-1">
                          {accounting(0) || 0}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          BUSD
                        </span>
                      </p>
                    </div>
                    <div className="mt-4">
                      <label className="text-xs text-gray-600 dark:text-gray-400">
                        후원자 수
                      </label>
                      <p className="mt-2">
                        <span className="text-xl mr-1">
                          {accounting(0) || 0}
                        </span>
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          명
                        </span>
                      </p>
                    </div>
                    <div className="mt-2">
                      <label className="text-xs text-gray-600 dark:text-gray-400">
                        펀딩 시작까지
                      </label>
                      <div className="text-gray-600 dark:text-gray-400 mt-1">
                        <span className="text-black dark:text-white text-xl mr-1">
                          {toDate(expired)}
                        </span>
                        일
                        <div className="mt-2">
                          <a
                            target="_blank"
                            rel="noreferrer"
                            href="https://bscscan.com/blocks"
                            className="text-gray-500 text-xs hover:text-blue-500 hover:underline"
                          >
                            {accounting(Math.floor(expired / 3))}
                          </a>
                          <span className="text-xs ml-1">블록</span>
                        </div>
                      </div>
                    </div>
                    <div className="mt-2">
                      <label className="text-xs text-gray-600 dark:text-gray-400">
                        펀딩 달성률
                      </label>
                      <p className="mt-3">
                        <span className="text-blue-600 text-xl mr-1">30</span>%
                      </p>
                      <div className="mt-3 flex items-center">
                        <div className="w-full h-3 mb-1 bg-blue-200 rounded-sm">
                          <div
                            style={{
                              width: "30%",
                            }}
                            className="h-full text-center text-xs text-white bg-blue-600 rounded-sm"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-5 gap-4 px-8">
                    <div className="col-span-2 text-[8px] text-center">
                      <p>펀딩 목표액</p>
                      <p className="mt-1">현재 단계</p>
                      <p className="mt-1">펀딩 기간</p>
                    </div>
                    <div className="col-span-3 text-[8px] text-left text-gray-600 dark:text-gray-400 text-xs">
                      <p>{accounting(price)} BNB</p>
                      <p className="mt-1">펀딩 대기중</p>
                      <p className="mt-1">
                        {formatDateDot(startDate || new Date())} ~{" "}
                        {formatDateDot(endDate || new Date())}
                      </p>
                    </div>
                  </div>

                  <div className="px-8 p-4 mt-auto w-full">
                    <Button
                      className="bg-blue-600 text-white w-full text-xs p-2 disabled:bg-blue-400"
                      onClick={() => {}}
                      disabled
                    >
                      <span>펀딩대기</span>
                    </Button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-4 mt-4">
                <div className="col-span-2 -mt-12">
                  <nav className="inline-flex flex-row bg-white dark:bg-dark dark:border-dark-300 border border-b-0 rounded rounded-b-none">
                    <button
                      type="button"
                      onClick={() => setTabIndex(0)}
                      className={clsx(
                        "text-gray-600 dark:text-white text-xs w-32 py-2 px-3 block hover:text-blue-500 focus:outline-none",
                        tabIndex === 0 &&
                          "font-medium border-b-2 border-blue-500"
                      )}
                    >
                      프로젝트 소개
                    </button>
                    <button
                      type="button"
                      onClick={() => setTabIndex(1)}
                      className={clsx(
                        "text-gray-600 dark:text-white text-xs w-32 py-2 px-3 block hover:text-blue-500 focus:outline-none",
                        tabIndex === 1 &&
                          "font-medium border-b-2 border-blue-500"
                      )}
                    >
                      마일스톤
                    </button>
                  </nav>
                  <Card className="border p-6 bg-white dark:text-gray-300 dark:bg-dark dark:border-dark-300 rounded-tl-none text-sm rounded-xl">
                    {tabIndex === 0 ? (
                      <p className="leading-relaxed">{content}</p>
                    ) : (
                      <div className="relative">
                        {milestoneArray.map((v, i) => (
                          <div key={v.keyID} className="my-4 flex items-center">
                            <div className="z-10 flex mr-8 items-center bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
                              <h1 className="mx-auto font-semibold text-lg text-white">
                                {i + 1}
                              </h1>
                            </div>
                            <div className="rounded-lg border dark:bg-dark-700 dark:border-dark-300 shadow-lg w-2/3 p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-600 hover:shadow-none">
                              <div className="flex justify-between items-center">
                                <div>
                                  <div className="inline text-[8px] px-3 py-1.5 text-sm font-medium rounded bg-primary dark:bg-primary-active mr-2 text-white">
                                    시작 전
                                  </div>
                                  <h3 className="mt-3 font-bold text-gray-800 dark:text-gray-300 truncate">
                                    마일스톤 {i + 1}
                                  </h3>
                                </div>
                                <div className="text-xs text-center text-gray-600">
                                  <span className="text-black dark:text-gray-300 text-lg mr-1">
                                    {Math.round(
                                      (Number(v.expired) - Number(new Date())) /
                                        86400000
                                    )}
                                  </span>
                                  일
                                  <div className="mt-1">
                                    <a
                                      target="_blank"
                                      rel="noreferrer"
                                      href="https://bscscan.com/blocks"
                                      className="text-gray-500 text-xs hover:text-blue-500 hover:underline"
                                    >
                                      {accounting(expired)}
                                    </a>
                                    <span className="text-xs ml-1">블록</span>
                                  </div>
                                </div>
                              </div>
                              <p className="mt-3 text-sm leading-snug tracking-wide text-gray-900 dark:text-dark-300 truncate-3-lines">
                                {v.title}
                              </p>
                              <div className="mt-3 flex items-center text-gray-600">
                                <div className="font-medium mr-2 text-sm">
                                  중도금의
                                </div>
                                <span className="text-blue-600 mr-1">
                                  {v.price}
                                </span>
                                <span className="mt-1 text-sm">%</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    )}
                  </Card>
                </div>
                <Card className="self-start border -mt-3 bg-white dark:bg-dark dark:border-dark-300 rounded-xl">
                  <h3 className="text-xs font-medium text-gray-600 dark:text-gray-400 px-6 pt-4">
                    프로젝트 생성자 정보
                  </h3>
                  <div className="mt-3 px-6 pb-4 border-b dark:border-dark-300">
                    <div className="flex items-center">
                      <div className="relative w-7 h-7 mr-2">
                        <AutoImage
                          className="rounded-full border object-cover"
                          src={data?.image_url || "/media/avatars/blank.svg"}
                          alt="icon"
                        />
                      </div>
                      <div className="text-xs font-medium mr-1">
                        {data?.nickname || "이름없음"}
                      </div>
                      <div className="text-[8px]">
                        {shortAddress(wallet.address) || "Connect Wallet"}
                      </div>
                    </div>
                    <p className="mt-2 text-[8px]">
                      {data?.content || "프로필 소개"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 text-center">
                    <div className="border-r dark:border-dark-300">
                      <p className="text-xs my-2">프로젝트 수</p>
                      <p className="text-sm pb-3">0</p>
                    </div>
                    <div>
                      <p className="text-xs my-2">받은 펀딩 금액</p>
                      <p className="text-sm pb-3">0 BUSD</p>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>

        <FormWallet address={wallet.address} />
      </div>

      <div className="grid grid-cols-3 gap-4 p-8">
        <Button
          className="rounded py-4 text-center font-bold text-white disabled:bg-rose-400 bg-danger hover:bg-danger-active"
          onClick={() => setIsTap(0)}
          disabled={isLoading}
        >
          <span>이전 챕터로</span>
        </Button>
        <Button
          className="col-span-2 rounded py-4 text-center font-bold text-white disabled:bg-indigo-400 bg-indigo-700 hover:bg-indigo-900"
          onClick={registerHandler}
          disabled={isLoading}
        >
          {isLoading ? (
            <span className="flex items-center justify-center">
              <span className="mr-2">프로젝트 생성중...</span>
              <div className="animate-spin">
                <AutoSVG src="/media/icons/spinner.svg" className="w-6 h-6" />
              </div>
            </span>
          ) : (
            <span>프로젝트 생성 완료</span>
          )}
        </Button>
      </div>
    </div>
  );
};

export { Create02 };
