'use strict';

const fs = require('fs');

// process.stdin.resume();
// process.stdin.setEncoding('utf-8');
var readStream = fs.createReadStream('D:/Projetos/Hackerrank/hashTable/ransomNote.txt', 'utf8');
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

// Complete the checkMagazine function below.
function checkMagazine(magazine, note) {
    let magHash = [];

    magazine.forEach(p => {
        p = p + '$';
        
        if (magHash[p] === undefined){
            magHash.push[p];
            magHash[p] = 1;
        }else
            magHash[p]++;
    });


    for(let i = 0; i < note.length; i++){
        let p = note[i] + '$';

        if (magHash[p] == undefined || magHash[p] == 0){
            console.log('No');
            return;
        }else
            magHash[p]--;
    }

    console.log('Yes');
}

function main() {
    const mn = readLine().split(' ');

    const m = parseInt(mn[0], 10);

    const n = parseInt(mn[1], 10);

    const magazine = readLine().split(' ');

    const note = readLine().split(' ');

    checkMagazine(magazine, note);
}
