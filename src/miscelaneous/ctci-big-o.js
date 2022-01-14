//https://www.hackerrank.com/challenges/ctci-big-o/

// Complete the primality function below.
export function primality(n) {
    if (n === 1) return 'Not prime';

    for (let i = 2; i <= n / 2; i++) {
        if (n % i === 0) return 'Not prime';
    }

    return 'Prime';
}
