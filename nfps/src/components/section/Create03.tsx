import React, { FC } from "react";
import { useRouter } from "next/router";

/* Component */
import { Button } from "components/asset/button";
import { AutoSVG, shortAddress } from "utils";

interface Props {
  currentKey: string;
}

const Create03: FC<Props> = ({ currentKey }) => {
  const router = useRouter();

  return (
    <div>
      <div className="mt-8 px-8 text-center">
        <div className="font-bold text-2xl">
          프로젝트가 성공적으로 생성되었습니다!
        </div>
        <div className="p-4">
          <AutoSVG
            src="/media/icons/check.svg"
            className="w-16 h-16 mt-3 text-indigo-600 mx-auto"
          />

          <div className="mt-6 text-gray-600">
            <strong
              onClick={() => router.push("/my")}
              className="mx-1 text-indigo-600 cursor-pointer underline"
            >
              내 프로젝트
            </strong>
            <span>에서 당신의 프로젝트를 확인해 보세요.</span>
            <div>혹은 펀딩 탭을 눌러 내 프로젝트를 조회해 보세요.</div>
          </div>
          <div className="mt-6 w-96 mx-auto border border-gray-400 rounded-lg text-sm">
            <div className="flex border-b border-gray-400 items-center">
              <div className="w-1/2 p-4 border-r border-gray-400">
                SBT TOKEN_ID (KEY)
              </div>
              <div
                onClick={() => router.push(`/funding/${currentKey}`)}
                className="w-1/2 p-4 cursor-pointer underline hover:text-indigo-600"
              >
                {currentKey || "Error"}
              </div>
            </div>
            <div className="flex items-center">
              <div className="w-1/2 p-4 border-r border-gray-400">
                펀딩 SBT 계약 주소
              </div>
              <div className="w-1/2 p-4">
                <span
                  onClick={() =>
                    window.open(
                      `https://testnet.bscscan.com/address/${SBT_CONTRACT_ADDRESS}`
                    )
                  }
                  className="cursor-pointer underline hover:text-indigo-600"
                >
                  {shortAddress(String(SBT_CONTRACT_ADDRESS))}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8">
        <Button
          className="w-full rounded bg-indigo-700 hover:bg-indigo-600 py-4 text-center font-bold text-white"
          onClick={() => router.push("/")}
        >
          완료
        </Button>
      </div>
    </div>
  );
};

export { Create03 };
