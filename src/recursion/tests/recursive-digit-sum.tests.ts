import { IInputType } from '../../utils/iInputType';
import { MyTest } from '../../utils/myTest';
import { superDigit } from '../recursive-digit-sum';

describe('https://www.hackerrank.com/challenges/recursive-digit-sum', () => {
    const input: Array<IInputType> = [
        {
            args: ['123', 3],
            expected: '9'
        }
    ];

    input.forEach((test) => MyTest(test, superDigit));
});
