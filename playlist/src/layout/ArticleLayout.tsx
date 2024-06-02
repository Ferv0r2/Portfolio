import { ReactNode } from 'react'
import Link from 'next/link'
import { MasterLayout } from '@/layout'
import { ReactSVG } from 'react-svg'

interface Props {
  children: ReactNode
}

export const ArticleLayout = ({ children }: Props) => {
  return (
    <>
      <MasterLayout>
        <div className="max-w-[1200px] w-full mx-auto p-8">
          <Link href="/">
            <div className="inline-flex items-center gap-2 p-2 rounded-md text-white bg-gray-800 hover:bg-gray-600">
              <ReactSVG src="media/icons/arrow-left.svg" />
              <span className="font-medium">뒤로가기</span>
            </div>
          </Link>
          <main className="mt-8">{children}</main>
        </div>
      </MasterLayout>
    </>
  )
}
