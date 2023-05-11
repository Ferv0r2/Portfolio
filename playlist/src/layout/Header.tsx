import { AutoImage, AutoSVG } from "@/utils";
import React from "react";

export const Header = () => {
  return (
    <header className="p-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <figure className="relative w-12 h-12">
            <AutoImage src="/media/logos/main-logo.png" alt="logo" />
          </figure>
          <h2 className="ml-2 font-bold text-lg text-white">Folio Player</h2>
        </div>
        <a
          className="group"
          target="_blank"
          href="https://github.com/Ferv0r2/Portfolio"
        >
          <AutoSVG
            className="group-hover:scale-110 w-8 h-8"
            src="/media/logos/github.svg"
          />
        </a>
      </div>
    </header>
  );
};
