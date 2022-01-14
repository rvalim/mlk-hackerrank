import { maxMin } from '../angry-children';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/ctci-big-o/', () => {
    const input: Array<IInputType> = [
        {
            args: [3, [10, 100, 300, 200, 1000, 20, 30]],
            expected: 20
        },
        {
            args: [4, [1, 2, 3, 4, 10, 20, 30, 40, 100, 200]],
            expected: 3
        },
        {
            args: [2, [1, 2, 1, 2, 1]],
            expected: 0
        }
    ];

    input.forEach((test) => MyTest(test, maxMin));
});
