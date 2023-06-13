import { ReactNode, useEffect } from "react";
import { Header, Footer, ScrollTop } from "@/layout";
import useScroll from "@/hooks/useScroll";
import { useRecoilValue } from "recoil";
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
      <div className={bgType}>
        <Header address={account.account} />
        {children}
        <Footer />
      </div>
      <ScrollTop active={scrollActive} />
    </>
  );
};
