import { arrayManipulation } from '../crush';
import { ReadFileText } from '../../utils/input';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';
import { StreamReader } from '../../utils/StreamReader';

function getArgs(inputFile: string): Array<any> {
    const file = new StreamReader(inputFile);
    let line = file.readFileLine();

    const nm = line.toString().split(' ');
    const n = parseInt(nm[0], 10);
    const m = parseInt(nm[1], 10);
    const queries = Array(m);

    for (let i = 0; i < m; i++) {
        line = file.readFileLine();

        queries[i] = line
            .toString()
            .split(' ')
            .map((queriesTemp) => parseInt(queriesTemp, 10));
    }

    file.dispose();
    return [n, queries];
}

describe('https://www.hackerrank.com/challenges/crush/', () => {
    const inputFile = './src/arrays/tests/crush.input.txt';
    const outputFile = './src/arrays/tests/crush.output.txt';
    const input: Array<IInputType> = [
        {
            args: getArgs(inputFile),
            expected: Number(ReadFileText(outputFile))
        }
    ];

    input.forEach((test) => MyTest(test, arrayManipulation));
});
