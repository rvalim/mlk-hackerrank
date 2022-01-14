import { activityNotifications } from '../fraudulent-activity-notifications';
import { ReadFileText } from '../../utils/input';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/fraudulent-activity-notifications/problem', () => {
    const convert = (str: string) => str.split(' ').map((s) => Number(s));
    const input: Array<IInputType> = [
        {
            args: [convert('2 3 4 2 3 6 8 4 5'), 5],
            expected: 2
        },
        {
            args: [convert('1 2 3 4 4'), 4],
            expected: 0
        },
        {
            args: [convert('10 20 30 40 50'), 5],
            expected: 0
        }
    ];

    input.push({
        args: [
            convert(
                ReadFileText(
                    './src/sort/tests/fraudulent-activity-notifications.input.txt'
                )
            ),
            10000
        ],
        expected: 633
    });

    input.forEach((test) => MyTest(test, activityNotifications));
});
