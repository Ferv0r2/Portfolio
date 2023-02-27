import React, { FC } from "react";
import { AutoSVG } from "utils";

const LoadingCard: FC = () => {
  return (
    <div className="bg-white dark:bg-dark dark:border-dark-300 p-4 border rounded flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-1 h-5 mr-2 bg-dark rounded-sm" />
        <p>로딩중 입니다...</p>
      </div>
      <div className="animate-spin">
        <AutoSVG className="w-6 h-6" src="/media/icons/spinner.svg" />
      </div>
    </div>
  );
};

export { LoadingCard };
