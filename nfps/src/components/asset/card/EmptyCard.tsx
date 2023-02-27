import React, { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children: ReactNode;
}

const EmptyCard: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        "bg-white dark:bg-dark dark:border-dark-300 p-4 border rounded flex items-center justify-between",
        className
      )}
    >
      <div className="flex items-center">
        <div className="w-1 h-5 mr-2 bg-dark rounded-sm" />
        <p>{children}</p>
      </div>
    </div>
  );
};

export { EmptyCard };
