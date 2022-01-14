import { IInputType } from '../../utils/iInputType';
import { MyTest } from '../../utils/myTest';
import { findMin } from '../find-minimum-in-rotated-sorted-array';

describe('https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/', () => {
    const input: Array<IInputType> = [
        {
            args: [[11, 13, 15, 17]],
            expected: 11
        }
    ];

    input.forEach((test) => MyTest(test, findMin));
});
