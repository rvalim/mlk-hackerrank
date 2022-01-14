//https://www.hackerrank.com/challenges/max-array-sum

// Complete the luckBalance function below.
export function maxSubsetSum(arr) {
    let dp = new Array(arr.length).fill(0);

    dp[0] = arr[0];
    dp[1] = Math.max(dp[0], arr[1]);

    //compare with the dp already calculate is the key
    for (let i = 2; i < arr.length; i++) {
        dp[i] = Math.max(dp[i - 1], arr[i], arr[i] + dp[i - 2]);
    }

    return dp[arr.length - 1];
}
