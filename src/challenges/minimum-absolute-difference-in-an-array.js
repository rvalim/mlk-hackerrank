//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/

export function minimumAbsoluteDifference(n, arr) {
    arr.sort((a, b) => a - b);

    let min = Math.abs(arr[0] - arr[1]);

    for (let i = 2; i < n; i++)
        min = Math.min(min, Math.abs(arr[i] - arr[i - 1]));

    return min;
}
