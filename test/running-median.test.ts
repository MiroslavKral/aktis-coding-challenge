import * as fs from 'fs';
import * as path from 'path';
import { runningMedian } from '../src/running-median';

const readInputs = (fileName: string) => {
  const input = fs.readFileSync(path.join(__dirname, 'inputs', fileName));
  const lines = input.toString().split(/[\n\r]/);
  const noOfValues = parseInt(lines[0]);
  const values = lines.slice(1);

  return { noOfValues, values };
};

const readOutputs = (fileName: string) => {
  return fs
    .readFileSync(path.join(__dirname, 'results', fileName))
    .toString()
    .split(/[\n\r]/)
    .filter(line => !!line);
};

describe('running median tests', () => {
  test('should compute median for sorted values', () => {
    // given
    const noOfValues = 10;
    const values = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

    // when
    const results = runningMedian(noOfValues, values);

    // then
    expect(results).toEqual([
      '1.0',
      '1.5',
      '2.0',
      '2.5',
      '3.0',
      '3.5',
      '4.0',
      '4.5',
      '5.0',
      '5.5'
    ]);
  });

  test('should compute for 1000', () => {
    // given
    const { noOfValues, values } = readInputs('input01.txt');
    const outputs = readOutputs('output01.txt');

    // when
    const results = runningMedian(noOfValues, values);

    // then
    expect(results).toEqual(outputs);
  });

  xtest('should compute for 100000(input02)', () => {
    // given
    const { noOfValues, values } = readInputs('input02.txt');
    const outputs = readOutputs('output02.txt');

    // when
    const results = runningMedian(noOfValues, values);

    // then
    expect(results.join(' ')).toEqual(outputs.join(' '));
  });

  xtest('should compute for 100000(input03)', () => {
    // given
    const { noOfValues, values } = readInputs('input03.txt');
    const outputs = readOutputs('output03.txt');

    // when
    const results = runningMedian(noOfValues, values);

    // then
    expect(results.join(' ')).toEqual(outputs.join(' '));
  });

  xtest('should compute for 100000(input04)', () => {
    // given
    const { noOfValues, values } = readInputs('input04.txt');
    const outputs = readOutputs('output04.txt');

    // when
    const results = runningMedian(noOfValues, values);

    // then
    expect(results.join(' ')).toEqual(outputs.join(' '));
  });
});
