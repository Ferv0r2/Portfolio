import React, { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  url: string;
  children: ReactNode;
}

const External: FC<Props> = ({ className, url, children }) => {
  return (
    <div
      onClick={() => window.open(url)}
      className={clsx("hover:text-primary-active cursor-pointer", className)}
    >
      {children}
    </div>
  );
};

export { External };
