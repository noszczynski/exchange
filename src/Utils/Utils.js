export const roundNumberToTwoDecimal = (n) => {
  return Math.round((n + Number.EPSILON) * 100) / 100;
};

export const generateRandomId = () => {
  return Number(Math.floor(Math.random() * 99999999));
};

export const getSumOfAmounts = (arr = []) => {
  return arr.reduce((sum, { amount }) => sum + Number(amount), 0);
};

export const findMaxTransaction = (arr = []) => {
  const MAX = Math.max.apply(
    Math,
    arr.map((o) => o.amount)
  );

  return arr.find((item) => item.amount === MAX && item);
};
