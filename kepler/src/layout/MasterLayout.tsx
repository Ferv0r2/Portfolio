import { ReactNode, useEffect } from "react";
import { Header, Footer, ScrollTop } from "@/layout";
import { useScroll } from "@/hooks/useScroll";
import { useRecoilState, useSetRecoilState, useRecoilValue } from "recoil";
import { bgState, accountState, balanceState } from "@/stores";

export const MasterLayout = ({ children }: { children: ReactNode }) => {
  const bg = useRecoilValue(bgState);
  const [account, setAccount] = useRecoilState(accountState);
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
      <div className={bg}>
        <Header address={account} />
        {children}
        <Footer />
      </div>
      <ScrollTop active={scrollActive} />
    </>
  );
};
