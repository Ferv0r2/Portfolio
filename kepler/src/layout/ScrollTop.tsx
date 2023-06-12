import React, { FC } from "react";
import clsx from "clsx";

/* Component */
import { AutoImage } from "@/utils";

interface Props {
  active: boolean;
}

export const ScrollTop: FC<Props> = ({ active }) => {
  return (
    <button
      type="button"
      onClick={() => window.scrollTo(0, 0)}
      className={clsx(
        active ? "ease-out-in" : "opacity-0 ease-in-out",
        "fixed bottom-6 right-6 w-10 h-10 rounded-full transition duration-300 bg-indigo-400 text-white animate-bounce hover:pause  hover:bg-indigo-500 z-10"
      )}
    >
      <AutoImage src="/media/icons/arrow-top.svg" alt="top" className="p-1" />
    </button>
  );
};
