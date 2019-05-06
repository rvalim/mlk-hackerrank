//https://www.hackerrank.com/challenges/candies

function candies(n, arr) {
    var aux = new Array(n).fill(1)

    for (let i = 1; i < n; i++) 
        aux[i] += arr[i] > arr[i-1]? aux[i-1] : 0

    
    for(let i = n-2 ; i >= 0 ; i--){
        if(arr[i] > arr[i+1] 
            && aux[i] <= aux[i+1]){
            aux[i] = aux[i+1] + 1;
        }
    }
    
    return aux.reduce((accum, curr) => accum + curr)
}

const _param0 = [
    '2 4 2 6 1 7 8 9 2 1',
    '8 2 4 3 5 2 6 4 5',
    '2 4 3 5 2 6 4 5',
    '1 2 2'
]

facede = () => {
    _param0.forEach(e => {
        const aux = e.split(' ').map(p => parseInt(p))
        console.log(candies(aux.length, aux))
    })
}

facede()
