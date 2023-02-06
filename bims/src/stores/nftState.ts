import { atom } from "recoil";
import { v1 } from "uuid";
import { Project } from "utils";

export const collectionState = atom<Project[]>({
  key: `collectionState/${v1()}`,
  default: [],
});
