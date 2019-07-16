const formatNumber = (value: number): string => {
  const rounded = Math.round(value * 10) / 10;
  return rounded.toFixed(1);
};

export const runningMedian = (numberOfValues: number, values: number[]) => {
  const number = 1;
  console.log('start');
  console.log('TO FIXED: ', number.toFixed(1));
  const sortedArray: number[] = [];
  const results: string[] = [];

  values.forEach(value => {
    sortedArray.push(value);

    if (sortedArray.length === 1) {
      results.push(formatNumber(sortedArray[0]));
    } else if (sortedArray.length === 2) {
      const median = (sortedArray[0] + sortedArray[1]) / 2;
      results.push(formatNumber(median));
    } else if (sortedArray.length % 2 === 0) {
      const higherIndex = sortedArray.length / 2;
      const lowerIndex = higherIndex - 1;
      console.log('M2 LENGTH: ', sortedArray.length);
      console.log('M2 LI: ', lowerIndex);
      console.log('M2 HI: ', higherIndex);
      const firstValue = sortedArray[lowerIndex];
      const secondValue = sortedArray[higherIndex];
      console.log('M2 first: ', firstValue);
      console.log('M2 second: ', secondValue);
      const median = (firstValue + secondValue) / 2;
      results.push(formatNumber(median));
      console.log('M2: ', results);
    } else if (sortedArray.length % 2 !== 0) {
      const index = Math.round(sortedArray.length / 2) - 1;
      console.log('M3 LENGTH: ', sortedArray.length);
      console.log('M3 index: ', index);
      results.push(formatNumber(sortedArray[index]));
      console.log('M3: ', results);
    }
  });

  return results;
};
