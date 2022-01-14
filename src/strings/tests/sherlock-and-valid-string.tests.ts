import { isValid } from '../sherlock-and-valid-string';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem', () => {
    const input: Array<IInputType> = [
        {
            args: ['aabbccddeefghi'],
            expected: 'NO'
        },
        {
            args: ['abcdefghhgfedecba'],
            expected: 'YES'
        }
    ];

    input.forEach((test) => MyTest(test, isValid));
});
