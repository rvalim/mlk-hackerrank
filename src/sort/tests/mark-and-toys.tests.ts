import { maximumToys } from '../mark-and-toys';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/mark-and-toys/problem', () => {
    const convert = (str: string) => str.split(' ').map((s) => Number(s));
    const input: Array<IInputType> = [
        {
            args: [convert('1 12 5 111 200 1000 10'), 50],
            expected: 4
        }
    ];

    input.forEach((test) => MyTest(test, maximumToys));
});
