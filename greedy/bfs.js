//https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem
'use strict';
const fs = require('fs');
const readline = require('readline');

const inputFile = [];
let inputFileLine = 0;

async function processLineByLine() {
    const fileStream = fs.createReadStream('C:\\git\\mlk-hackerrank\\greedy\\bfs-input5.txt');

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
    const t = parseInt(readLine(), 10);

    for (let tItr = 0; tItr < t; tItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
            // console.log({tItr, i, inputFileLine})
            edges[i] = readLine().split(' ').map(edgesTemp => parseInt(edgesTemp, 10));
        }

        const s = parseInt(readLine(), 10);

        let result = shortestReach(n, edges, s);

        console.log(result.join(" ") + "\n");

    }
}

// Complete the shortestReach function below.
function shortestReach(nodes, edges, s) {
    const edgesMapper = {};
    const distances = new Array(nodes + 1).fill(-1); // create with 1 more item to avoid index calcs
    const visitedNodes = new Array(nodes + 1).fill(false);     // create with 1 more item to avoid index calcs
    const previousNodes = new Array(nodes + 1).fill(0);

    //First of all - map all connections
    edges.forEach((elem) => {
        var start = elem[0];
        var destiny = elem[1];
        var minLen = 0;

        if (!edgesMapper[start]) edgesMapper[start] = {};
        if (!edgesMapper[destiny]) edgesMapper[destiny] = {};

        edgesMapper[start][destiny] = minLen;
        edgesMapper[destiny][start] = minLen;
    });

    let queue = [];
    queue.push(s);
    distances[s] = 0;

    while(queue.length > 0){
        // console.log(queue);
        let currNode = queue.shift();
        let currDistance = distances[currNode];

        visitedNodes[currNode] = true; //marking as visited
        
        Object.keys(edgesMapper[currNode] || {}).forEach(p => {
            if (!visitedNodes[p] && distances[p] == -1) {
                queue.push(p);
                distances[p] = currDistance + 6;
            }
        });

        
    }

    distances.splice(s, 1);
    distances.shift();
    return distances;
}
