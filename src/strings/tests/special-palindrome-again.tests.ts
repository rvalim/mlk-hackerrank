import { substrCount } from '../special-palindrome-again';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/special-palindrome-again/problem', () => {
    const input: Array<IInputType> = [
        {
            args: ['asasd'],
            expected: 7
        },
        {
            args: ['abcbaba'],
            expected: 10
        },
        {
            args: ['aaaa'],
            expected: 10
        }
    ];

    input.forEach((test) => MyTest(test, substrCount));
});
