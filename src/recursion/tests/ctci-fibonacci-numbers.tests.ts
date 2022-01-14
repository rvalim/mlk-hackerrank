import { IInputType } from '../../utils/iInputType';
import { MyTest } from '../../utils/myTest';
import { fibonacci } from '../ctci-fibonacci-numbers';

describe('https://www.hackerrank.com/challenges/ctci-fibonacci-numbers', () => {
    const input: Array<IInputType> = [
        {
            args: [5],
            expected: 5
        },
        {
            args: [17],
            expected: 1597
        },
        {
            args: [12],
            expected: 144
        }
    ];

    input.forEach((test) => MyTest(test, fibonacci));
});
