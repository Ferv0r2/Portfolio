import React from "react";
import clsx from "clsx";
import { useMoveScroll } from "hooks/useMoveScroll";
import { AutoImage } from "utils";

export const ScrollTop = () => {
  const { scrollActive, onTop } = useMoveScroll();

  return (
    <button
      type="button"
      onClick={onTop}
      className={clsx(
        scrollActive ? "ease-out-in" : "opacity-0 ease-in-out",
        "fixed bottom-6 right-6 w-10 h-10 rounded-full transition duration-300 bg-indigo-400 text-white animate-bounce hover:pause  hover:bg-indigo-500 z-10"
      )}
    >
      <AutoImage src="/images/icons/arrow-top.svg" alt="top" className="p-1" />
    </button>
  );
};
