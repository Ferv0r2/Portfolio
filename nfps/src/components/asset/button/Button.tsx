import React, { FC, ReactNode, MouseEventHandler } from "react";
import clsx from "clsx";

interface Props {
  className?: string;
  children: ReactNode;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

const Button: FC<Props> = ({ className, children, onClick, disabled }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={clsx(
        "p-3 text-center rounded-lg translate duration-300",
        !disabled && "active:scale-90",
        className
      )}
    >
      {children}
    </button>
  );
};

export { Button };
