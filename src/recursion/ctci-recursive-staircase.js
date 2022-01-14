//https://www.hackerrank.com/challenges/ctci-recursive-staircase
export function stepPerms(n, memo = new Map()) {
    if (n < 0) return 0;
    if (n === 0) return 1;
    if (memo.has(n)) return memo.get(n);

    memo.set(
        n,
        stepPerms(n - 1, memo) + stepPerms(n - 2, memo) + stepPerms(n - 3, memo)
    );

    return memo.get(n);
}
