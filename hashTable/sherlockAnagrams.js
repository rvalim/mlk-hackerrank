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

// Complete the checkMagazine function below.
function sherlockAndAnagrams(s) {
    console.log(s);
    let arr = s.split('');
    // let chars = [];
    let keys = [];
    let qtde = 0;

    // for (let i = 0; i < arr.length; i++) {
    //     let p = arr[i];

    //     if (chars[p] === undefined)
    //         chars[p] = 1
    //     else {
    //         chars[p]++;
    //         qtde++;
    //     }
    // }

    // if (!qtde) return qtde;

    for(let i = 0; i < arr.length; i++)
    {
        let key = []
        key.push(arr[i]);
        qtde += addKey(key, keys);

        for (let j = i + 1; j < arr.length; j ++){
            key.push(arr[j]);
            let keyStr = key.sort().join('');

            qtde += addKey(keyStr, keys);
        }
    }

    console.log(keys);
    
    return qtde;
}

function addKey(key, keys){
    if (keys[key] === undefined)
        keys[key] = 1
    else {
        keys[key]++;
        return 1;
    }

    return 0;
}

function main() {

    const q = parseInt(readLine(), 10);

    for (let qItr = 0; qItr < q; qItr++) {
        const s = readLine();

        let result = sherlockAndAnagrams(s);

        console.log(result);
    }

}