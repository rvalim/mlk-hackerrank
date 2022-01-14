import { candies } from '../candies';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/candies/', () => {
    const input: Array<IInputType> = [
        ['2 4 2 6 1 7 8 9 2 1', 19],
        ['8 2 4 3 5 2 6 4 5', 14],
        ['2 4 3 5 2 6 4 5', 12],
        ['1 2 2', 4]
    ].map((p) => {
        const [param, expected] = p;
        const aux = param
            .toString()
            .split(' ')
            .map((n) => Number(n));

        return {
            args: [aux.length, aux],
            expected
        };
    });

    input.forEach((test) => MyTest(test, candies));
});
