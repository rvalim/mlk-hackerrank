//https://www.hackerrank.com/challenges/max-array-sum


// Complete the luckBalance function below.
function maxSubsetSum(arr) {
    let dp = new Array(arr.length).fill(0);
    
    dp[0] = arr[0];
    dp[1] = Math.max(dp[0], arr[1])

    //compare with the dp already calculate is the key
    for (let i = 2; i < arr.length; i++) { 
        dp[i] = Math.max(dp[i - 1], arr[i], arr[i] + dp[i - 2])
    }

    return dp[arr.length-1]  
}

const _param0 = {
    x0: '3 7 4 6 5',
    x1: '2 1 5 8 4',
    x2: '3 5 -7 8 10'
}

Object.keys(_param0).forEach(e => 
    _param0[e] = _param0[e].split(' ').map(p => parseInt(p, 10))
)

console.log(maxSubsetSum(_param0.x0))
console.log(maxSubsetSum(_param0.x1))
console.log(maxSubsetSum(_param0.x2))