import { shortestReach } from '../bfs';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';
import { StreamReader } from '../../utils/streamReader';
import { ReadFileText } from '../../utils/input';

function getArgs(inputFile: string): Array<any> {
    const file = new StreamReader(inputFile);

    //const t = parseInt(file.readFileLine(), 10);
    file.readFileLine();
    // for (let tItr = 0; tItr < t; tItr++) {
    const nm = file.readFileLine().split(' ');
    const n = parseInt(nm[0], 10);
    const m = parseInt(nm[1], 10);
    const edges = Array(m);

    for (let i = 0; i < m; i++) {
        edges[i] = file
            .readFileLine()
            .split(' ')
            .map((edgesTemp) => parseInt(edgesTemp, 10));
    }

    const s = parseInt(file.readFileLine(), 10);

    file.dispose();
    return [n, edges, s];
    // }
}

describe('https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/', () => {
    for (let i = 0; i < 2; i++) {
        const inputFile = `./src/greedy/tests/bfs.input.${i}.txt`;
        const outputFile = `./src/greedy/tests/bfs.output.${i}.txt`;
        const input: IInputType = {
            args: getArgs(inputFile),
            expected: ReadFileText(outputFile)
                .split(' ')
                .map((p) => Number(p))
        };

        MyTest(input, shortestReach);
    }
});
