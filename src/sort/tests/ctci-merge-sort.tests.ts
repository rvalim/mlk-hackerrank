import { countInversions } from '../ctci-merge-sort';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/ctci-merge-sort', () => {
    const convert = (str: string) => str.split(' ').map((s) => Number(s));
    const input: Array<IInputType> = [
        {
            args: [convert('2 1 3 1 2')],
            expected: 4
        },
        {
            args: [convert('1 1 2 2 3')],
            expected: 0
        },
        {
            args: [convert('2 2 3 3 4 4 8 6 8')],
            expected: 1
        },
        {
            args: [convert('2 2 3 3 4 6 8 4 5')],
            expected: 4
        }
    ];

    input.forEach((test) => MyTest(test, countInversions));
});
