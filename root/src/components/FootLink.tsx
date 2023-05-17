import React, { FC, ReactNode } from 'react';

interface Props {
  title: string;
  children: ReactNode;
}

export const FootLink: FC<Props> = ({ title, children }) => {
  return (
    <ul>
      <li className="mb-4 m-2 text-base text-white">
        <strong>{title}</strong>
      </li>
      {children}
    </ul>
  );
};
