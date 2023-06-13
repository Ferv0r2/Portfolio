import React from "react";
import Link from "next/link";
import { replaceAddress } from "@/utils/replaceAddress";
import { AutoImage } from "@/utils";

interface Props {
  address: string;
}

export const Header = ({ address }: Props) => {
  return (
    <header className="max-w-5xl m-auto sticky top-0 px-2 sm:px-6 lg:px-8 font-GmarketSansBold z-99">
      <div className="relative flex items-center justify-between h-28 text-nav italic">
        <Link href="/" className="flex cursor-pointer">
          <figure className="relative w-16 h-16 m-auto">
            <AutoImage src="/media/logos/logo.png" alt="logo" />
          </figure>
          <p className="block mx-3 m-auto font-bold text-3xl">Kepler-452b</p>
        </Link>
        <div className="hidden md:block">
          <div className="flex">
            <figure className="relative h-7 w-7">
              <AutoImage src="/media/logos/klaytn_logo.png" alt="chain" />
            </figure>
            <p className="block w-40 m-auto mx-1.5 font-medium text-base text-ellipsis overflow-hidden">
              {replaceAddress(address)}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};
