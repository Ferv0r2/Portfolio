import React, { useRef } from "react";
import { useRecoilState } from "recoil";
import { scrollActiveState, scrollState } from "stores/states";

export const useMoveScroll = () => {
  const element = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useRecoilState(scrollState);
  const [scrollActive, setScrollActive] = useRecoilState(scrollActiveState);

  const onMoveToElement = () => {
    element.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  console.log(scrollY);

  const onScroll = () => {
    setScrollY(window.scrollY);
    if (scrollY > 99) {
      setScrollActive(true);
    } else {
      setScrollActive(false);
    }
  };

  const onTop = () => {
    window.scrollTo(0, 0);
  };

  return { scrollActive, onScroll, onTop, element, onMoveToElement };
};
