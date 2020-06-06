export const roundNumberToTwoDecimal = (n) => {
  return Math.round((n + Number.EPSILON) * 100) / 100;
};

export const generateRandomId = () => {
  return Number(Math.floor(Math.random() * 99999999));
};

export const getSumOfAmounts = (arr = []) => {
  return arr.reduce((sum, { amount }) => sum + Number(amount), 0);
};
