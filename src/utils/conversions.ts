export const formatNumbers = (inputNumber: number): string => {
  return inputNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};
