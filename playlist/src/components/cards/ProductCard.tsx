import React, { FC } from 'react'

interface Props {
  name: string
}

export const ProductCard: FC<Props> = ({ name }) => {
  return (
    <div className="rounded-lg border shadow-md w-full h-48 bg-gray-100 flex flex-col items-center justify-center">
      {name}
    </div>
  )
}
