import { makeAnagram } from '../ctci-making-anagrams';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('//https://www.hackerrank.com/challenges/ctci-making-anagrams', () => {
    const input: Array<IInputType> = [
        {
            args: ['cde', 'abc'],
            expected: 4
        },
        {
            args: ['fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'],
            expected: 30
        },
        {
            args: ['showman', 'woman'],
            expected: 2
        }
    ];

    input.forEach((test) => MyTest(test, makeAnagram));
});
