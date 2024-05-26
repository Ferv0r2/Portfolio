'use client'

import { useEffect, useState } from 'react'
import { IPortfolio } from '@/types'
import { MasterLayout } from '@/layout'
import { BasicButton, LinkButton, ProductCard } from '@/components'
import { mockPortfolio } from '@/api/__mocks__/mockPortfolio'
import { motion } from 'framer-motion'
import { BANNER_TOOLS, MY_BLOG } from '@/const'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'

export default function Home() {
  const [productList, setProductList] = useState<IPortfolio[]>([])

  useEffect(() => {
    setProductList(mockPortfolio)
  }, [])

  return (
    <>
      <MasterLayout>
        <main>
          <section className="w-full bg-bg_main/10">
            <div className="border-b-2">
              <div className="w-[1200px] mx-auto py-8 gap-12 grid grid-cols-2 place-content-center">
                <article className="flex flex-col gap-8 justify-center">
                  <div className="flex flex-col gap-2">
                    <div className="font-bold text-3xl">
                      <h1>안녕하세요,</h1>
                      <h1>프론트엔드 개발자 황원태입니다.</h1>
                    </div>
                    <p className="text-xl">Todo: Description</p>
                  </div>
                  <LinkButton
                    url={MY_BLOG}
                    isExternal
                    className="flex items-center gap-2 justify-center w-64 bg-black text-zinc-50"
                  >
                    <ReactSVG
                      className="text-white"
                      src="/media/logos/github.svg"
                    />
                    <span className="text-lg font-medium">블로그 구경하기</span>
                  </LinkButton>
                </article>
                <article className="relative flex justify-start h-96">
                  <motion.img
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    src="/media/img/profile.png"
                    alt="me"
                  />
                  <motion.circle r={5} />
                  {BANNER_TOOLS.map((tool) => (
                    <img
                      key={tool.name}
                      className={clsx(
                        'absolute w-12 h-12 rounded-full',
                        tool.position,
                        tool.rotate,
                      )}
                      src={`/media/logos/${tool.name}.png`}
                    />
                  ))}
                </article>
              </div>
            </div>
          </section>
          <section className="w-[1200px] mx-auto my-12 grid grid-cols-3 gap-8 place-content-center">
            {productList.length > 0 ? (
              productList.map((product) => (
                <ProductCard key={product.id} name={product.title} />
              ))
            ) : (
              <ProductCard name="Empty" />
            )}
          </section>
        </main>
      </MasterLayout>
    </>
  )
}
