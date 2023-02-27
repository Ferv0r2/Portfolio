import { atom } from "recoil";
import { v1 } from "uuid";

export interface IMilestone {
  title: string;
  content: string[];
  price: number;
  startDate: Date;
  endDate: Date;
}

export const milestoneState = atom<IMilestone[]>({
  key: `milestoneState/${v1()}`,
  default: [],
});
