import { flippingBits } from '../flipping-bits';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/flipping-bits/', () => {
    const input: Array<IInputType> = [
        //[param, expected]
        ['2147483647', 2147483648],
        ['1', 4294967294],
        ['0', 4294967295]
    ].map((p) => {
        const [param, expected] = p;
        const args = param
            .toString()
            .split(' ')
            .map((n) => parseInt(n));

        return {
            args,
            expected
        };
    });

    input.forEach((test) => MyTest(test, flippingBits));
});
