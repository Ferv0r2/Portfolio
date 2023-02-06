import { atom } from "recoil";
import { v1 } from "uuid";

export interface Toast {
  content: string;
  type?: string;
}

export const toastShowState = atom<boolean>({
  key: `toastShowState/${v1()}`,
  default: false,
});

export const toastDataState = atom<Toast>({
  key: `toastDataState/${v1()}`,
  default: {
    content: "",
    type: "primary",
  },
});
