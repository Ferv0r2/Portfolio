import { atom } from "recoil";
import { v1 } from "uuid";

export interface Wallet {
  address: string;
  balance: number;
  network: number;
}

export const accountState = atom<Wallet>({
  key: `accountState/${v1()}`,
  default: {
    address: "",
    balance: 0,
    network: 1001,
  },
});
