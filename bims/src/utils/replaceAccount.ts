export const replaceAccount = (cash: number) => {
  return String(cash).replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
