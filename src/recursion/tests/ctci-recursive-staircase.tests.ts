import { IInputType } from '../../utils/iInputType';
import { MyTest } from '../../utils/myTest';
import { stepPerms } from '../ctci-recursive-staircase';

describe('https://www.hackerrank.com/challenges/ctci-recursive-staircase', () => {
    const input: Array<IInputType> = [
        {
            args: [5],
            expected: 13
        }
    ];

    input.forEach((test) => MyTest(test, stepPerms));
});
