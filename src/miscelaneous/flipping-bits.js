//https://www.hackerrank.com/challenges/flipping-bits/

// Complete the flippingBits function below.
export function flippingBits(n) {
    return ~n < 0 ? Math.pow(2, 32) + ~n : ~n;
}
