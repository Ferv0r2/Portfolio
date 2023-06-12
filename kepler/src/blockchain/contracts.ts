import { web3 } from "@/blockchain/web3";
import nftABI from "@/blockchain/abi/nftABI.json";
import boxABI from "@/blockchain/abi/boxABI.json";
import miningABI from "@/blockchain/abi/miningABI.json";
import marketABI from "@/blockchain/abi/shopABI.json";
import itemABI from "@/blockchain/abi/itemABI.json";
import govABI from "@/blockchain/abi/govABI.json";

export const nftContract: any = new web3.eth.Contract(
  nftABI,
  "0x928267E7dB3d173898553Ff593A78719Bb16929F"
);
export const boxContract: any = new web3.eth.Contract(
  boxABI,
  "0xa72336cBb31af6e85AB1a816753aC9Ec38Cd95B5"
);
export const miningContract: any = new web3.eth.Contract(
  miningABI,
  "0x9da24c77C9C2988338ab38Ae14376b6AD868601C"
);
export const shopContract: any = new web3.eth.Contract(
  marketABI,
  "0xA8B43d92754f42E16012207bc6368Ede70FC4615"
);
export const keyContract: any = new web3.eth.Contract(
  marketABI,
  "0xf5996a159872e016472756a7723915EEdC357f58"
);

export const itemContract: any = new web3.eth.Contract(
  itemABI,
  "0x31756CAa3363516C01843F96f6AA7d9c922163b3"
);
export const govContract: any = new web3.eth.Contract(
  govABI,
  "0x71296B11a5E298d65B6cA395c469e7b5A908B5c4"
);
