import React, { FC, ChangeEventHandler, MouseEventHandler } from "react";

/* Component */
import { Button } from "components/asset/button";
import { AutoSVG, replaceBalance } from "utils";
import clsx from "clsx";

interface Props {
  id: string | string[] | undefined;
  isVoted: number;
  isLoading: boolean;
  voting: number;
  onPass: any;
  onReject: any;
  close: MouseEventHandler<HTMLButtonElement>;
}

const VoteModal: FC<Props> = ({
  id,
  isLoading,
  isVoted,
  voting,
  onPass,
  onReject,
  close,
}) => {
  return (
    <>
      <div className="py-12 bg-gray-700/50 dark:bg-dark-700/50 transition duration-150 ease-in-out z-30 fixed top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-4 px-1 md:px-3 bg-white dark:bg-dark-500 shadow-md rounded border border-gray-400 dark:border-dark-300">
            <div className="py-4 px-4 md:px-7">
              <div className="text-center">
                <div className="mt-2 mb-5 text-2xl font-bold">
                  투표 직전 유의사항
                </div>

                <div className="mt-3 mb-5 text-left text-sm px-4 py-2 dark:text-gray-300 dark:border-dark-300 border border-gray-400 rounded">
                  <p className="mt-1 leading-loose">
                    본 투표는 각 마일스톤 단계가 마감될 때마다 진행됩니다.
                    <br></br>
                    본인의 펀딩 수량만큼 찬성 혹은 반대에 투표할 수 있습니다.
                  </p>
                  <p className="mt-1 leading-loose">
                    찬성의 수가 많은 경우 다음 마일스톤 스텝으로 넘어가며,
                    반대의 수가 많은 경우 프로젝트가 강제종료됩니다.
                  </p>
                  <p className="mt-1 leading-loose">
                    프로젝트가 강제종료되는 경우, 중도금을 제외한 나머지 금액을
                    비율만큼 환불받게 됩니다.
                  </p>
                </div>
              </div>

              <div>
                <div className="text-sm">
                  <span className="font-semibold mr-2">나의 투표권 수</span>
                  <span className="text-sm text-gray-600 dark:text-dark-300">
                    (펀딩 금액)
                  </span>
                </div>
                <div className="mt-2 flex items-center bg-neutral-100 dark:bg-dark-400 p-3 rounded border border-gray-400 dark:border-dark-300">
                  <span className="mx-2 font-medium text-lg">
                    {Number(replaceBalance(voting).toFixed(5))}
                  </span>
                  개
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {isVoted !== 0 ? (
                  <>
                    <Button
                      className={clsx(
                        "rounded text-center font-bold text-white ",
                        isVoted === 1
                          ? "bg-danger hover:bg-danger-active disabled:bg-red-400"
                          : "bg-indigo-700 hover:bg-indigo-900 disabled:bg-indigo-400"
                      )}
                      onClick={() =>
                        isVoted === 1
                          ? onReject(String(id))
                          : onPass(String(id))
                      }
                      disabled={isLoading}
                    >
                      {!isLoading ? (
                        <span>
                          {isVoted === 1
                            ? "반대로 변경하기"
                            : "찬성으로 변경하기"}
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <span className="mr-2">재투표 진행중...</span>
                          <div className="animate-spin">
                            <AutoSVG
                              src="/media/icons/spinner.svg"
                              className="w-5 h-5"
                            />
                          </div>
                        </span>
                      )}
                    </Button>
                    <Button
                      className="rounded text-center font-bold text-white bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400"
                      onClick={close}
                      disabled={isLoading}
                    >
                      <span>취소</span>
                    </Button>
                  </>
                ) : (
                  <>
                    <Button
                      className="rounded text-center font-bold text-white bg-indigo-700 hover:bg-indigo-900 disabled:bg-indigo-400"
                      onClick={() => onPass(String(id))}
                      disabled={isLoading}
                    >
                      {!isLoading ? (
                        <span>찬성하기</span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <span className="mr-2">투표 진행중...</span>
                          <div className="animate-spin">
                            <AutoSVG
                              src="/media/icons/spinner.svg"
                              className="w-5 h-5"
                            />
                          </div>
                        </span>
                      )}
                    </Button>
                    <Button
                      className="rounded text-center font-bold text-white bg-danger hover:bg-danger-active disabled:bg-red-400"
                      onClick={() => onReject(String(id))}
                      disabled={isLoading}
                    >
                      {!isLoading ? (
                        <span>반대하기</span>
                      ) : (
                        <span className="flex items-center justify-center">
                          <span className="mr-2">투표 진행중...</span>
                          <div className="animate-spin">
                            <AutoSVG
                              src="/media/icons/spinner.svg"
                              className="w-5 h-5"
                            />
                          </div>
                        </span>
                      )}
                    </Button>

                    <Button
                      className="col-span-2 rounded text-center font-bold text-white bg-gray-500 hover:bg-gray-600 disabled:bg-gray-400"
                      onClick={close}
                      disabled={isLoading}
                    >
                      <span>취소</span>
                    </Button>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { VoteModal };
