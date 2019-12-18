//https://www.hackerrank.com/challenges/ctci-queue-using-two-stacks/problem

'use strict';

var readStream = require('fs').createReadStream('./ctci-queue-using-two-stacks_input.txt', 'utf8');
let data = ''
let inputString = '';
let currentLine = 0;

function readLine() {
    return inputString[currentLine++];
}

readStream.on('data', function(chunk) {
    data += chunk;
}).on('end', function() {
    inputString = data;

        main();
});

function main() {
    var inicio = new Date().getTime();

    processData(inputString);
    
    var tempo = (new Date().getTime()) - inicio;

    console.log('Tempo de execução: ' + tempo);
}

class Queue 
{ 
    constructor() 
    { 
        this.items = []; 
    } 
                  
    enqueue(element) 
    {     
        this.items.push(element); 
    } 
    
    dequeue() 
    { 
        if(this.isEmpty()) 
            return null; 
        return this.items.shift(); 
    } 
    
    front() 
    { 
        if(this.isEmpty()) 
            return null; 
        return this.items[0]; 
    } 
    
    isEmpty() 
    { 
        return this.items.length == 0; 
    } 
     
    // printQueue() 
} 

function processQueue(array){
    let queue = new Queue();

    for (let i = 1; i < array.length; i++) {
        const item = array[i];

        if (item[0] == 1) 
            queue.enqueue(item[1])
        else if (item[0] == 2) 
            queue.dequeue()
        else if (item[0] == 3) 
            console.log(queue.front())
    }
}

function processData(input) {
    inputString = data
        .split('\n')
        .map(str => str
            .replace('\r', '')
            .split(' ')
            );
    
    processQueue(inputString);
    // console.log(inputString)
}

