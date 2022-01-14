//https://www.hackerrank.com/challenges/recursive-digit-sum

export function superDigit(n, k) {
    //Less than 10 we found our solution
    if (parseInt(n) < 10) return n;

    let sum = 0;

    for (let i = 0; i < n.length; i++) {
        sum += parseInt(n[i]);
    }

    sum *= k; // instead of repeating the string, multiply by k the summarized value

    return superDigit(sum.toString(), 1); //after first round k is 1.
}
