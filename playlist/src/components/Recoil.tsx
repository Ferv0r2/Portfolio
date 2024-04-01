'use client'

import { ReactNode } from 'react'
import { RecoilRoot } from 'recoil'

export const Recoil = ({ children }: { children: ReactNode }) => {
  return <RecoilRoot>{children}</RecoilRoot>
}
