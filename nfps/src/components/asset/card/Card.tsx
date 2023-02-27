import React, { FC, ReactNode } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children: ReactNode;
}

const Card: FC<Props> = ({ className, children }) => {
  return <div className={clsx("rounded", className)}>{children}</div>;
};

export { Card };
