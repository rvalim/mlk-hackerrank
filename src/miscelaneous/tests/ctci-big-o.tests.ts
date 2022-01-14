import { primality } from '../ctci-big-o';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/ctci-big-o/', () => {
    const input: Array<IInputType> = [
        //[param, expected]
        ['12 5 7', 'Not prime'],
        [
            '1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256 289 324 361 400 441 484 529 576 625 676 729 784 841 907',
            'Not prime'
        ]
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

    input.forEach((test) => MyTest(test, primality));
});
