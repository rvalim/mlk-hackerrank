//https://www.hackerrank.com/challenges/balanced-brackets/problem
'use strict';

var readStream = require('fs').createReadStream('./balanced-brackets_input.txt', 'utf8');
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
            );

        main();
});

function main() {
    var inicio = new Date().getTime();

    inputString.map(p => console.log(isBalanced(p)))
    
    var tempo = (new Date().getTime()) - inicio;

    console.log('Tempo de execução: ' + tempo);
}

class Stack { 
    constructor() 
    { 
        this.items = []; 
    } 
  
    push(item) {
        this.items.push(item);
    }
    
    pop() 
    { 
        if (this.items.length == 0) 
            return null; 
        return this.items.pop(); 
    } 
    
    isEmpty() 
    { 
        return this.items.length == 0; 
    }
} 

const dict ={
    "]" : '[',
    ")" : '(',
    "}" : '{'
}

// Complete the isBalanced function below.
function isBalanced(s) {
    const stack = new Stack();
    const items = s.split('');

    for (let i = 0; i < items.length; i++) {
        const p = items[i];
        
        if (dict[p]){
            if (dict[p] != stack.pop()) 
                return 'NO'
        }
        else 
            stack.push(p)
    }
    
    return stack.isEmpty()? 'YES' : 'NO'
}

// console.log(isBalanced('{[()]}'))
// console.log(isBalanced('{[(])}'))
// console.log(isBalanced('{[()]}'))