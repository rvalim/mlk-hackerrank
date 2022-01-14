//https://www.hackerrank.com/challenges/angry-children

// Complete the luckBalance function below.
export function maxMin(k, arr) {
    let result = null;
    arr = arr.sort((a, b) => a - b);

    for (let i = 0; Math.max(k + i - 1, i) < arr.length; i++) {
        //taking first and last once it is ordered
        const min = arr[i];
        const max = arr[k + i - 1];

        if (!result || max - min < result) result = max - min;
    }

    return result;
}
