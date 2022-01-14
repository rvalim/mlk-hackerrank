import { minimumAbsoluteDifference } from '../minimum-absolute-difference-in-an-array';
import { ReadFileText } from '../../utils/input';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array', () => {
    const input = ReadFileText(
        './src/challenges/tests/minimum-absolute-difference-in-an-array.input.txt'
    ).split('\r\n');
    const output = ReadFileText(
        './src/challenges/tests/minimum-absolute-difference-in-an-array.output.txt'
    ).split('\r\n');

    for (let i = 0; i < input.length; i++) {
        const inputArr = input[i].split(' ');
        const testCase: IInputType = {
            args: [inputArr.length, inputArr],
            expected: Number(output[i])
        };

        MyTest(testCase, minimumAbsoluteDifference);
    }
});
