import React from "react";
import { smoothScrollTo } from "@/utils";
import { NAV_LINKS, OTHER_LINKS } from "@/const";

export const Footer = () => {
  return (
    <div className="bg-zinc-800 dark:bg-dark-700 text-neutral-300">
      <footer className="max-w-[1200px] mx-auto py-10">
        <nav className="grid grid-cols-3 items-start text-sm">
          <ul>
            <li className="mb-4 m-2 text-base text-white">
              <strong>Navigation</strong>
            </li>
            <nav className="flex gap-4 m-2">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.id}
                  className="text-gray-50 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
                  onClick={() => smoothScrollTo(link.id)}
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </ul>
          <ul>
            <li className="mb-4 m-2 text-base text-white">
              <strong>Others</strong>
            </li>
            <nav className="flex gap-4 m-2">
              {OTHER_LINKS.map((link) => (
                <a
                  key={link.label}
                  className="text-gray-50 hover:text-indigo-600 transition-colors duration-300 cursor-pointer"
                  href={link.link}
                  rel="noreferrer noopener"
                  target="_blank"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </ul>
        </nav>
        <hr className="my-8" />
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <div className="relative w-6 h-6 mr-2">
                <img src="/favicon.ico" alt="logo" />
              </div>
              <h2 className="font-bold">Ferv0r2</h2>
            </div>
            <div className="mt-3 text-sm">
              <p>Email : amlk31255@gmail.com</p>
              <p>Phone : 010-7103-2146</p>
            </div>
            <div className="text-sm mt-3">
              <span className="mr-2">&copy;</span>
              <span>2023 Ferv0r2. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
