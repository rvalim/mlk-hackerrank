/* eslint-disable  @typescript-eslint/no-explicit-any */
import { expect } from 'chai';
import { IInputType } from './iInputType';

function myExpect(result: any, expected: any): void {
    if (typeof result === 'object')
        expect(JSON.stringify(result)).to.equal(JSON.stringify(expected));
    else expect(result).to.equal(expected);
}

export function MyTest(
    test: IInputType,
    callback: (...params: any[]) => any
): void {
    const cut = (s: any): string => {
        const size = 100;
        const str = s?.toString().substring(0, size);
        return str?.length === 100 ? `${str}...` : str;
    };
    it(`Parameters: ${cut(test.args)}; Expected: ${cut(
        test.expected
    )}`, function () {
        const result = callback(...test.args);
        myExpect(result, test.expected);
    });
}
