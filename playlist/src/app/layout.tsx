import './globals.css'
import localFont from 'next/font/local'

import { Recoil } from '@/components'

const suitFont = localFont({
  src: './fonts/SUIT-Variable.woff2',
  display: 'swap',
})

export const metadata = {
  title: 'Ferv0r2 Article',
  description: 'Portfolio Article',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko-KR">
      <body cz-shortcut-listen="true" className={suitFont.className}>
        <Recoil>{children}</Recoil>
      </body>
    </html>
  )
}
