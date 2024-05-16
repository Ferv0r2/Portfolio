import React, { FC } from 'react'
import Link from 'next/link'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { BasicButton } from '@/components'
import { MY_EMAIL } from '@/const'
// import { NAV_LINKS } from '@/const'
// import { smoothScrollTo } from '@/utils'

interface Props {
  active: boolean
}

export const Header: FC<Props> = ({ active }) => {
  const onClickContact = () => {
    window.open(`mailto:${MY_EMAIL}`, '_blank', 'noopener noreferrer')
  }

  return (
    <header
      className={clsx(
        'sticky group top-0 left-0 z-10  px-4 py-4 transition-colors duration-300',
        active
          ? 'bg-zinc-800/95 text-zinc-50'
          : 'bg-zinc-50 text-gray-600 border-b-2',
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
          <BasicButton
            className={clsx(
              'font-bold',
              active
                ? 'bg-zinc-50 hover:bg-zinc-50/90 text-black'
                : 'bg-bg_main hover:bg-bg_main/90 text-zinc-50',
            )}
            onClick={onClickContact}
          >
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
