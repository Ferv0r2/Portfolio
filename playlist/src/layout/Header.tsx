import { BasicButton } from '@/components'
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
    <header className="sticky top-0 left-0 z-10 bg-white text-gray-600 px-4 py-6 border-b-2">
      <div className="container mx-auto max-w-[1440px]">
        <nav className="flex items-center justify-between">
          <Link href="/">
            <div className="text-2xl font-bold">Ferv0r2</div>
          </Link>
          <BasicButton className="bg-bg_main hover:bg-bg_main/90 text-zinc-50">
            CONTACT ME
          </BasicButton>
          {/* <nav className="md:flex hidden space-x-8 text-md">
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
          /> */}
        </nav>
      </div>
    </header>
  )
}
