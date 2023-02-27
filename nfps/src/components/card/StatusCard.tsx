import React, { FC } from "react";
import {
  accounting,
  progressing,
  progressingCSS,
  replaceBalance,
  toDate,
  toHours,
  zeroCount,
} from "utils";
import { IProject } from "stores";

interface Props {
  status: number;
  blockNumber: number;
  project: IProject;
  milestep: number;
  milestones: string[][];
}

const StatusCard: FC<Props> = ({
  status,
  blockNumber,
  project,
  milestep,
  milestones,
}) => {
  const baseBN = () => {
    if (status === 0) return project.fundingStart;
    if (status === 1) return project.fundingEnd;
    if (status === 2) {
      let num;
      try {
        num = Number(milestones[milestep][1]);
      } catch {
        num = blockNumber;
      }
      return num;
    }
    if (status >= 3) return blockNumber;
    return 0;
  };

  const current = () => {
    if (status === 0) return "펀딩 시작까지";
    if (status === 1) return "펀딩 종료까지";
    if (status === 2) return `마일스톤 ${milestep + 1} 마감까지`;
    if (status === 3) return "프로젝트 완료됨";
    if (status === 4) return "마일스톤 도중 중단됨";
    if (status === 5) return "펀딩 중단됨";
  };

  return (
    <>
      <div className="mt-4">
        <label className="text-gray-600 dark:text-gray-400">펀딩 금액</label>
        <p className="mt-2">
          <span className="text-3xl mr-1">
            {Number(replaceBalance(project?.totalFundamount).toFixed(5))}
          </span>
          <span className="text-gray-600 dark:text-gray-400">BUSD</span>
        </p>
      </div>
      <div className="mt-4">
        <label className="text-gray-600 dark:text-gray-400">후원자 수</label>
        <p className="mt-2">
          <span className="text-3xl mr-1">
            {accounting(Object.keys(project?.fundingList)?.length) || 0}
          </span>
          <span className="text-gray-600 dark:text-gray-400">명</span>
        </p>
      </div>
      <div className="mt-8">
        <label className="text-gray-600 dark:text-gray-400">{current()}</label>
        <div className="text-gray-dark:text-gray-400 mt-1">
          {toDate(baseBN() - blockNumber) >= 1 ? (
            <>
              <span className="text-black dark:text-gray-300 text-3xl mr-1">
                {zeroCount(toDate(baseBN() - blockNumber))}
              </span>
              일
            </>
          ) : (
            <>
              <span className="text-black dark:text-gray-300 text-3xl mr-1">
                {zeroCount(toHours(baseBN() - blockNumber))}
              </span>
              시간
            </>
          )}

          <div className="mt-2">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://bscscan.com/blocks"
              className="text-gray-500 dark:text-gray-300 hover:text-blue-500 hover:underline"
            >
              {accounting(zeroCount(baseBN() - blockNumber))}
            </a>
            <span className="dark:texta-gray-500 text-sm ml-1">블록</span>
          </div>
        </div>
      </div>
      {status < 2 ? (
        <div className="mt-8">
          <label className="text-gray-600 dark:text-gray-400">
            펀딩 달성률
          </label>
          <div className="mt-3">
            <span className="text-blue-600 text-3xl mr-1">
              {progressing(project?.totalFundamount, project?.limitprice) || 0}
            </span>
            %
          </div>
          <div className="mt-3 flex items-center">
            <div className="w-full h-3 mb-1 bg-blue-200 rounded-sm">
              <div
                style={{
                  width: `${progressingCSS(
                    project?.totalFundamount,
                    project?.limitprice
                  )}%`,
                }}
                className="h-full text-center text-xs text-white bg-blue-600 rounded-sm"
              />
            </div>
          </div>
        </div>
      ) : (
        <div className="mt-8">
          <label className="text-gray-600 dark:text-gray-400">투표 현황</label>
          <div className="mt-3 flex justify-center items-center">
            <p className="text-blue-600 text-3xl mr-1">
              {Number(
                progressing(project?.daoPass, project?.totalFundamount).toFixed(
                  2
                )
              ) || 0}
            </p>
            <p className="mx-2">:</p>
            <p className="text-red-600 text-3xl mr-1">
              {Number(
                progressing(
                  project?.daoReject,
                  project?.totalFundamount
                ).toFixed(2)
              ) || 0}
            </p>
          </div>
          <div className="mt-3 flex items-center">
            <div className="w-full flex items-center justify-between h-3 mb-1 bg-gray-300 rounded-sm">
              <div
                style={{
                  width: `${progressing(
                    project?.daoPass,
                    project?.totalFundamount
                  )}%`,
                }}
                className="h-full bg-blue-600 rounded-l-sm"
              />
              <div
                style={{
                  width: `${progressing(
                    project?.daoReject,
                    project?.totalFundamount
                  )}%`,
                }}
                className="h-full bg-red-600 rounded-r-sm"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export { StatusCard };
