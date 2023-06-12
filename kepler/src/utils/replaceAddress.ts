export const replaceAddress = (address: string) => {
  return address.replace(address.substring(6, 36), "...");
};
