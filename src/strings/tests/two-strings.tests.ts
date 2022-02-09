import { twoStrings } from '../two-strings';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/two-strings', () => {
    const input: Array<IInputType> = [
        {
            args: ['hello', 'world'],
            expected: 'YES'
        },
        {
            args: ['hi', 'world'],
            expected: 'NO'
        },
        {
            args: ['wouldyoulikefries', 'abcabcabcabcabcabc'],
            expected: 'NO'
        }
    ];

    input.forEach((test) => MyTest(test, twoStrings));
});
