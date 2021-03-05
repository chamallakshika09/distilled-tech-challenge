export const formatNumbers = (inputNumber: number): string => {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

export const getFormattedString = (inputArray: { name: string }[]): string => {
  return inputArray.reduce((acc, cur) => {
    if (acc.length === 0) {
      return `${cur.name}`;
    } else {
      return `${acc}, ${cur.name}`;
    }
  }, '');
};
