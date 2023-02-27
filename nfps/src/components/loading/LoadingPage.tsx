import React, { FC } from "react";
import { AutoSVG } from "utils";

const LoadingPage: FC = () => {
  return (
    <div className="min-h-screen bg-slate-50 dark:bg-dark-600">
      <div className="max-w-[1200px] mx-auto pt-16 pb-40">
        <div className="w-1/4 bg-white dark:bg-dark dark:border-dark-300 p-4 border rounded flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-1 h-5 mr-2 bg-dark rounded-sm" />
            <p>로딩중 입니다...</p>
          </div>
          <div className="animate-spin">
            <AutoSVG className="w-6 h-6" src="/media/icons/spinner.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export { LoadingPage };
