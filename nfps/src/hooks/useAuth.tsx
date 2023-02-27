import { useCallback, useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { accountState } from "stores";
import { dummyAccount } from "utils";

export const useAuth = () => {
  const [auth, setAuth] = useState<boolean>(false);
  const [account, setAccount] = useRecoilState(accountState);

  useEffect(() => {
    init();
    // eslint-disable-next-line
  }, []);

  const init = useCallback(() => {
    const accountData = sessionStorage.getItem("ACCOUNT_INFO");
    if (accountData) {
      setAccount(JSON.parse(accountData));
      setAuth(true);
    }
  }, [setAccount]);

  const onConnect = () => {
    setAccount(dummyAccount);
    sessionStorage.setItem("ACCOUNT_INFO", JSON.stringify(dummyAccount));
  };

  const onDisconnect = () => {
    setAccount({
      address: "",
      network: 0,
      balance: 0,
    });
    sessionStorage.removeItem("ACCOUNT_INFO");
  };

  return {
    auth,
    account,
    onConnect,
    onDisconnect,
  };
};
