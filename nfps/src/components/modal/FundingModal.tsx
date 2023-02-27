import React, {
  FC,
  ChangeEventHandler,
  MouseEventHandler,
  useState,
} from "react";

/* Component */
import { Button } from "components/asset/button";
import { AutoSVG } from "utils";

interface Props {
  id: string | string[] | undefined;
  isLoading: boolean;
  amount: number;
  onChangeAmount: ChangeEventHandler<HTMLInputElement>;
  onFunding: any;
  close: MouseEventHandler<HTMLButtonElement>;
}

const FundingModal: FC<Props> = ({
  id,
  isLoading,
  amount,
  onChangeAmount,
  onFunding,
  close,
}) => {
  const [isCheck, setIsCheck] = useState<boolean>(false);
  return (
    <>
      <div className="py-12 bg-gray-700/50 dark:bg-dark-700/50 transition duration-150 ease-in-out z-30 fixed top-0 right-0 bottom-0 left-0">
        <div className="container mx-auto w-11/12 md:w-2/3 max-w-lg">
          <div className="relative py-4 px-1 md:px-3 bg-white dark:bg-dark-500 shadow-md rounded border dark:border-dark-300 border-gray-400">
            <div className="py-4 px-4 md:px-7">
              <div className="text-center">
                <div className="mt-2 mb-5 text-2xl font-bold">
                  펀딩 직전 유의사항
                </div>

                <div className="mt-3 mb-5 text-left text-sm px-4 py-2 border dark:text-gray-400 dark:border-dark-300 border-gray-400 rounded">
                  <p className="mt-1 leading-loose">
                    NPFS는 중앙화된 중개인이 없는 블록체인 탈중앙 플랫폼으로
                    사용자는 스스로의 책임과 판단으로 다른 사용자들이 생성한
                    블록체인 상의 스마트 계약을 통해 펀딩에 참여하게 됩니다.
                  </p>
                  <p className="mt-1 leading-loose">
                    NPFS 웹사이트에서 확인되는 모든 프로젝트는 개별 심사를
                    거치지 않고 사용자가 자율 등록한 프로젝트로 Metaoneer 팀에서
                    안전성을 보증하지 않습니다.
                  </p>
                </div>
              </div>

              <div className="mt-2">
                <label
                  htmlFor="name"
                  className="text-gray-800 dark:text-gray-400 text-sm font-bold leading-tight tracking-normal"
                >
                  펀딩 금액<span className="ml-2 text-xs">( 단위 : BNB )</span>
                </label>
                <input
                  type="number"
                  value={amount}
                  onChange={onChangeAmount}
                  className="mb-5 mt-2 px-2 text-gray-600 dark:bg-dark-400 dark:text-gray-400 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-400 rounded border"
                  placeholder="0"
                />
              </div>

              <div className="mt-2">
                <div
                  onClick={() => {
                    !isLoading && setIsCheck(!isCheck);
                  }}
                  className="mb-5 px-2 cursor-pointer text-gray-700 dark:text-gray-400 flex items-center pl-3 text-sm dark:border-dark-300 border-gray-400 rounded border"
                >
                  <input
                    type="checkbox"
                    onChange={() => setIsCheck(!isCheck)}
                    checked={isCheck}
                    disabled={isLoading}
                    className="w-6 h-6"
                  />
                  <p className="ml-1 p-2">
                    위험 요소에 대해 충분히 이해하였으며, 이에 동의하고 서비스를
                    사용함을 확인합니다.
                  </p>
                </div>
              </div>

              <div className="mt-6 flex justify-center text-sm">
                <Button
                  className="w-20 mr-2 rounded text-center font-bold text-white bg-gray-500 hover:bg-gray-600 dark:border-dark-300 disabled:bg-gray-400"
                  onClick={close}
                  disabled={isLoading}
                >
                  <span>취소</span>
                </Button>
                <Button
                  className="w-40 rounded text-center font-bold text-white bg-indigo-700 hover:bg-indigo-900 disabled:bg-indigo-400"
                  onClick={() => onFunding(String(id))}
                  disabled={!isCheck || isLoading}
                >
                  {!isLoading ? (
                    <span>펀딩하기</span>
                  ) : (
                    <span className="flex items-center justify-center">
                      <span className="mr-2">펀딩 진행중...</span>
                      <div className="animate-spin">
                        <AutoSVG
                          src="/media/icons/spinner.svg"
                          className="w-5 h-5"
                        />
                      </div>
                    </span>
                  )}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { FundingModal };
