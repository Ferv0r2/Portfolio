import React, { MouseEventHandler } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export const TradeButton = ({ className, onClick }: Props) => {
  return (
    <button
      className={clsx(className, "mx-auto hover:text-hoverPink")}
      onClick={onClick}
    >
      <p className="border-2 w-1/2 p-2 mx-auto">교환</p>
    </button>
  );
};
