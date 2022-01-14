//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

export function countSwaps(a) {
    let count = 0;
    let n = a.length;

    do {
        let last = 0;
        for (let j = 1; j < n; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j - 1] > a[j]) {
                let x = a[j];
                a[j] = a[j - 1];
                a[j - 1] = x;
                count++;
                last = j;
            }
        }

        n = last;
    } while (n > 1);

    return `Array is sorted in ${count} swaps.\nFirst Element: ${
        a[0]
    }\nLast Element: ${a[a.length - 1]}`;
}
