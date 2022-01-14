import { abbreviation } from '../abbr';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/abbr/', () => {
    const input: Array<IInputType> = [
        ['Pi P', 'YES'],
        ['AfPZN APZNC', 'NO'],
        ['LDJAN LJJM', 'NO'],
        [
            'abaBababababababaBabAbabababaBabababAbabAbababAbabaBababababAbAbababaBababAbaBabababababababababAbababababababAbabAbabAbaBababababababAbababaBababAbabababababababababababababAbAbaBababababababAbabababababababaBabababababababababaBabAbabaBabababaBababababababababababaBababababaBabababaBababaBababababababaBabababababAbaBabAbaBababaBabaBaBabababababababababababaBabababababAbabaBabababAbababAbabababababababababaBababababababababaBababAbABababababababababaBababababaBabababababAbabaBababababababababaBaBabaBabAbabAbabAbaBababAbAbaBAbAbabAbabAbabababababaBabababababababababAbabababaBababaBabABababababababababaBabababababababababababababaBAbAbababababAbababababababababababababababababababababaBabABabAbabababababAbaBaBabababababababaBabababababababababababaBabaBabababAbababababababaBababaBababababababababababababaBababababababaBabaBabababaBabababaBabababAbabababababababAbababababababababababaBaBababaBabababAbabaBabAbabababaBabababababababababababababababababababababababababababababababababababab AABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABB',
            'NO'
        ],
        [
            'abcdefghijklmnopqrstuvwxyzabaBababababababababaBababababababababababababababababAbabababababababababAbabababababababAbababababaBabababababababababababaBabababAbabababababababababababababababababababababababababababababAbabaBababababababababababAbAbabababababAbababababababAbababaBabaBabaBabABababAbababAbabababababababababAbAbabababAbAbabababababaBababababababAbababABabAbabAbababababaBabababababababababababababababababababababAbababababababAbabababababababababababaBabaBabababababababaBababababaBababAbababaBabaBabababababababababababaBababababababababaBababababababababAbAbabaBabababAbabAbabababababaBababababababAbababababAbabababababaBabababababaBAbababAbabababababAbabababababababababababababababababababababababababaBababababAbababababababababababAbabababababAbAbabababababababABabababababababaBababababababaBabababababababababababAbababababababababababAbabaBabababAbabababababAbabababAbabababababababAbabababababababababababaBabAbababababABCDEFGHIJKLMNOPQRSTUVWXYZ ABCDEFGHIJKLMNOPQRSTUVWXYZAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBAABBABCDEFGHIJKLMNOPQRSTUVWXYZ',
            'NO'
        ]
    ].map((p) => {
        const [param, expected] = p;

        return {
            args: param.toString().split(' '),
            expected
        };
    });

    input.forEach((test) => MyTest(test, abbreviation));
});
