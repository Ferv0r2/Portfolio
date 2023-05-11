import { atom } from "recoil";
import { v1 } from "uuid";

export const scrollYState = atom<number>({
  key: `scrollYState/${v1()}`,
  default: 0,
});

export const scrollActiveState = atom<boolean>({
  key: `scrollActiveState/${v1()}`,
  default: false,
});
