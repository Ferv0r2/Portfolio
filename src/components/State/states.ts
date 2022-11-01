import { atom } from "recoil";
import { v1 } from "uuid";

const themeState = atom({
  key: `themeState${v1()}`,
  default: false,
});

export { themeState };
