import lineByLine from 'n-readlines';

export class StreamReader {
    private _input: lineByLine;

    constructor(fileName: string) {
        this._input = new lineByLine(fileName);
    }

    public dispose(): void {
        // this._input?.close();
    }

    public readFileLine(): string {
        const line = this._input.next();

        return line.toString();
    }
}
