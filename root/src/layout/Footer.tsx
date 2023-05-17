import React from 'react';
import { v1 } from 'uuid';
import { FootLink } from 'components/FootLink';
import { AutoImage } from 'utils';

const navItem = ['Tech', 'Project', 'Education', 'Certificate', 'Prize'];
const portfolio = ['BIMS', 'NFPS'];

export const Footer = () => {
  return (
    <div className="bg-zinc-800 dark:bg-dark-700 text-neutral-300">
      <footer className="w-10/12 max-w-[1000px] mx-auto py-10">
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
