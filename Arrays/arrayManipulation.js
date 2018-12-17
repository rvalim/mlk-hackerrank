//https://www.hackerrank.com/challenges/crush/problem
'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');

var readStream = fs.createReadStream('D:/\Projetos/\Hackerrank/\Array/\arrayManipulation1.txt', 'utf8');
let data = ''
let inputString = '';
let currentLine = 0;

readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    inputString = data.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});

// process.stdin.on('data', inputStdin => {
//     inputString += inputStdin;
// });

// process.on('SIGINT', _ => {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
//     process.exit(0);
// });

function readLine() {
    return inputString[currentLine++];
}

// Complete the arrayManipulation function below.
function arrayManipulation(n, queries) {
    let arr = [];
    let biggest = 0;
    for (let i = 0; i < n; i++)
        arr.push(0);

    queries.forEach(p => {
        let a = p[0];
        let b = p[1];
        let k = p[2];

        arr[a - 1] += k;
        if (b < n) arr[b] -= k;
    });

    for (let i = 1; i < n; i++){
        arr[i] += arr[i-1];
        biggest = Math.max(biggest, arr[i])
    }

    return biggest;
}

function main() {
    //const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const nm = readLine().split(' ');

    const n = parseInt(nm[0], 10);

    const m = parseInt(nm[1], 10);

    let queries = Array(m);

    for (let i = 0; i < m; i++) {
        queries[i] = readLine().split(' ').map(queriesTemp => parseInt(queriesTemp, 10));
    }

    let result = arrayManipulation(n, queries);

    console.log(result);
    // ws.write(result + "\n");

    // ws.end();
}
