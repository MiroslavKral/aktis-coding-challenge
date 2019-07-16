const formatNumber = (value: number): string => {
  const rounded = Math.round(value * 10) / 10;
  return rounded.toFixed(1);
};

const isEven = (n: number) => n % 2 === 0;

const computeMedianForOddLength = (values: number[]): string => {
  const index = Math.round(values.length / 2) - 1;
  // console.log('ODD LENGTH: ', values.length);
  // console.log('ODD index: ', index);
  return formatNumber(values[index]);
};

const computeMedianForEvenLength = (values: number[]): string => {
  const higherIndex = values.length / 2;
  const lowerIndex = higherIndex - 1;
  // console.log('EVEN LENGTH: ', values.length);
  // console.log('EVEN LI: ', lowerIndex);
  // console.log('EVEN HI: ', higherIndex);
  const firstValue = values[lowerIndex];
  const secondValue = values[higherIndex];
  // console.log('EVEN first: ', firstValue);
  // console.log('EVEN second: ', secondValue);
  const median = (firstValue + secondValue) / 2;
  return formatNumber(median);
};

const computeMedian = (values: number[]) => {
  return isEven(values.length)
    ? computeMedianForEvenLength(values)
    : computeMedianForOddLength(values);
};

export const runningMedian = (
  numberOfValues: number,
  values: string[]
): string[] => {
  const sortedArray: number[] = [];
  const results: string[] = [];

  values.forEach(value => {
    sortedArray.push(parseInt(value));

    const median = computeMedian(sortedArray);
    console.log(median);
    results.push(median);
  });

  return results;
};
