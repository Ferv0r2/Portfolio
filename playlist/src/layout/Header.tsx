import { NAV_LINKS } from '@/const'
import { AutoSVG, smoothScrollTo } from '@/utils'
import clsx from 'clsx'
import Link from 'next/link'
import React, { FC } from 'react'

interface Props {
  active: boolean
}

export const Header: FC<Props> = ({ active }) => {
  return (
    <header
      className={clsx(
        'sticky top-0 left-0 z-10 text-gray-100 px-4 py-6 transition-all shadow-sm shadow-black duration-500',
        active ? 'bg-zinc-900' : 'bg-black/80',
      )}
    >
      <div className="container mx-auto max-w-[1200px]">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div className="special-text text-2xl font-bold">Ferv0r2</div>
          </Link>
          <nav className="md:flex hidden space-x-8 text-md">
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
          <AutoSVG
            className="md:hidden flex"
            src="/media/icons/hamburger.svg"
          />
        </nav>
      </div>
    </header>
  )
}
