import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accountState, walletState } from "stores";

export const useAuth = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [account, setAccount] = useRecoilState(accountState);
  const [wallet, setWallet] = useRecoilState(walletState);

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  const init = useCallback(() => {
    const accountData = sessionStorage.getItem("ACCOUNT_INFO");
    const walletData: any = sessionStorage.getItem("WALLET_INFO");
    if (accountData) {
      setAccount(JSON.parse(accountData));
      setWallet(walletData);
      setAuth(true);
    }
  }, [setAccount, setWallet]);

  return {
    auth,
    wallet,
    account,
  };
};
