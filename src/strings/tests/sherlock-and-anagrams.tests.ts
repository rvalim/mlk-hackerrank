import { sherlockAndAnagrams } from '../sherlock-and-anagrams';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem', () => {
    const input: Array<IInputType> = [
        {
            args: ['abba'],
            expected: 4
        },
        {
            args: ['abcd'],
            expected: 0
        },
        {
            args: ['ifailuhkqq'],
            expected: 3
        },
        {
            args: ['kkkk'],
            expected: 10
        },
        {
            args: ['cdcd'],
            expected: 5
        }
    ];

    input.forEach((test) => MyTest(test, sherlockAndAnagrams));
});
