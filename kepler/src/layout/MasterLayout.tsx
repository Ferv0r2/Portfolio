import { ReactNode, useEffect } from "react";
import { useRecoilValue } from "recoil";

import { SEO, Header, Footer, ScrollTop } from "@/layout";
import useScroll from "@/hooks/useScroll";
import { accountState } from "@/stores";

interface Props {
  bgType: string;
  children: ReactNode;
}

export const MasterLayout = ({ bgType, children }: Props) => {
  const account = useRecoilValue(accountState);
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
      <SEO />
      <div className={bgType}>
        <Header address={account.account} />
        {children}
        <Footer />
      </div>
      <ScrollTop active={scrollActive} />
    </>
  );
};
