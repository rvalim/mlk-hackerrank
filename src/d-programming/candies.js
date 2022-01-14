//https://www.hackerrank.com/challenges/candies

export function candies(n, arr) {
    let aux = new Array(n).fill(1);

    for (let i = 1; i < n; i++) aux[i] += arr[i] > arr[i - 1] ? aux[i - 1] : 0;

    for (let i = n - 2; i >= 0; i--) {
        if (arr[i] > arr[i + 1] && aux[i] <= aux[i + 1]) {
            aux[i] = aux[i + 1] + 1;
        }
    }

    return aux.reduce((accum, curr) => accum + curr);
}
