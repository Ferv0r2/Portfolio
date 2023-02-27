import React, { useRef, useState } from "react";

export const useMoveScrool = () => {
  const element = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState<number>(0);
  const [scrollActive, setScrollActive] = useState<boolean>(false);

  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const onScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 99) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  return { scrollActive, onScroll, element, onMoveToElement };
};
