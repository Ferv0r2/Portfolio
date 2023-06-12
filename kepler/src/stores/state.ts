import { atom } from "recoil";
import { v1 } from "uuid";

const bgState = atom({
  key: `bgState${v1()}`,
  default: "bg-main",
});

const accountState = atom({
  key: `addressState${v1()}`,
  default: "",
});

const balanceState = atom({
  key: `balanceState${v1()}`,
  default: 0,
});

const networkState = atom({
  key: `networkState${v1()}`,
  default: "",
});

const evolState = atom({
  key: `evolState${v1()}`,
  default: 0,
});

const evoledState = atom({
  key: `evoledState${v1()}`,
  default: {},
});

const spawnedState = atom({
  key: `spawnedState${v1()}`,
  default: {},
});

const mixTotalState = atom({
  key: `mixTotalState${v1()}`,
  default: {},
});

const mixEvolState = atom({
  key: `mixEvolState${v1()}`,
  default: {},
});

const boxIdState = atom({
  key: `boxIdState${v1()}`,
  default: 0,
});

const pickIdState = atom({
  key: `pickIdState${v1()}`,
  default: 0,
});

const shopIdState = atom({
  key: `shopIdState${v1()}`,
  default: 0,
});

const shopPotionIdState = atom({
  key: `shopPotionIdState${v1()}`,
  default: 0,
});

const proposalState = atom({
  key: `proposalState${v1()}`,
  default: {},
});

export {
  bgState,
  accountState,
  balanceState,
  evolState,
  evoledState,
  spawnedState,
  mixTotalState,
  mixEvolState,
  networkState,
  boxIdState,
  pickIdState,
  shopIdState,
  shopPotionIdState,
  proposalState,
};
