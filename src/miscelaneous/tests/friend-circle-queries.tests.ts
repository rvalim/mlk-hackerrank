import { maxCircle } from '../friend-circle-queries';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/friend-circle-queries/', () => {
    const input: Array<IInputType> = [
        // [
        //     param : Array<Array<Number>>,
        //     expected : Array<Number>
        // ],
        [
            [
                [1, 2],
                [2, 4],
                [4, 3]
            ],
            [2, 3, 4]
        ],
        [
            [
                [1, 2],
                [3, 4],
                [1, 3],
                [5, 7],
                [5, 6],
                [7, 4]
            ],
            [2, 2, 4, 4, 4, 7]
        ],
        [
            [
                [1000000000, 23],
                [11, 3778],
                [7, 47],
                [11, 1000000000]
            ],
            [2, 2, 2, 4]
        ]
    ].map((p) => {
        const [args, expected] = p;

        return {
            args: [args],
            expected
        };
    });

    input.forEach((test) => MyTest(test, maxCircle));
});
