'use client'

import { useEffect, useState } from 'react'
import { IPortfolio } from '@/types'
import { MasterLayout } from '@/layout'
import { ProductCard } from '@/components'
import { mockPortfolio } from '@/api/__mocks__/mockPortfolio'

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
              <div className="w-[1200px] mx-auto grid grid-cols-2 place-content-center">
                <div className="pt-16 pb-8">Introduce</div>
                <div className="relative flex justify-start mt-32">
                  <img
                    className="drop-shadow-2xl"
                    src="/media/img/work.png"
                    alt="me"
                  />
                  <img
                    className="absolute w-16 h-16 -rotate-12"
                    src="/media/logos/react.png"
                  />
                  <img
                    className="absolute top-4 right-0 w-16 h-16 rotate-12"
                    src="/media/logos/vue.png"
                  />
                  <img
                    className="absolute top-8 right-8 w-16 h-16 -rotate-12"
                    src="/media/logos/sass.png"
                  />
                  <img
                    className="absolute top-12 left-12 w-16 h-16 rotate-12"
                    src="/media/logos/tailwindcss.png"
                  />
                  <img
                    className="absolute bottom-4 right-0 w-16 h-16 rotate-12"
                    src="/media/logos/typescript.png"
                  />
                </div>
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
