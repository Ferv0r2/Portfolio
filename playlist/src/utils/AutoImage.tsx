import { FC } from 'react'
import Image from 'next/image'
import clsx from 'clsx'

interface Props {
  className?: string
  src: string
  alt: string
  priority?: boolean
}

export const AutoImage: FC<Props> = ({ className, src, alt, priority }) => {
  return (
    <Image
      src={src}
      alt={alt}
      className={clsx('w-full h-full', className)}
      fill
      priority={priority}
      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 75vw"
    />
  )
}
