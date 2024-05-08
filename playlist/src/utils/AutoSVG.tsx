import { FC } from 'react'
import { ReactSVG } from 'react-svg'

interface Props {
  className?: string
  src: string
}

export const AutoSVG: FC<Props> = ({ className, src }) => {
  return (
    <>
      <ReactSVG src={src} className={className} />
    </>
  )
}
