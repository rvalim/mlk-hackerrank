import { IInputType } from '../../utils/iInputType';
import { MyTest } from '../../utils/myTest';
import { countTriplets } from '../count-triplets';

describe('https://www.hackerrank.com/challenges/count-triplets-1/problem', () => {
    const input: Array<IInputType> = [
        {
            args: ['1 2 2 4'.split(' '), 2],
            expected: 2
        }
    ];

    input.forEach((test) => MyTest(test, countTriplets));
});
