import { IInputType } from '../../utils/iInputType';
import { MyTest } from '../../utils/myTest';
import { checkMagazine } from '../ctci-ransom-note';

describe('https://www.hackerrank.com/challenges/ctci-ransom-note/problem', () => {
    const input: Array<IInputType> = [
        {
            args: [
                'give me one grand today night'.split(' '),
                'give one grand today'.split(' ')
            ],
            expected: 'Yes'
        }
    ];

    input.forEach((test) => MyTest(test, checkMagazine));
});
