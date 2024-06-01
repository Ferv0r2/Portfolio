import { useState } from 'react'

export const useScroll = () => {
  const [scrollY, setScrollY] = useState<number>(0)
  const [scrollActive, setScrollActive] = useState<boolean>(false)

  const onScroll = () => {
    setScrollY(window.scrollY)
    if (scrollY > 99) {
      setScrollActive(true)
    } else {
      setScrollActive(false)
    }
  }

  return { scrollActive, onScroll }
}
