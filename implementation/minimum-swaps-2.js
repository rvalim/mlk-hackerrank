//https://www.hackerrank.com/challenges/minimum-swaps-2/problem
'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

process.on('SIGINT', _ => {
    inputString = inputString.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
    process.exit(0);
});

function readLine() {
    return inputString[currentLine++];
}

// Complete the minimumSwaps function below.
function minimumSwaps(arr) {
    let n = 0;

    for(let i = 0; i < arr.length; ){
        let x = arr[i];

        if (x == i + 1)
            i++;
        else{
            let j = Math.min(arr.length, x) - 1;
            if (j == i) break;

            arr[i] = arr[j];
            arr[j] = x;

            n++;
        }
    }

    return n;
}

function main() {
    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    console.log(res);
}
