'use strict';

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

// Complete the minimumBribes function below.
function minimumBribes(q) {
     //Solucao por contagem
     let changes = 0;
     for (let i = q.length - 1; i >= 0; i--) {
         if (q[i] - (i + 1) > 2) {
             console.log("Too chaotic");
             return;
         }
 
         let m = q[i] - 2;
         m = m > 0? m : m;
 
         for (let j = m; j < i; j++)
             if (q[j] > q[i]) changes++;
     }
     console.log(changes);
     return;
}

function main() {
    const t = parseInt(readLine(), 10);
    
    for (let tItr = 0; tItr < t; tItr++) {
        const n = parseInt(readLine(), 10);

        const q = readLine().split(' ').map(qTemp => parseInt(qTemp, 10));

        minimumBribes(q);
    }

    return; 
}


