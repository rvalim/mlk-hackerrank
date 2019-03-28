//https://www.hackerrank.com/challenges/ctci-fibonacci-numbers

function fibonacci(n) {
    if (n === 0 || n === 1) return n
    return fibonacci(n - 1) + fibonacci(n  -2)
}

console.log(fibonacci(5))
console.log(fibonacci(17))
console.log(fibonacci(12))
