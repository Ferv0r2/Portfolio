import React, { Dispatch, FC, SetStateAction, useEffect } from "react";
import dynamic from "next/dynamic";
import { useTheme } from "next-themes";

interface Props {
  content: string | undefined;
  onChangeContent: Dispatch<SetStateAction<string | undefined>>;
}

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), {
  ssr: false,
});

const Editor: FC<Props> = ({ content, onChangeContent }) => {
  const { theme } = useTheme();

  return (
    <div
      data-color-mode={theme}
      className="mt-2 border dark:border-dark-300 border-gray-400 rounded"
    >
      <MDEditor
        value={content}
        onChange={onChangeContent}
        className="dark:text-gray-300"
      />
    </div>
  );
};

export { Editor };
