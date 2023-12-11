import React from "react";
import Link from "next/link";
import { v1 } from "uuid";

export const Footer = () => {
  return (
    <div className="bg-zinc-800 dark:bg-dark-700 text-neutral-300">
      <footer className="max-w-[1200px] mx-auto py-10">
        <nav className="grid grid-cols-5 items-start text-sm">
          <ul>
            <li className="mb-4 m-2 text-base text-white">
              <strong>Navigation</strong>
            </li>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Home
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Portfoilo
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Tech
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Career
            </Link>
          </ul>
          <ul>
            <li className="mb-4 m-2 text-base text-white">
              <strong>Contact</strong>
            </li>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Home
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Portfoilo
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Tech
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Career
            </Link>
          </ul>
          <ul>
            <li className="mb-4 m-2 text-base text-white">
              <strong>Others</strong>
            </li>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Home
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Portfoilo
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Tech
            </Link>
            <Link className="text-zinc-50 hover:text-zinc-100" href="#">
              Career
            </Link>
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
            <div className="text-sm mt-3">
              <span className="mr-2">&copy;</span>
              <span>Ferv0r2. ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
