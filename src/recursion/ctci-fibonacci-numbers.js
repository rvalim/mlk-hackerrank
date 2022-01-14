//https://www.hackerrank.com/challenges/ctci-fibonacci-numbers

export function fibonacci(n, memo = new Map()) {
    if (n === 0 || n === 1) return n;
    if (memo.has(n)) return memo.get(n);

    memo.set(n, fibonacci(n - 1, memo) + fibonacci(n - 2, memo));

    return memo.get(n);
}
