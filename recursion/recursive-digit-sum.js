//https://www.hackerrank.com/challenges/recursive-digit-sum

// Complete the digitSum function below.
function superDigit(n, k) {
    if (n < 10) {
        n = n * k
        k = 1
    }

    if (n < 10) return n

    var x = String(n).split('').reduce((a, b) => parseInt(a) + parseInt(b))
    return superDigit(x, k)
}

console.log(superDigit(123, 3))