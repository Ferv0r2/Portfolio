import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
  url: string
  isExternal?: boolean
}

export const LinkButton: FC<Props> = ({
  children,
  className,
  url,
  isExternal,
}) => {
  return (
    <a
      className={clsx(
        className,
        'cursor-pointer rounded-3xl px-4 py-3 font-medium text-sm',
      )}
      href={url}
      target={isExternal ? '_blank' : '_self'}
      rel="noreferrer noopener"
    >
      {children}
    </a>
  )
}
