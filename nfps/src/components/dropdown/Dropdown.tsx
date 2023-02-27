import React, { FC, MouseEventHandler } from "react";
import { useRouter } from "next/router";

/* Component */
import { AutoSVG } from "utils";

interface Props {
  close: MouseEventHandler<HTMLDivElement>;
  onLogOut: MouseEventHandler<HTMLButtonElement>;
}

const Dropdown: FC<Props> = ({ close, onLogOut }) => {
  const router = useRouter();
  return (
    <>
      <div onClick={close} className="fixed inset-0 h-full w-full z-10"></div>
      <div className="absolute right-0 mt-2 w-44 text-sm border bg-white dark:bg-dark-400 dark:border-dark-300 rounded-md shadow-xl z-20">
        <button
          type="button"
          onClick={(e: any) => {
            router.push("/my");
            close(e);
          }}
          className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 rounded-t hover:bg-primary-light dark:hover:bg-gray-300 hover:text-primary dark:hover:text-dark"
        >
          <span className="flex items-center justify-center">
            <AutoSVG src="/media/icons/star.svg" className="w-5 h-5 mr-2" />
            <span>내 프로젝트</span>
          </span>
        </button>
        <button
          type="button"
          onClick={onLogOut}
          className="w-full px-4 py-3 text-gray-700 dark:text-gray-300 rounded-b hover:bg-danger-light dark:hover:bg-gray-300 hover:text-danger dark:hover:text-dark"
        >
          <span className="flex items-center justify-center">
            <AutoSVG src="/media/icons/close.svg" className="w-5 h-5 mr-2" />
            <span>연결 해제</span>
          </span>
        </button>
      </div>
    </>
  );
};

export { Dropdown };
