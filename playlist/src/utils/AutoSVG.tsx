import { FC } from 'react'
import SVG from 'react-inlinesvg'

interface Props {
  className?: string
  src: string
}

export const AutoSVG: FC<Props> = ({ className, src }) => {
  return <SVG src={src} className={className} />
}
