import { useEffect, useState } from "react";

/* Component */
import { WalletType } from "components/auth/WalletModel";
import { WalletButton } from "components/button";
import { dummyAccount } from "utils";

/* State */
import { useRecoilState } from "recoil";
import { accountState } from "stores";

export const Login = () => {
  const [account, setAccount] = useRecoilState(accountState);
  const [selectedWallet, setSelectedWallet] = useState<WalletType | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!isLoading) return;
    const timer = setTimeout(() => {
      setIsLoading(false);
      sessionStorage.setItem("ACCOUNT_INFO", JSON.stringify(account));
      selectedWallet && sessionStorage.setItem("WALLET_INFO", selectedWallet);
      document.location.reload();
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, [isLoading, account, selectedWallet]);

  const selectWallet = (wallet: WalletType | null) => {
    setAccount(dummyAccount);
    setSelectedWallet(wallet);
  };

  const onContinue = () => {
    setIsLoading(true);
  };

  return (
    <form className="form w-100" noValidate id="kt_login_signin_form">
      <div className="text-center mb-6">
        <h1 className="text-dark mb-3">Sign In</h1>
        <div className="mt-6 alert alert-info">
          <div className="alert-text font-weight-bold">
            <strong className="fs-6">
              Blockchain Integrated Marketing Services
            </strong>
          </div>
        </div>
      </div>
      <div className="text-center">
        <WalletButton
          wallet="Metamask"
          selectedWallet={selectedWallet}
          account={account.address}
          onSelect={selectWallet}
        />
        <WalletButton
          wallet="Kaikas"
          selectedWallet={selectedWallet}
          account={account.address}
          onSelect={selectWallet}
        />
        <button
          type="button"
          onClick={onContinue}
          className="btn btn-lg btn-primary w-100 mb-5"
          data-kt-indicator={isLoading && "on"}
          disabled={!selectedWallet || !account || isLoading}
        >
          <span className="indicator-label">Continue</span>
          <span className="indicator-progress">
            Please wait...{" "}
            <span className="spinner-border spinner-border-sm align-middle ms-2" />
          </span>
        </button>
      </div>
    </form>
  );
};
