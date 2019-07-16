const fastSort = require('fast-sort');

const formatNumber = (value: number): string => {
  const rounded = Math.round(value * 10) / 10;
  return rounded.toFixed(1);
};

const isEven = (n: number) => n % 2 === 0;

/**
 * Method computes running median for array
 * of values with odd length.
 *
 * @param values - sorted array of numbers
 */
const computeMedianForOddLength = (values: number[]): string => {
  const index = Math.round(values.length / 2) - 1;
  return formatNumber(values[index]);
};

/**
 * Method computes running median for array
 * of values with even length.
 *
 * @param values - sorted array of numbers
 */
const computeMedianForEvenLength = (values: number[]): string => {
  const higherIndex = values.length / 2;
  const lowerIndex = higherIndex - 1;
  const firstValue = values[lowerIndex];
  const secondValue = values[higherIndex];
  const median = (firstValue + secondValue) / 2;
  return formatNumber(median);
};

/**
 * Method computes running median for given array.
 *
 * @param values - sorted array of numbers
 */
const computeMedian = (values: number[]) => {
  return isEven(values.length)
    ? computeMedianForEvenLength(values)
    : computeMedianForOddLength(values);
};

export const runningMedian = (
  numberOfValues: number,
  inputs: string[]
): string[] => {
  const sortedArray: number[] = [];
  const results: string[] = [];

  inputs.forEach((input: string, index: number) => {
    if (index === numberOfValues) {
      return;
    }

    sortedArray.push(parseInt(input));
    // I try fast-sort library, but for 100000, tests run long :-(
    fastSort(sortedArray).asc();

    const median = computeMedian(sortedArray);
    console.log(median);
    results.push(median);
  });

  return results;
};
