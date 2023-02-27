import React from "react";
import { v1 } from "uuid";
import { FootLink } from "components/assets/FootLink";
import { AutoImage } from "utils";

const navItem = ["Tech", "Project", "Education", "Certificate", "Prize"];
const portfolio = ["BIMS", "NFPS"];
const contactItem = ["call", "email"];

export const Footer = () => {
  return (
    <div className="bg-zinc-800 dark:bg-dark-700 text-neutral-300">
      <footer className="w-10/12 max-w-[1000px] mx-auto py-10">
        <nav className="grid grid-cols-2 md:grid-cols-5 items-start text-sm">
          <FootLink title="Navigation">
            {navItem.map((v) => (
              <li key={v1()} className="m-1">
                <a
                  href={`#${v.toLowerCase()}`}
                  className="hover:text-primary-active cursor-pointer m-2"
                >
                  {v}
                </a>
              </li>
            ))}
          </FootLink>
          <FootLink title="Portfolio">
            {portfolio.map((v) => (
              <li key={v1()} className="m-1">
                <a
                  href={`https://${v.toLowerCase()}.wontae.site`}
                  className="hover:text-primary-active m-2"
                >
                  {v}
                </a>
              </li>
            ))}
          </FootLink>
        </nav>
        <hr className="my-8" />
        <div className="flex justify-between items-center">
          <div>
            <div className="flex items-center">
              <div className="relative w-6 h-6 mr-2">
                <AutoImage src="/favicon.ico" alt="logo" />
              </div>
              <h2 className="font-bold">Ferv0r2</h2>
            </div>
            <div className="mt-3 text-sm">
              <p>Email : amlk31255@gmail.com</p>
              <p>Phone : 010-7103-2146</p>
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
