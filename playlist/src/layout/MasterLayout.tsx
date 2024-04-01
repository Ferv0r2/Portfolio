import { ReactNode, useEffect, useRef, useState } from 'react'
import { Header, Footer, ScrollTop } from '@/layout'
import { useScroll } from '@/hooks'

interface Props {
  children: ReactNode
}

export const MasterLayout = ({ children }: Props) => {
  const { scrollActive, onScroll } = useScroll()

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener('scroll', onScroll)
    }
    scrollListener()
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  })

  return (
    <>
      <div className="min-h-screen">
        <Header active={scrollActive} />
        {children}
        <Footer />
      </div>
      <ScrollTop active={scrollActive} />
    </>
  )
}
