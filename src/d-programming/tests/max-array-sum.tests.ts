import { maxSubsetSum } from '../max-array-sum';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/max-array-sum', () => {
    const input: Array<IInputType> = [
        ['3 7 4 6 5', 13],
        ['2 1 5 8 4', 11],
        ['3 5 -7 8 10', 15]
    ].map((p) => {
        const [param, expected] = p;
        const aux = param
            .toString()
            .split(' ')
            .map((n) => parseInt(n));

        return {
            args: [aux],
            expected
        };
    });

    input.forEach((test) => MyTest(test, maxSubsetSum));
});
