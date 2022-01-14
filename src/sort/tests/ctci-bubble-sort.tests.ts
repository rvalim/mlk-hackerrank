import { countSwaps } from '../ctci-bubble-sort';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/ctci-bubble-sort/problem', () => {
    const expected = (swaps: number, first: number, last: number) => {
        return `Array is sorted in ${swaps} swaps.\nFirst Element: ${first}\nLast Element: ${last}`;
    };
    const input: Array<IInputType> = [
        {
            args: [[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]],
            expected: expected(45, 0, 9)
        },
        {
            args: [[1, 2, 3]],
            expected: expected(0, 1, 3)
        }
    ];

    input.forEach((test) => MyTest(test, countSwaps));
});
