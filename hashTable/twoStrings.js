'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
var readStream = fs.createReadStream('D:/Projetos/Hackerrank/hashTable/twoStrings.txt', 'utf8');
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
function twoStrings(s1, s2) {
    let chars = [];

    s1.split('').forEach(p => {
        p = p + '$';
        
        if (chars[p] === undefined){
            chars.push[p];
            chars[p] = 1;
        }else
            chars[p]++;
    });

    for (let i = 0; i < s2.length; i++)
        if (chars[s2.charAt(i) + '$'])
            return 'YES';

    return 'NO';
}

function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s1 = readLine();

        const s2 = readLine();

        let result = twoStrings(s1, s2);

        console.log(result);
    }

}
