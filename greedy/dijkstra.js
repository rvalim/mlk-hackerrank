'use strict';
const fs = require('fs');
const readline = require('readline');

const inputFile = [];
let inputFileLine = 0;

async function processLineByLine() {
    const fileStream = fs.createReadStream('C:\\git\\mlk-hackerrank\\greedy\\input1.txt');

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
    console.log('ricardo', t, inputFile.length)

    for (let tItr = 0; tItr < t; tItr++) {
        const nm = readLine().split(' ');

        const n = parseInt(nm[0], 10);

        const m = parseInt(nm[1], 10);

        let edges = Array(m);

        for (let i = 0; i < m; i++) {
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
    const distances = new Array(nodes + 1).fill(Infinity); // create with 1 more item to avoid index calcs
    const visitedNodes = new Array(nodes + 1).fill(false);     // create with 1 more item to avoid index calcs
    const previousNodes = new Array(nodes + 1).fill(0);

    visitedNodes[0] = true; // Discarding 0 index

    //Mapping all connections
    edges.forEach((elem) => {
        var start = elem[0];
        var destiny = elem[1];
        var len = elem[2];

        if (!edgesMapper[start]) edgesMapper[start] = {};
        if (!edgesMapper[destiny]) edgesMapper[destiny] = {};

        //Considering dudplicated paths
        var minLen = Math.min(edgesMapper[start][destiny] || Infinity, len);

        edgesMapper[start][destiny] = minLen;
        edgesMapper[destiny][start] = minLen;
    });

    let pq = [];

    pq.push({node: s, weight: 0});
    distances[s] = 0;

    while(pq.length > 0){
        let curr = pq.pop();
        let currNode = curr.node;

        Object.keys(edgesMapper[currNode]).forEach(p => {
            let neighbor = { node: p, weight:  edgesMapper[currNode][p] }
            let alt = distances[currNode] + neighbor.weight;
            
            if (alt < distances[neighbor.node]) {
                distances[neighbor.node] = alt;
                previousNodes[neighbor.node] = currNode;
                pq.push(neighbor);
            }

        });
    }

    distances.splice(s, 1);
    distances.shift();
    return distances.map(p => p === Infinity ? -1 : p);
}
