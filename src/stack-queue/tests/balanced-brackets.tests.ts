import { isBalanced } from '../balanced-brackets';
import { ReadFileText } from '../../utils/input';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/balanced-brackets', () => {
    // return;
    const input = ReadFileText(
        './src/stack-queue/tests/balanced-brackets.input.txt'
    ).split('\r\n');
    const output = ReadFileText(
        './src/stack-queue/tests/balanced-brackets.output.txt'
    ).split('\r\n');

    for (let i = 0; i < input.length; i++) {
        const testCase: IInputType = {
            args: [input[i]],
            expected: output[i]
        };

        MyTest(testCase, isBalanced);
    }
});
