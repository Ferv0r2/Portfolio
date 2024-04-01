import './globals.css'
import { Inter } from 'next/font/google'

import { Recoil } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Orbit Article',
  description: 'Portfolio Article',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <body cz-shortcut-listen="true" className={inter.className}>
        <Recoil>{children}</Recoil>
      </body>
    </html>
  )
}
