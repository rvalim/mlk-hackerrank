import { alternatingCharacters } from '../alternating-characters';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/alternating-characters/problem', () => {
    const input: Array<IInputType> = [
        {
            args: ['AAAA'],
            expected: 3
        },
        {
            args: ['BBBBB'],
            expected: 4
        },
        {
            args: ['ABABABAB'],
            expected: 0
        },
        {
            args: ['AAABBB'],
            expected: 4
        },
        {
            args: ['BABABA'],
            expected: 0
        }
    ];

    input.forEach((test) => MyTest(test, alternatingCharacters));
});
