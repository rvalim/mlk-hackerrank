//https://www.hackerrank.com/challenges/friend-circle-queries/problem
'use strict';

var readStream = require('fs').createReadStream('./friend-circle-queries_input.txt', 'utf8');
let data = ''
let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    inputString = data
        .split('\n')
        .map(str => str
            .replace('\r', '')
            .split(' ')
            );

        main();
});

function main() {
    var inicio = new Date().getTime();

    console.log(maxCircle(inputString));
    
    var tempo = (new Date().getTime()) - inicio;

    console.log('Tempo de execução: ' + tempo);
}


class Node {
    constructor(item) {
        this._item = item;
        this._parent = null;
        this._childs = 1;
    }

    root(node) {
        const obj = (node || this);
        if (obj._parent == null) return obj;
        return this.root(obj._parent);
    }

    _moveChildTo(from, destination) {
        destination._childs += from._childs;
        from._childs = 1;
        from._parent = destination;
    }

    union(b) {
        let rootThis = this.root(this);
        let rootB = this.root(b);
        let parent = null;
        let child = null;

        if (rootThis == rootB){
            return rootThis.size;
        }
        else if (rootThis._childs >= rootB._childs){
            parent = rootThis;
            child = rootB;
        }else{
            child = rootThis;
            parent = rootB;
        }    

        this._moveChildTo(child, parent);

        return parent._childs;
    }
}


function union(a, b, tree) {
        
    if (tree[a] == null)
        tree[a] = new Node(a, tree);
    
    if (tree[b] == null)
        tree[b] = new Node(b, tree);

    return tree[a].union(tree[b]);
}

// Complete the maxCircle function below.
function  maxCircle(queries) {
    let maxSize = 0;
    let ans = Array(queries.length);
    let tree = {};

    for (let i = 0; i < queries.length; i++) {
        const p = queries[i];
        const a = String(p[0]);
        const b = String(p[1]);
        
        const size = union(a, b, tree);
        maxSize = size > maxSize? size : maxSize;

        ans[i] = maxSize;
    }
    return ans;
}

// console.log(maxCircle(
//     [
//         [78,72],
//         [67,74],
//         [65,57],
//         [65,52],
//         [70,55],
//         [74,70],
//         [58,51],
//         [70,76],
//         [69,55],
//         [64,78],
//         [67,72],
//         [69,63],
//         [77,59],
//         [69,64],
//         [70,80],
//         [66,67],
//         [71,52],
//         [60,77],
//         [80,66],
//         [70,61],
//         ]
// ));

// 
// console.log(maxCircle([[1,2],[2,4],[4,3]]));
// console.log(maxCircle([[1, 2], [3, 4], [1, 3], [5, 7], [5, 6], [7, 4]]));
// console.log(maxCircle([
//     [1000000000, 23],
//     [11, 3778],
//     [7, 47],
//     [11, 1000000000]
// ]))
// let groupA = find(p[0]);
// let groupB = find(p[1]);

// if (groupA != groupB)
//     union(groupA, groupB, ...p);
