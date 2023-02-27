import React, { FC, useState } from "react";
import { v1 } from "uuid";

/* Component */
import { MilestoneUserModal } from "components/modal/MilestoneUserModal";
import { accounting, toDate, zeroCount } from "utils";
import { IMileData } from "api/APIModel";

interface Props {
  mileData: IMileData[];
  blockNumber: number;
  isOwner: boolean;
  dao: string[][];
  milestones: string[][];
}

const MilestoneUser: FC<Props> = ({
  mileData,
  blockNumber,
  isOwner,
  dao,
  milestones,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isIndex, setIsIndex] = useState<number>(0);

  const openModalHandler = (index: number) => {
    setIsOpen(true);
    setIsIndex(index);
  };

  return (
    <>
      {isOpen ? (
        <MilestoneUserModal
          mileData={mileData[isIndex]}
          price={Number(milestones[isIndex][3])}
          startBN={Number(milestones[isIndex][0])}
          endBN={Number(milestones[isIndex][1])}
          isOwner={isOwner}
          isIndex={isIndex}
          close={() => setIsOpen(false)}
        />
      ) : (
        ""
      )}
      <div className="relative">
        {milestones.length > 0 ? (
          <>
            <div className="left-3 absolute border-opacity-20 border-indigo-400 h-full border-4" />
            {milestones.map((v: any, i: number) => (
              <div key={v1()} className="my-4 flex items-center">
                <div className="z-10 flex mr-12 items-center bg-indigo-600 shadow-xl w-8 h-8 rounded-full">
                  <h1 className="mx-auto font-semibold text-lg text-white">
                    {i + 1}
                  </h1>
                </div>
                <div
                  onClick={() => openModalHandler(i)}
                  className="rounded-lg border dark:bg-dark-700 dark:border-dark-300 shadow-lg w-2/3 p-6 cursor-pointer hover:bg-gray-50 dark:hover:bg-dark-600 hover:shadow-none"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      {blockNumber < v[0] ? (
                        <div className="inline px-3 py-1.5 text-sm font-medium rounded bg-primary dark:bg-primary-active mr-2 text-white">
                          시작 전
                        </div>
                      ) : (
                        ""
                      )}

                      {blockNumber > v[0] && blockNumber < v[1] ? (
                        <div className="inline px-3 py-1.5 text-sm font-medium rounded bg-warning dark:bg-warning-active mr-2 text-white">
                          진행중
                        </div>
                      ) : (
                        ""
                      )}
                      {blockNumber > v[1] ? (
                        <div className="inline px-3 py-1.5 text-sm font-medium rounded bg-info dark:bg-info-active mr-2 text-white">
                          완료
                        </div>
                      ) : (
                        ""
                      )}
                      {blockNumber > v[1] && dao[0][i] > dao[1][i] ? (
                        <div className="inline px-3 py-1.5 text-sm font-medium rounded bg-success dark:bg-success-active text-white">
                          지향
                        </div>
                      ) : (
                        ""
                      )}
                      {blockNumber > v[1] && dao[0][i] < dao[1][i] ? (
                        <div className="inline px-3 py-1.5 text-sm font-medium rounded bg-success dark:bg-success-active text-white">
                          지양
                        </div>
                      ) : (
                        ""
                      )}
                      <h3 className="mt-3 font-bold text-gray-800 dark:text-gray-300 text-xl truncate">
                        마일스톤 {i + 1}
                      </h3>
                    </div>
                    <div className="text-sm text-center text-gray-600">
                      <span className="text-black dark:text-gray-300 text-3xl mr-1">
                        {zeroCount(toDate(v[0] - blockNumber))}
                      </span>
                      일
                      <div className="mt-1">
                        <a
                          target="_blank"
                          rel="noreferrer"
                          href="https://bscscan.com/blocks"
                          className="text-gray-500 hover:text-blue-500 hover:underline"
                        >
                          {accounting(zeroCount(v[0] - blockNumber))}
                        </a>
                        <span className="text-sm ml-1">블록</span>
                      </div>
                    </div>
                  </div>
                  <p className="mt-3 text-sm leading-snug tracking-wide text-gray-900 dark:text-dark-300 truncate-3-lines">
                    {mileData[i].title}
                  </p>
                  <div className="mt-3 flex items-center text-gray-600">
                    <div className="font-medium mr-2">중도금의</div>
                    <span className="text-blue-600 text-2xl mr-1">{v[3]}</span>
                    <span className="mt-1 text-sm">%</span>
                  </div>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div className="bg-white dark:bg-dark  p-4 rounded flex items-center">
            <div className="flex items-center">
              <div className="w-1 h-5 mr-2 bg-dark rounded-sm" />
              <p>마일스톤이 없습니다...</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export { MilestoneUser };
