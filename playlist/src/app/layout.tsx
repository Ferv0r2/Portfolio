import './globals.css'
import localFont from 'next/font/local'

import { Recoil } from '@/components'

const suitFont = localFont({
  src: './fonts/SUIT-Variable.woff2',
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://wontae.net'),
  title: 'Ferv0r2 Article',
  description: '안녕하세요, 프론트엔드 개발자 황원태입니다',
  url: 'https://wontae.net/',
  robots: 'follow, index',
  openGraph: {
    images: ['/media/banner/card.png'],
  },
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
