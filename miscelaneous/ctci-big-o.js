//https://www.hackerrank.com/challenges/ctci-big-o/


// Complete the primality function below.
function primality(n) {
    if (n === 1) return 'Not prime'

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return 'Not prime'
    }

    return 'Prime'
}

const _param0 = [
    '12 5 7',
    '1 4 9 16 25 36 49 64 81 100 121 144 169 196 225 256 289 324 361 400 441 484 529 576 625 676 729 784 841 907'
]

function facede(){
    _param0.forEach(e => {
        const aux = e.split(' ').map(p => console.log(primality(parseInt(p))))
    })
}

facede()