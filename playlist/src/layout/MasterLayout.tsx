import { ReactNode, useEffect } from "react";
import { Header, Footer, ScrollTop } from "@/layout";
import { useScroll } from "@/hooks/useScroll";

interface Props {
  children: ReactNode;
}

export const MasterLayout = ({ children }: Props) => {
  const { scrollActive, onScroll } = useScroll();

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
      <div className="min-h-screen bg-[#151521]">
        <Header />
        {children}
      </div>
      <Footer />
      <ScrollTop active={scrollActive} />
    </>
  );
};
