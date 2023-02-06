type Compare = '>' | '<' | '='

export const dateCompare = (date: Date, type: Compare) => {
  return type === '>' ? Number(new Date()) > Number(date) : Number(new Date()) < Number(date)
}
