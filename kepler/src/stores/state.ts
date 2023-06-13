import { atom } from "recoil";
import { v1 } from "uuid";

export interface Wallet {
  account: string;
  balance: number;
  network: string;
}

export const accountState = atom<Wallet>({
  key: `accountState${v1()}`,
  default: {
    account: "0x820479C7B095C5ca4969353ECcA5421c7012df5f",
    balance: 100,
    network: "8217",
  },
});
