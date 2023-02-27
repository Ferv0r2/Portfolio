import React, { FC } from "react";
import { v1 } from "uuid";

/* Component */
import { Badge } from "components/asset/badge";
import { AutoSVG, formatDateSlash } from "utils";

/* State */
import { useRecoilState } from "recoil";
import { IMilestone, milestoneState } from "stores";

const Milestone: FC<IMilestone> = ({
  keyID,
  title,
  content,
  price,
  startDate,
  expired,
}) => {
  const [milestoneArray, setMilestoneArray] = useRecoilState(milestoneState);

  const deleteHandler = () => {
    setMilestoneArray(milestoneArray.filter((v) => v.keyID !== keyID));
  };

  return (
    <div className="relative">
      <div
        className="absolute right-0 p-4 group cursor-pointer"
        onClick={deleteHandler}
      >
        <AutoSVG
          src="/media/icons/close.svg"
          className="group-hover:text-danger"
        />
      </div>
      <div className="rounded-lg border shadow bg-white dark:bg-dark dark:border-dark-300">
        <div className="mt-1 px-6 py-4 border-b dark:border-dark-300">
          <div className="flex items-center">
            <Badge className="w-16 text-center bg-blue-600 mr-3">시작 전</Badge>
            <div className="w-full text-xl font-medium truncate">{title}</div>
          </div>
          <div className="text-gray-500 dark:text-gray-400 text-sm mt-4">
            <div className="h-20 grid grid-cols-2 gap-x-4 px-2">
              {content.map((v: any) => (
                <div key={v1()} className="flex items-center">
                  <div className="w-1 h-4 bg-black mr-2 rounded" />
                  <div className="truncate">{v}</div>
                </div>
              ))}
            </div>
            <div className="text-sm">
              중도금 비율 :
              <span className="text-lg mx-1 text-blue-600 font-medium">
                {price}
              </span>{" "}
              %
            </div>
          </div>
        </div>
        <div className="px-6 py-4 flex justify-between items-center text-gray-500 dark:text-gray-400 text-sm">
          <span>{formatDateSlash(new Date(startDate))}</span>
          <span>~</span>
          <span>{formatDateSlash(new Date(expired))}</span>
        </div>
      </div>
    </div>
  );
};

export { Milestone };
