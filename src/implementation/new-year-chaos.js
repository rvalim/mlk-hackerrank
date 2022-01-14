//https://www.hackerrank.com/challenges/new-year-chaos/problem

'use strict';

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});
process.on('SIGINT', (_) => {
    inputString = inputString
        .replace(/\s*$/, '')
        .split('\n')
        .map((str) => str.replace(/\s*$/, ''));

    main();
    process.exit(0);
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumBribes function below.
function minimumBribes(q) {
    let j = 0;

    for (let i = 0; i < q.length; i++) {
        let changes = q[i] - (i + 1);

        if (changes > 2) {
            console.log('Too chaotic');
            return;
        }

        j += changes > 0 ? changes : 0;
    }

    console.log(j); // + size % 2);
}

function main() {
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine()
            .split(' ')
            .map((qTemp) => parseInt(qTemp, 10));

        minimumBribes(q);
    }

    return;
}
