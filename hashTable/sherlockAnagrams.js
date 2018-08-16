'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
var readStream = fs.createReadStream('D:/Projetos/MlkHackerrank/hashTable/sherlockAnagrams.txt', 'utf8');
let data = ''
let inputString = '';
let currentLine = 0;

readStream.on('data', function (chunk) {
    data += chunk;
}).on('end', function () {
    inputString = data.replace(/\s*$/, '')
        .split('\n')
        .map(str => str.replace(/\s*$/, ''));

    main();
});



function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function sherlockAndAnagrams(s) {
    // console.log(s);
    let arr = s.split('');
    let keys = [];
    let qtde = 0;

    for(let i = 0; i < arr.length; i++)
    {
        let key = []
        key.push(arr[i]);
        addKey(key, keys);

        for (let j = i + 1; j < arr.length; j ++){
            key.push(arr[j]);
            let keyStr = key.sort().join('');
            addKey(keyStr, keys);
        }
    }

    for(let key in keys){
        let n = keys[key];
        if (n == 1) continue;
        qtde += factorial(n) / (2 * factorial(n-2));
    };

    return qtde;
}

function factorial(n){
    if (n <= 1) return 1;
    return n * factorial(n-1);
}

function addKey(key, keys){
    if (keys[key] === undefined)
        keys[key] = 1
    else
        keys[key]++;
}

function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        console.log(result);
    }

}