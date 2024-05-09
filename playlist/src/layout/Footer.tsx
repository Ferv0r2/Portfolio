import React from 'react'
import { smoothScrollTo } from '@/utils'
import { NAV_LINKS, OTHER_LINKS } from '@/const'

export const Footer = () => {
  return (
    <div className="bg-zinc-800 text-neutral-300">
      <footer className="max-w-[1200px] mx-auto px-4 py-8">
        <nav className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 items-start text-sm">
          <ul>
            <li className="mb-4 m-2 text-base text-white sm:text-left text-center">
              <strong>Navigation</strong>
            </li>
            <nav className="flex gap-4 m-2 sm:justify-start justify-center">
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
            <li className="mb-4 m-2 text-base text-white sm:text-left text-center">
              <strong>Others</strong>
            </li>
            <nav className="flex gap-4 m-2 sm:justify-start justify-center">
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
        <div className="flex items-center sm:justify-start justify-center">
          <div>
            <div className="flex items-center sm:justify-start justify-center">
              <div className="relative w-6 h-6 mr-2">
                <img src="/favicon.ico" alt="logo" />
              </div>
              <h2 className="font-bold">Ferv0r2</h2>
            </div>
            <div className="mt-3 text-sm sm:text-left text-center">
              <p>Email : amlk31255@gmail.com</p>
              <p>Phone : +82{')'}10-7103-2146</p>
            </div>
            <div className="text-sm mt-3">
              <span className="mr-2">&copy;</span>
              <span>2024. Ferv0r2 ALL RIGHTS RESERVED.</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
