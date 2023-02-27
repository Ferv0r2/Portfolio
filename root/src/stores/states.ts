import { atom } from "recoil";
import { v1 } from "uuid";

export const themeState = atom<boolean>({
  key: `themeState${v1()}`,
  default: false,
});

export const scrollState = atom<number>({
  key: `scrollstate${v1()}`,
  default: 0,
});

export const scrollActiveState = atom<boolean>({
  key: `scrollActivestate${v1()}`,
  default: false,
});
