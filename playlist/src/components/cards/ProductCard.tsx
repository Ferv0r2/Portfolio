'use client'

import React, { FC } from 'react'
import Link from 'next/link'

interface Props {
  path: string
  title: string
  description: string
  bannerImage: string
}

export const ProductCard: FC<Props> = ({
  path,
  title,
  description,
  bannerImage,
}) => {
  return (
    <Link href={`/${path}`}>
      <article className="productCard flex flex-col gap-4">
        <img
          className="w-full h-56 object-cover rounded-xl shadow-md border"
          src={bannerImage}
          alt={title}
        />
        <div className="w-full">
          <h2 className="w-full text-start text-xl font-extrabold">{title}</h2>
          <p className="w-full mt-4 line-clamp-3">{description}</p>
        </div>
      </article>
    </Link>
  )
}
