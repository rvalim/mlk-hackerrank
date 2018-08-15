'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', inputStdin => {
    inputString += inputStdin;
});

// process.stdin.on('end', function() {
//     inputString = inputString.replace(/\s*$/, '')
//         .split('\n')
//         .map(str => str.replace(/\s*$/, ''));

//     main();
// });
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
    let n = arr.length;
    
    for(let i = 0; i < n; i++){
        if (arr[i] == i + 1) continue;

        let origem = arr[i];
        let destino = arr[arr[i] - 1];//-1 por conta do indice e os numerais comecao em 1
    }
}

// int minimumSwaps(vector<int> arr) {
    
//     int i,c=0,n=arr.size();
//     for(i=0;i<n;i++)
//     {
//         if(arr[i]==(i+1))
//             continue;
        
//         swap(arr[i],arr[arr[i]-1]);
//         c++;
//         i--;
//     }
//     return c;

// }


function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine(), 10);

    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const res = minimumSwaps(arr);

    ws.write(res + '\n');

    ws.end();
}
