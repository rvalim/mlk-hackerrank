//https://www.hackerrank.com/challenges/count-triplets-1/problem

export function countTriplets(arr, r) {
    // return n * fat(n - 1)
    let t2 = [];
    let t3 = [];
    let result = 0;

    arr.forEach(a => {
        result += t3[a] || 0;

        if (t2[a]) {
            t3[a * r] = (t3[a * r] || 0) + t2[a];
        }

        t2[a * r] = (t2[a * r] || 0) + 1;
    });

    return result;
}
