import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <header className="sticky top-0 left-0 z-10 bg-zinc-900 text-zinc-50 py-4">
      <div className="container mx-auto px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="text-2xl font-bold">Who's next?</div>
          <div className="space-x-4">
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
          </div>
        </nav>
      </div>
    </header>
  );
};
