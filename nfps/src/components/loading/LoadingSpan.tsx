import React, { FC } from "react";
import { AutoSVG } from "utils";

interface Props {
  content: string;
}

const LoadingSpan: FC<Props> = ({ content }) => {
  return (
    <span className="flex items-center justify-center">
      <span className="mr-2">{content}</span>
      <div className="animate-spin">
        <AutoSVG src="/media/icons/spinner.svg" className="w-6 h-6" />
      </div>
    </span>
  );
};

export { LoadingSpan };
