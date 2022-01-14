//https://www.hackerrank.com/challenges/array-left-rotation/

// Complete the rotLeft function below.
export function rotLeft(a, d) {
    let n = a.length;
    let result = new Array(n);
    for (let i = 0; i < n; i++) {
        result[(i + n - d) % n] = a[i];
    }
    return result;
}
