'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
var readStream = fs.createReadStream('C:/Projetos/Hackerrank/hashTable/sherlockAnagrams.txt', 'utf8');
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

// Complete the countTriplets function below.
function countTriplets(arr, r) {


}

function main() {

    const nr = readLine().replace(/\s+$/g, '').split(' ');

    const n = parseInt(nr[0], 10);

    const r = parseInt(nr[1], 10);

    const arr = readLine().replace(/\s+$/g, '').split(' ').map(arrTemp => parseInt(arrTemp, 10));

    const ans = countTriplets(arr, r);

    console.log(ans);

}