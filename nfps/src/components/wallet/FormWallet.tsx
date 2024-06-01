import React, { FC } from "react";

/* Component */
import { AutoSVG, shortAddress } from "utils";

interface Props {
  address: string;
}

const FormWallet: FC<Props> = ({ address }) => {
  return (
    <div className="mt-6">
      <div className="font-semibold">지갑주소</div>
      <div className="mt-2">
        <div className="flex items-center bg-neutral-100 dark:bg-dark-400 p-3 rounded border border-gray-400 dark:border-dark-300">
          <div className="flex items-center gap-x-2">
            <AutoSVG
              src="/media/social-logos/metamask.svg"
              className="w-5 h-5 mx-2"
            />
            <span className="font-semibold">
              {shortAddress(address) || "Please connect your wallet first."}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export { FormWallet };
