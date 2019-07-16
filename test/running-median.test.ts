import { runningMedian } from '../src/running-median';

describe('running median tests', () => {
  test('should compute median for sorted values', () => {
    // given
    const noOfValues = 10;
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

    // when
    const results = runningMedian(noOfValues, values);

    // then
    expect(results).toEqual(['1.0', '1.5', '2.0', '2.5', '3.0', '3.5', '4.0', '4.5', '5.0', '5.5']);
  });
});
