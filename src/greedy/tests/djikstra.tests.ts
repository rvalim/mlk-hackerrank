import { shortestReach } from '../dijkstra';
import { ReadFileText } from '../../utils/input';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';
import { StreamReader } from '../../utils/streamReader';

function getArgs(inputFile: string): Array<any> {
    const file = new StreamReader(inputFile);

    const t = parseInt(file.readFileLine(), 10);
    const args = [];

    for (let tItr = 0; tItr < t; tItr++) {
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

        args.push([n, edges, s]);
    }

    file.dispose();
    return args;
}

describe('https://www.hackerrank.com/challenges/dijkstrashortreach/', () => {
    for (let i = 0; i < 1; i++) {
        const inputFile = `./src/greedy/tests/dijkstra.input.${i}.txt`;
        const outputFile = `./src/greedy/tests/dijkstra.output.${i}.txt`;

        const args = getArgs(inputFile);
        const output = ReadFileText(outputFile)
            .split('\r\n')
            .map((p) => p.split(' ').map((n) => Number(n)));

        for (let j = 0; j < args.length; j++) {
            const input: IInputType = {
                args: args[j],
                expected: output[j]
            };

            MyTest(input, shortestReach);
        }
    }
});
