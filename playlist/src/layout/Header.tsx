import { NAV_LINKS } from "@/const";
import { smoothScrollTo } from "@/utils";
import clsx from "clsx";
import React, { FC } from "react";

interface Props {
  active: boolean;
}

export const Header: FC<Props> = ({ active }) => {
  return (
    <header
      className={clsx(
        "sticky top-0 left-0 z-10 bg-zinc-900 text-gray-100 py-4 transition-all duration-1000",
        active ? "bg-black/90" : ""
      )}
    >
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">Who's next?</div>
          <nav className="space-x-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                className="special-text text-gray-50 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
                onClick={() => smoothScrollTo(link.id)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </nav>
      </div>
    </header>
  );
};
