import { atom } from "recoil";

const themeState = atom({
  key: "themeState",
  default: false,
});

export { themeState };
