import { luckBalance } from '../luck-balance';
import { ReadFileText } from '../../utils/input';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';
import { StreamReader } from '../../utils/streamReader';

function getArgs(inputFile: string): Array<any> {
    const file = new StreamReader(inputFile);

    const nk = file.readFileLine().split(' ');
    const n = parseInt(nk[0], 10);
    const k = parseInt(nk[1], 10);
    const contests = Array(n);

    for (let i = 0; i < n; i++) {
        contests[i] = file
            .readFileLine()
            .split(' ')
            .map((contestsTemp) => parseInt(contestsTemp, 10));
    }

    file.dispose();
    return [k, contests];
}

describe('https://www.hackerrank.com/challenges/luck-balance/', () => {
    for (let i = 0; i < 1; i++) {
        const inputFile = `./src/greedy/tests/luck-balance.input.${i}.txt`;
        const outputFile = `./src/greedy/tests/luck-balance.output.${i}.txt`;

        const args = getArgs(inputFile);
        const output = Number(ReadFileText(outputFile));
        const input: IInputType = {
            args,
            expected: output
        };

        MyTest(input, luckBalance);
    }
});
