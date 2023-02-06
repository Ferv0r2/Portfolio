export const shortAddress = (address: string | null | undefined) => {
  return (
    (!!address && address?.replace(address?.substring(6, 36), "...")) ?? null
  );
};
