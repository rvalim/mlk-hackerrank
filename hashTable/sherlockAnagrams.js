'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
var readStream = fs.createReadStream('D:/Projetos/Hackerrank/hashTable/sherlockAnagrams.txt', 'utf8');
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



function readLine() {
    return inputString[currentLine++];
}

// Complete the checkMagazine function below.
function sherlockAndAnagrams(s) {


}

function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        console.log(result);
    }

}