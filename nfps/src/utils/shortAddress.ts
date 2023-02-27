export const shortAddress = (addr: string) => {
  return Boolean(addr) ? addr.replace(addr.substring(6, 36), "...") : false;
};
