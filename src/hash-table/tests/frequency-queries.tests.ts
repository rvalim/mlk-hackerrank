import { IInputType } from '../../utils/iInputType';
import { ReadFileText } from '../../utils/input';
import { MyTest } from '../../utils/myTest';
import { freqQuery } from '../frequency-queries';

describe('https://www.hackerrank.com/challenges/frequency-queries', () => {
    const splitLines = (str: string) => str.split('\r\n');
    const splitLinesAndSpaces = (str: string) =>
        splitLines(str).map((s) => s.split(' '));
    const input: Array<IInputType> = [];

    input.push({
        args: [
            splitLinesAndSpaces(
                ReadFileText(
                    './src/hash-table/tests/frequency-queries.input.txt'
                )
            )
        ],
        expected: splitLines(
            ReadFileText('./src/hash-table/tests/frequency-queries.output.txt')
        )
    });

    input.forEach((test) => MyTest(test, freqQuery));
});
