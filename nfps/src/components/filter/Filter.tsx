import React, { Dispatch, FC, SetStateAction } from "react";
import { AutoSVG } from "utils";

interface Props {
  status: number;
  detail: number;
  setStatus: Dispatch<SetStateAction<number>>;
  setDetail: Dispatch<SetStateAction<number>>;
}

const Filter: FC<Props> = ({ status, detail, setStatus, setDetail }) => {
  return (
    <div className="flex items-center rounded border border-gray-200 dark:border-dark-300 bg-white dark:bg-dark">
      <div className="flex items-center bg-dark dark:bg-dark-600 text-white rounded-l p-6">
        <AutoSVG className="w-6 h-6 mr-2" src="/media/icons/filter.svg" />
        <span className="pr-1">필터</span>
      </div>
      <div className="text-sm pl-10 flex items-center">
        <div className="mr-2">상태별 :</div>
        <select
          onChange={(e: any) => setStatus(e.target.value)}
          value={status}
          className="bg-[length:20px_20px] bg-no-repeat bg-[center_right_12px] bg-[url('/media/icons/dropdown.svg')] appearance-none text-sm border border-gray-400 dark:border-dark-300 dark:bg-dark-400 rounded px-6 py-2 w-36"
        >
          <option value={0}>펀딩 투자액</option>
          <option value={1}>펀딩 목표액</option>
          <option value={2}>펀딩 생성</option>
        </select>
      </div>
      <div className="text-sm pl-10 flex items-center">
        <div className="mr-2">{filterItems[status].label} : </div>
        <select
          onChange={(e: any) => setDetail(e.target.value)}
          value={detail}
          className="bg-[length:20px_20px] w-28 bg-no-repeat bg-[center_right_12px] bg-[url('/media/icons/dropdown.svg')] appearance-none text-sm border border-gray-400 dark:border-dark-300 dark:bg-dark-400 rounded px-6 py-2"
        >
          {filterItems[status].option.map((opt, i) => (
            <option key={opt} value={i}>
              {opt}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export { Filter };

const filterItems = [
  {
    label: "투자 금액",
    option: ["많은 순", "적은 순"],
  },
  {
    label: "목표 금액",
    option: ["높은 순", "낮은 순"],
  },
  {
    label: "기간",
    option: ["최신순", "오래된순"],
  },
];
