import React, { FC, ReactNode, useEffect } from "react";

/* Hook */
import { useMoveScrool } from "hooks/useMoveScroll";
import { useToast } from "hooks/useToast";

/* Component */
import SEO from "layout/SEO";
import { Header } from "layout/Header";
import { Footer } from "layout/Footer";
import { ScrollTop } from "layout/ScrollTop";
import { ToastWidget } from "components/toast/ToastWidget";

interface Props {
  children: ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  const { scrollActive, onScroll } = useMoveScrool();
  const { isToast } = useToast();

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
    <>
      <SEO />
      <Header active={scrollActive} />
      {children}
      <ScrollTop active={scrollActive} />
      {isToast && <ToastWidget />}
      <Footer />
    </>
  );
};

export default Layout;
