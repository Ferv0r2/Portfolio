import React, { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { LinkButton } from '@/components'
import { MY_EMAIL } from '@/const'
// import { NAV_LINKS } from '@/const'
// import { smoothScrollTo } from '@/utils'

interface Props {
  active: boolean
}

export const Header: FC<Props> = ({ active }) => {
  return (
    <header
      className={clsx(
        'sticky top-0 left-0 z-10  px-4 py-4 transition-colors duration-300 border-b-2',
        active
          ? 'bg-zinc-800/95 border-zinc-800/95 text-zinc-50 shadow-md'
          : 'bg-zinc-50 text-gray-600',
      )}
    >
      <div className="container mx-auto max-w-[1440px]">
        <nav className="flex items-center justify-between px-4">
          <Link href="/">
            <ReactSVG
              className={active ? 'text-zinc-50' : 'text-black w-48'}
              src="/media/logos/logo_group.svg"
            />
          </Link>
          <div
            className={clsx(
              'md:flex hidden p-px rounded-full bg-gradient-to-b from-indigo-300 via-purple-300 to-pink-300 group',
              active ? 'text-black' : 'bg-transparent',
            )}
          >
            <LinkButton
              url={`mailto:${MY_EMAIL}`}
              isExternal
              className="font-[800] bg-zinc-50 duration-300 transition-colors group-hover:bg-gradient-to-b group-hover:from-indigo-300 group-hover:via-purple-300 group-hover:to-pink-300 group-hover:text-zinc-50"
            >
              CONTACT
            </LinkButton>
          </div>
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
