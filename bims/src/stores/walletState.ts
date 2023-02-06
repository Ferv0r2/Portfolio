import { atom } from "recoil";
import { v1 } from "uuid";
import { Wallet, WalletType } from "components/auth/WalletModel";

const accountState = atom<Wallet>({
  key: `accountState/${v1()}`,
  default: {
    address: "",
    balance: 0,
    network: 1001,
  },
});

const walletState = atom<WalletType | null>({
  key: `walletState/${v1()}`,
  default: null,
});

export { accountState, walletState };
