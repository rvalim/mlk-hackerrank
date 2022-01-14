import { rotLeft } from '../array-left-rotation';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/array-left-rotation/', () => {
    const input: Array<IInputType> = [
        {
            args: [[1, 2, 3, 4, 5], 3],
            expected: [4, 5, 1, 2, 3]
        }
    ];

    input.forEach((test) => MyTest(test, rotLeft));
});
