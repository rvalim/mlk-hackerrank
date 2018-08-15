
// Complete the rotLeft function below.
function rotLeft(a, d) {
    let n = a.length;
    let result = new Array(n);
    for(let i = 0; i < n; i++){
        console.log(i, n, d, (i + n - d) % n);
        // result.push(a[(i + n - d) % n]);
        result[(i + n - d) % n] = a[i];
    }
    return result;
}
// 3
// 4
// 5

// 0 5 2 = 2 - 3
// 1 5 2 = 3 - 4
// 2 5 2 = 4 - 0
// 3 5 2 = 0 - 1
// 4 5 2 = 1 - 2
let a = [1, 2, 3, 4, 5];
let b = 3;
console.log(rotLeft(a, b));