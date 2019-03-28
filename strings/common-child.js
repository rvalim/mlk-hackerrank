//https://www.hackerrank.com/challenges/common-child/problem
//Longest common subsequence problem

'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.stdin.on('end', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the commonChild function below.
function commonChild(s1, s2) {
    const arS1 = ` ${s1}`.split('')
    const arS2 = ` ${s2}`.split('')
    let aAuxLast = new Array(1 + s2.length).fill(0)
    let aAuxCurr = new Array(1 + s2.length).fill(0)

    arS1.forEach((a, i) => {
        if (a === ' ') return

        arS2.forEach((b, j) => {
            if (b === ' ') return

            if (a == b) {
                aAuxCurr[j] = aAuxLast[j - 1] + 1
            }
            else {
                aAuxCurr[j] = Math.max(aAuxCurr[j - 1], aAuxLast[j])
            }
        })

        aAuxLast = aAuxCurr.slice();

    })

    return aAuxCurr.reduce((a, b) => Math.max(a, b))
}

    // console.log(commonChild('HARRY', 'SALLY')) //2
    // console.log(commonChild('AA', 'BB')) //0
    // console.log(commonChild('NOHARAAA', 'SHINCHAN')) //3
    // console.log(commonChild('ABCDEF', 'FBDAMN')) //2
    console.log(commonChild('WEWOUCUIDGCGTRMEZEPXZFEJWISRSBBSYXAYDFEJJDLEBVHHKS', 'FDAGCXGKCTKWNECHMRXZWMLRYUCOCZHJRRJBOAJOQJZZVUYXIC')) //15
    console.log(commonChild('ELGGYJWKTDHLXJRBJLRYEJWVSUFZKYHOIKBGTVUTTOCGMLEXWDSXEBKRZTQUVCJNGKKRMUUBACVOEQKBFFYBUQEMYNENKYYGUZSP', 'FRVIFOVJYQLVZMFBNRUTIYFBMFFFRZVBYINXLDDSVMPWSQGJZYTKMZIPEGMVOUQBKYEWEYVOLSHCMHPAZYTENRNONTJWDANAMFRX')) //27