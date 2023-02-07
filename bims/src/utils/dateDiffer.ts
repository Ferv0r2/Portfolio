type Compare = ">" | "<" | "=";

export const dateCompare = (date: Date, type: Compare) => {
  return type === ">"
    ? Number(new Date()) > Number(date)
    : Number(new Date()) < Number(date);
};

export const underDay = (smallDate: Date, bigDate: Date): boolean => {
  return Number(bigDate) - Number(smallDate) > 24 * 60 * 60 * 1000;
};

export const getHoursDiffer = (smallDate: Date, bigDate: Date): number => {
  return parseInt(
    String((Number(bigDate) - Number(smallDate)) / (60 * 60 * 1000))
  );
};
export const getDaysDiffer = (smallDate: Date, bigDate: Date): number => {
  return parseInt(
    String((Number(bigDate) - Number(smallDate)) / (24 * 60 * 60 * 1000))
  );
};
