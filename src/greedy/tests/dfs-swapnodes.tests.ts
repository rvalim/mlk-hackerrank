import { swapNodes } from '../dfs-swapnodes';
import { ReadFileText } from '../../utils/input';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';
import { StreamReader } from '../../utils/StreamReader';

function getArgs(inputFile: string): Array<any> {
    const file = new StreamReader(inputFile);

    const n = parseInt(file.readFileLine(), 10);
    const indexes = Array(n);

    for (let indexesRowItr = 0; indexesRowItr < n; indexesRowItr++) {
        indexes[indexesRowItr] = file
            .readFileLine()
            .split(' ')
            .map((indexesTemp) => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(file.readFileLine(), 10);
    const queries = [];

    for (let queriesItr = 0; queriesItr < queriesCount; queriesItr++) {
        const queriesItem = parseInt(file.readFileLine(), 10);
        queries.push(queriesItem);
    }

    file.dispose();
    return [indexes, queries];
}

describe('https://www.hackerrank.com/challenges/swap-nodes-algo/', () => {
    for (let i = 0; i < 1; i++) {
        const inputFile = `./src/greedy/tests/dfs-swapnodes.input.${i}.txt`;
        const outputFile = `./src/greedy/tests/dfs-swapnodes.output.${i}.txt`;
        const input: IInputType = {
            args: getArgs(inputFile),
            expected: ReadFileText(outputFile)
                .split('\r\n')
                .map((p) => p.split(' ').map((n) => Number(n)))
        };

        MyTest(input, swapNodes);
    }
});
