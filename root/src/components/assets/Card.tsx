import { FC } from "react";

interface Props {
  className?: string;
  children: React.ReactNode;
}

const Card: FC<Props> = ({ className, children }) => {
  return (
    <div className={`mt-2 rounded-lg bg-white border p-4 sm:p-6 ${className}`}>
      {children}
    </div>
  );
};

export { Card };
