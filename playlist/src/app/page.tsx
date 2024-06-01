'use client'

import { useEffect, useRef, useState } from 'react'
import clsx from 'clsx'
import { ReactSVG } from 'react-svg'
import { motion, useAnimationControls, useInView } from 'framer-motion'
import { mockPortfolio } from '@/api/__mocks__/mockPortfolio'
import { IPortfolio } from '@/types'
import { MasterLayout } from '@/layout'
import { LinkButton, ProductCard } from '@/components'
import { BANNER_TOOLS, MY_BLOG } from '@/const'

export default function Home() {
  const draggableRef = useRef<HTMLDivElement | null>(null)
  const productRef = useRef<HTMLDivElement | null>(null)
  const isInView = useInView(productRef)
  const controls = useAnimationControls()
  const [productList, setProductList] = useState<IPortfolio[]>([])

  useEffect(() => {
    controls.set({
      opacity: 0,
      y: 4,
    })
    if (isInView) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.3 },
      }))
    }
  }, [controls, isInView])

  useEffect(() => {
    setProductList(mockPortfolio)
  }, [])

  return (
    <>
      <MasterLayout>
        <main>
          <section className="w-full bg-bg_main/10">
            <div className="border-b-2">
              <div className="max-w-[1200px] w-full mx-auto p-8 gap-4 grid sm:grid-cols-2 grid-cols-1 place-content-center">
                <article className="flex flex-col gap-8 justify-center sm:items-start items-center">
                  <div className="flex flex-col gap-4">
                    <div className="font-bold sm:text-3xl text-2xl">
                      <h1>안녕하세요,</h1>
                      <h1>프론트엔드 개발자 황원태입니다</h1>
                    </div>
                    <div className="flex flex-col text-md">
                      <span>
                        온전한 제 서비스에 대한 시행착오 경험이 있어요
                      </span>
                      <span>오너십과 책임감의 가치를 알고 있어요</span>
                    </div>
                  </div>
                  <LinkButton
                    url={MY_BLOG}
                    isExternal
                    className="sm:flex hidden items-center gap-2 justify-center w-64 bg-black text-zinc-50 hover:bg-black/80 transition-colors duration-300"
                  >
                    <ReactSVG
                      className="text-white"
                      src="/media/logos/github.svg"
                    />
                    <span className="text-lg font-medium">블로그 구경하기</span>
                  </LinkButton>
                </article>
                <article className="relative flex justify-start sm:h-96 h-72">
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px]">
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                    />
                    <motion.img
                      className="select-none"
                      src="/media/img/profile.png"
                      alt="me"
                    />
                  </div>
                  <motion.div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64"
                    ref={draggableRef}
                  >
                    {BANNER_TOOLS.map((tool) => (
                      <motion.img
                        drag
                        dragConstraints={draggableRef}
                        key={tool.name}
                        className={clsx(
                          'absolute w-12 h-12 rounded-full',
                          tool.position,
                          tool.rotate,
                        )}
                        src={`/media/logos/${tool.name}.png`}
                        style={{ x: 0, y: 0 }}
                      />
                    ))}
                  </motion.div>
                </article>
                <LinkButton
                  url={MY_BLOG}
                  isExternal
                  className="sm:hidden flex items-center gap-2 justify-center max-w-80 w-full mx-auto bg-black text-zinc-50 hover:bg-black/80 transition-colors duration-300"
                >
                  <ReactSVG
                    className="text-white"
                    src="/media/logos/github.svg"
                  />
                  <span className="text-lg font-medium">블로그 구경하기</span>
                </LinkButton>
              </div>
            </div>
          </section>
          <section
            ref={productRef}
            className="cardWrapper max-w-[1200px] w-full mx-auto px-8 my-12 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 place-content-center"
          >
            {productList.length > 0 ? (
              productList.map(
                ({ id, bannerImage, title, description, name }, idx) => (
                  <motion.div custom={idx} animate={controls} key={id}>
                    <ProductCard
                      path={name}
                      title={title}
                      description={description}
                      bannerImage={bannerImage}
                    />
                  </motion.div>
                ),
              )
            ) : (
              <div className="text-2xl font-extrabold">불러오는 중...</div>
            )}
          </section>
        </main>
      </MasterLayout>
    </>
  )
}
