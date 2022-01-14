//https://www.hackerrank.com/challenges/greedy-florist/

// Complete the getMinimumCost function below.
export function getMinimumCost(k, c) {
    let total = 0;
    let n = c.length;

    c = c.sort((a, b) => b - a);

    for (let i = 0; i < n; i++) {
        total += c[i] * (Math.floor(i / k) + 1);
    }

    return total;
}
