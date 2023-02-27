import React, { FC, Dispatch, SetStateAction } from "react";
import clsx from "clsx";

interface Props {
  active: boolean;
  toggleHandler: Dispatch<SetStateAction<boolean>>;
}

const Toggle: FC<Props> = (active, toggleHandler) => {
  return (
    <div
      onClick={toggleHandler}
      className="flex items-center cursor-pointer group">
      <span className="font-semibold text-sm">OFF</span>
      <div
        className={clsx(
          "rounded-xl w-12 h-5 p-0.5 mx-1 transition-colors duration-150",
          active
            ? "bg-indigo-700 group-hover:bg-indigo-900"
            : "bg-gray-400 group-hover:bg-gray-600"
        )}>
        <div
          className={clsx(
            "rounded-full w-4 h-4 bg-white transform mx-auto duration-300 ease-in-out",
            active ? " translate-x-3" : "-translate-x-3"
          )}
        />
      </div>
      <span className="font-semibold text-sm ">ON</span>
    </div>
  );
};

export { Toggle };
