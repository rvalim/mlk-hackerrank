//https://www.hackerrank.com/challenges/crush

// Complete the arrayManipulation function below.
export function arrayManipulation(n, queries) {
    let arr = [];
    let biggest = 0;
    for (let i = 0; i < n; i++) arr.push(0);

    queries.forEach((p) => {
        let a = p[0];
        let b = p[1];
        let k = p[2];

        arr[a - 1] += k;
        if (b < n) arr[b] -= k;
    });

    for (let i = 1; i < n; i++) {
        arr[i] += arr[i - 1];
        biggest = Math.max(biggest, arr[i]);
    }

    return biggest;
}
