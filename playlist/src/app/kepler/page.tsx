'use client'

import { mockKeplerDetail } from '@/api/__mocks__/mockPortfolio'
import { LoadingContainer } from '@/components'
import { ArticleLayout, MasterLayout } from '@/layout'
import { IPortfolioDetail } from '@/types'
import { useEffect, useState } from 'react'

export default function Kepler() {
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [productDetail, setProductDetail] = useState<IPortfolioDetail | null>(
    null,
  )

  useEffect(() => {
    setIsLoading(true)
    setProductDetail(mockKeplerDetail)
    setIsLoading(false)
  }, [])

  if (isLoading || !productDetail) return <LoadingContainer />

  return (
    <>
      <ArticleLayout>
        <div className="grid grid-cols-5 gap-8">
          <img
            className="col-span-2 w-full h-72 object-cover rounded-xl"
            src={productDetail.bannerImage}
          />
          <div className="col-span-3">
            <h1 className="text-2xl font-extrabold">{productDetail.title}</h1>
            <div className="mt-2">{productDetail.description}</div>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
