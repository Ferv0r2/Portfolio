import React, { FC, ReactNode } from 'react'
import clsx from 'clsx'

interface Props {
  children: ReactNode
  className?: string
  onClick?: () => void
}

export const BasicButton: FC<Props> = ({ children, className, onClick }) => {
  return (
    <button
      type="button"
      className={clsx(
        className,
        'cursor-pointer rounded-3xl px-4 py-3 font-medium text-sm',
      )}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
