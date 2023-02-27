import React, { FC } from "react";
import { AutoImage } from "utils";

const Spinner: FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50">
      <div className="grid place-items-center h-full">
        <div>
          <div>
            <div className="relative w-12 h-12 animate-spin mx-auto">
              <AutoImage src="/media/icons/spinner.svg" alt="loading" />
            </div>
          </div>
          <h2 className="font-bold text-xl mt-6">로딩중 입니다...</h2>
        </div>
      </div>
    </div>
  );
};

export { Spinner };
