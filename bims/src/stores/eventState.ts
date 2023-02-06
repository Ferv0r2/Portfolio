import { atom } from "recoil";
import { v1 } from "uuid";
import { Event } from "utils";

interface SNSItem {
  id: string;
  sns: string;
  options: string[];
}

interface ResultItem {
  id: string;
  title: string;
  content: string;
  type: string;
  point: number;
  metadata?: any;
}

interface EventInputData {
  nftIdx: number;
  title: string;
  content: string;
}

const basketState = atom<SNSItem[]>({
  key: `basketState/${v1()}`,
  default: [],
});

const itemOptionState = atom({
  key: `itemOptionState/${v1()}`,
  default: new Map(),
});

const inputState = atom({
  key: `inputState/${v1()}`,
  default: new Map(),
});

const resultState = atom<ResultItem[]>({
  key: `resultState/${v1()}`,
  default: [],
});

const eventInputState = atom<EventInputData>({
  key: `eventInputState${v1()}`,
  default: {
    nftIdx: 0,
    title: "",
    content: "",
  },
});
const eventListState = atom<Event[]>({
  key: `eventListState/${v1()}`,
  default: [],
});

export {
  basketState,
  itemOptionState,
  inputState,
  resultState,
  eventInputState,
  eventListState,
};
