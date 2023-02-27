export const accounting = (balance: number) => {
  return Boolean(balance)
    ? balance.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
    : 0;
};

export const zeroCount = (balance: number) => {
  return balance > 0 ? balance : 0;
};

export const progressing = (base: number, balance: number) => {
  return Number(((base / balance) * 100).toFixed(5));
};

export const progressingCSS = (base: number, balance: number) => {
  return progressing(base, balance) >= 100 ? 100 : progressing(base, balance);
};
