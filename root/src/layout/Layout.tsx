import React, { FC, ReactNode, useEffect } from "react";
import { SEO } from "layout/SEO";
import { Footer } from "layout/Footer";
import { ScrollTop } from "layout/ScrollTop";
import { useMoveScroll } from "hooks/useMoveScroll";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { scrollActive, onScroll } = useMoveScroll();

  useEffect(() => {
    const scrollListener = () => {
      window.addEventListener("scroll", onScroll);
    };
    scrollListener();
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  });
  return (
    <div>
      <SEO />
      {children}
      <Footer />
      {scrollActive && <ScrollTop />}
    </div>
  );
};

export default Layout;
