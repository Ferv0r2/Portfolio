import React, { FC, MouseEventHandler } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import clsx from "clsx";

/* Component */
import { Button } from "components/asset/button";
import { AutoSVG, shortAddress } from "utils";

interface Props {
  isLoading: boolean;
  address: string;
  onMove: MouseEventHandler<HTMLButtonElement>;
  connectWallet: MouseEventHandler<HTMLDivElement>;
  close: MouseEventHandler<HTMLDivElement>;
  onLogOut: MouseEventHandler<HTMLButtonElement>;
}

const Hamburger: FC<Props> = ({
  isLoading,
  address,
  onMove,
  connectWallet,
  close,
  onLogOut,
}) => {
  const router = useRouter();
  return (
    <>
      <div className="absolute top-0 right-0 mt-20 w-full text-sm bg-white z-20 shadow-xl border-t divide-y">
        <nav>
          <ul className="text-center">
            {navItems.map((v, i) => (
              <li
                key={v.url}
                className={clsx(
                  "mx-4 py-2 text-lg",
                  router.asPath === v.url &&
                    "underline underline-offset-4 decoration-2"
                )}>
                <Link href={v.url}>{v.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <div className="flex items-center">
            <Button
              className={clsx(
                "group w-full rounded-none flex items-center text-sm hover:bg-dark hover:text-white",
                router.asPath === "/create" && "bg-gray-800 text-white"
              )}
              onClick={onMove}>
              <div className="relative w-6 h-6 mr-1 transition-transform group-hover:rotate-[360deg]">
                <AutoSVG
                  src="/media/icons/block.svg"
                  className="group-hover:white"
                />
              </div>
              <span className="pr-1">프로젝트 생성</span>
            </Button>
          </div>

          <div className="relative">
            <Button
              className={clsx(
                "flex items-center w-full rounded-none text-sm py-3.5 group disabled:bg-gray-400 disabled:text-white hover:bg-dark hover:text-white",
                router.asPath === "/my" && "bg-gray-800 text-white"
              )}
              onClick={(e: any) => {
                Boolean(!address) ? connectWallet(e) : "";
              }}
              disabled={isLoading}>
              {isLoading ? (
                <div className="flex items-center mx-auto">
                  <span className="mr-2">연결중...</span>
                  <div className="animate-spin ">
                    <AutoSVG
                      src="/media/icons/spinner.svg"
                      className="w-5 h-5"
                    />
                  </div>
                </div>
              ) : address ? (
                <div className="flex items-center mx-auto">
                  <span className="pl-1">{shortAddress(address)}</span>
                  <div className="relative h-5 w-5 ml-1">
                    <AutoSVG
                      className="group-hover:text-white"
                      src="/media/icons/dropdown.svg"
                    />
                  </div>
                </div>
              ) : (
                <span className="flex itens-center mx-auto">
                  <AutoSVG
                    className="h-5 w-5 text-gray-800 mr-2"
                    src="/media/svg/social-logos/metamask.svg"
                  />
                  지갑 연결하기
                </span>
              )}
            </Button>
          </div>
        </div>
        <button
          type="button"
          onClick={(e: any) => {
            router.push("/my");
            close(e);
          }}
          className="w-full px-4 py-3 text-gray-700 hover:bg-primary-light hover:text-primary">
          <span className="flex items-center justify-center">
            <AutoSVG src="/media/icons/star.svg" className="w-5 h-5 mr-2" />
            <span>내 프로젝트</span>
          </span>
        </button>
        <button
          type="button"
          onClick={onLogOut}
          className="w-full px-4 py-3 text-gray-700 rounded-b hover:bg-danger-light hover:text-danger">
          <span className="flex items-center justify-center">
            <AutoSVG src="/media/icons/close.svg" className="w-5 h-5 mr-2" />
            <span>연결 해제</span>
          </span>
        </button>
      </div>
    </>
  );
};

const navItems: {
  name: string;
  url: string;
}[] = [
  {
    name: "홈",
    url: "/",
  },
  {
    name: "펀딩",
    url: "/funding",
  },
  {
    name: "투표",
    url: "/vote",
  },
];

export { Hamburger };
