//https://www.hackerrank.com/challenges/swap-nodes-algo/problem
'use strict';
const { Console } = require('console');
const fs = require('fs');
const readline = require('readline');

const inputFile = [];
let inputFileLine = 0;

async function processLineByLine() {
    const fileStream = fs.createReadStream('C:\\git\\mlk-hackerrank\\greedy\\dfs-input.txt');

    const rl = readline.createInterface({
        input: fileStream,
        crlfDelay: Infinity
    });

    for await (const line of rl) {
        inputFile.push(line);
    }

    main();
}

processLineByLine();

function readLine() {
    return inputFile[inputFileLine++];
}

function main() {

    const n = parseInt(readLine(), 10);

    let indexes = Array(n);

    for (let indexesRowItr = 0; indexesRowItr < n; indexesRowItr++) {
        indexes[indexesRowItr] = readLine().split(' ').map(indexesTemp => parseInt(indexesTemp, 10));
    }

    const queriesCount = parseInt(readLine(), 10);

    let queries = [];

    for (let queriesItr = 0; queriesItr < queriesCount; queriesItr++) {
        const queriesItem = parseInt(readLine(), 10);
        queries.push(queriesItem);
    }

    let result = swapNodes(indexes, queries);
    console.log(result.map(x => x.join(' ')).join("\n") + "\n");

    // ws.end();
}

function printTree(root, swapDepth, arr) {
    if (root == null) return;

    //muliple of ... dam it
    if (root.depth % swapDepth == 0) {
        console.log({rd: root.depth, swapDepth})
        const right = root.right;
        root.right = root.left
        root.left = right;      
    }

    printTree(root.left, swapDepth,arr);

    arr.push(root.data);
    
    printTree(root.right, swapDepth,arr);
}

function buildTree(indexes) {
    const root = {data: 1, depth: 1}//new Node(1);
    let queue = [root];
    
    while (queue.length > 0 && indexes.length > 0) {
        let currNode = queue.shift();
        let currPair = indexes.shift();
        
        if (currPair[0] !== -1) {
            currNode.left = {data: currPair[0], depth: currNode.depth + 1};
            queue.push(currNode.left);
        }
        
        if (currPair[1] !== -1) {
            currNode.right = {data: currPair[1], depth: currNode.depth + 1};
            queue.push(currNode.right);
        }
    }

    return root;
}

/*
 * Complete the swapNodes function below.
 */
function swapNodes(indexes, swaps) {
    const root = buildTree(indexes);    
    const values = [];
    
    for(let i = 0; i < swaps.length; i++) {
        const curr = [];
        
        printTree(root, swaps[i], curr);
        console.log(JSON.stringify(root))
        values.push(curr);
    }

    return values;
}