export type WalletType = "metamask" | "kaikas";

export interface Wallet {
  address: string;
  balance: number;
  network: number;
}
