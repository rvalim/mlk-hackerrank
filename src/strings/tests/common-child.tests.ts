import { commonChild } from '../common-child';
import 'mocha';
import { MyTest } from '../../utils/myTest';
import { IInputType } from '../../utils/iInputType';

describe('https://www.hackerrank.com/challenges/common-child', () => {
    const input: Array<IInputType> = [
        {
            args: ['HARRY', 'SALLY'],
            expected: 2
        },
        {
            args: ['AA', 'BB'],
            expected: 0
        },
        {
            args: ['NOHARAAA', 'SHINCHAN'],
            expected: 3
        },
        {
            args: ['ABCDEF', 'FBDAMN'],
            expected: 2
        },
        {
            args: [
                'WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS',
                'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC'
            ],
            expected: 15
        },
        {
            args: [
                'ELGGYJWKTDHLXJRBJLRYEJWVSUFZKYHOIKBGTVUTTOCGMLEXWDSXEBKRZTQUVCJNGKKRMUUBACVOEQKBFFYBUQEMYNENKYYGUZSP',
                'FRVIFOVJYQLVZMFBNRUTIYFBMFFFRZVBYINXLDDSVMPWSQGJZYTKMZIPEGMVOUQBKYEWEYVOLSHCMHPAZYTENRNONTJWDANAMFRX'
            ],
            expected: 27
        }
    ];

    input.forEach((test) => MyTest(test, commonChild));
});
