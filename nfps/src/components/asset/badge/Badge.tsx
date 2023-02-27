import React, { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children: ReactNode;
}

const Badge: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={clsx(
        `inline rounded font-bold text-white text-xs mr-2 p-1.5`,
        className
      )}>
      {children}
    </div>
  );
};

export { Badge };
