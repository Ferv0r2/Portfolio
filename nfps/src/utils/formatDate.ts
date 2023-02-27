import moment from "moment";

export const formatDate = (date: Date): string => {
  return date ? moment(date).format("YYYY년 MM월 DD일") : date;
};

export const formatDateSlash = (date: Date): string => {
  return date ? moment(date).format("YYYY/MM/DD") : date;
};

export const formatDateDot = (date: Date): string => {
  return date ? moment(date).format("YYYY.MM.DD") : date;
};

export const formatDay = (date: Date): string => {
  return date ? moment(date).format("DD") : date;
};

export const dateGap = (date1: Date, date2: Date) => {
  date1.setHours(9, 0, 0);
  const preDate = moment(date1);
  const nextDate = moment(date2);
  return preDate.diff(nextDate);
};

export const toHours = (bn: number) => {
  let date = bn / ((60 * 60) / 3);
  return Math.floor(date);
};

export const toDate = (bn: number) => {
  let date = bn / ((60 * 60 * 24) / 3);
  return Math.floor(date);
};

export const toNumber = (date: Date) => {
  return Number(new Date(date));
};

export const bnToDate = (base: Date, addNum: number) => {
  return moment(base).add(addNum, "days").toDate();
};
