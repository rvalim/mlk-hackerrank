import { MyTest } from '../../utils/myTest';
import { crosswordPuzzle } from '../crossword-puzzle';
import { ReadFileText } from '../../utils/input';
import { IInputType } from '../../utils/iInputType';
import { StreamReader } from '../../utils/streamReader';

function getArgs(inputFile: string): Array<any> {
    const file = new StreamReader(inputFile);
    const crossword = [];

    for (let i = 0; i < 10; i++) {
        const crosswordItem = file.readFileLine();
        crossword.push(crosswordItem);
    }

    const words = file.readFileLine();

    file.dispose();
    return [crossword, words];
}

describe('https://www.hackerrank.com/challenges/crossword-puzzle', () => {
    it('Should be possible to solve puzzles', () => {
        for (let i = 0; i < 2; i++) {
            const inputFile = `./src/recursion/tests/crossword-puzzle.input.${i}.txt`;
            const outputFile = `./src/recursion/tests/crossword-puzzle.output.${i}.txt`;

            const args = getArgs(inputFile);
            const output = ReadFileText(outputFile)
                .split('\r\n')
                .map((p) => p.split(''));
            const input: IInputType = {
                args,
                expected: output
            };

            MyTest(input, crosswordPuzzle);
        }
    });
});
