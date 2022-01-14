'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', (inputStdin) => {
    inputString += inputStdin;
});

process.stdin.on('end', (_) => {
    inputString = inputString
        .trim()
        .split('\n')
        .map((str) => str.trim());

    main();
});

function readLine() {
    return inputString[currentLine++];
}

function main() {
    const queriesRows = parseInt(readLine(), 10);

    let queries = Array(queriesRows);

    for (let queriesRowItr = 0; queriesRowItr < queriesRows; queriesRowItr++) {
        queries[queriesRowItr] = readLine().split(' ');
    }

    contacts(queries);
}

//My simple trie mapping characters
let trie = {};
//the character is the key
//in each register the count of words starting with this letter is increased
//Format: for rica
/**
 { r: {
     count: 1,
     i: {
         count: 1,
         c: {
             count: 1,
             a: {
                 count:
             }
         }
     }
 }} 
  
 */

function add(word) {
    const sIndex = 'a'.charCodeAt(0);
    let curr = trie;
    word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        const index = word.charAt(i);
        curr[index] = curr[index] || {};
        curr[index].count = 1 + (curr[index].count || 0);
        // Update curr array
        curr = curr[index];
    }
}

function find(word) {
    let curr = trie;
    let count = 0;
    word = word.toLowerCase();

    for (let i = 0; i < word.length; i++) {
        const index = word.charAt(i);

        //Quando undefined instancia um novo
        if (!curr[index]) {
            return 0;
        }

        count = curr[index].count;
        // Update curr array
        curr = curr[index];
    }

    return count;
}

/*
 * Complete the contacts function below.
 */
function contacts(queries) {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    queries.forEach((item) => {
        if (item[0] === 'add') add(item[1]);
        else if (item[0] === 'find') ws.write(find(item[1]).toString() + '\n');
    });
    ws.end();
}
