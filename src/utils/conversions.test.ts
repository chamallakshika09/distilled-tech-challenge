import { formatNumbers, getFormattedString } from './conversions';

describe('formatNumbers', () => {
  it('should return the same number as string when given a number smaller than 1000', () => {
    expect(formatNumbers(0)).toEqual('0');
    expect(formatNumbers(5)).toEqual('5');
    expect(formatNumbers(13)).toEqual('13');
    expect(formatNumbers(372)).toEqual('372');
  });

  it('should return the comma separated number when given a number larger than or equal to 1000', () => {
    expect(formatNumbers(1000)).toEqual('1,000');
    expect(formatNumbers(14234)).toEqual('14,234');
    expect(formatNumbers(14523568)).toEqual('14,523,568');
    expect(formatNumbers(2485723618910)).toEqual('2,485,723,618,910');
  });
});

describe('getFormattedList', () => {
  it('should return an empty string when given an empty array as input', () => {
    expect(getFormattedString([])).toEqual('');
  });

  it('should return a string without commas when given an array with one element as input', () => {
    expect(getFormattedString([{ name: 'abc' }])).toEqual('abc');
  });

  it('should return a comma separated string when given an array with more than one element as input', () => {
    expect(getFormattedString([{ name: 'abc' }, { name: 'def' }, { name: 'ghi' }, { name: 'jkl' }])).toEqual(
      'abc, def, ghi, jkl'
    );
  });
});
