//https://www.hackerrank.com/challenges/minimum-absolute-difference-in-an-array/

let test = {}
genKey = (a,b) => `${a}-${b}`

function btMinimum(item, arr, minimum){
    for (let i = 0; i < arr.length; i++) {
        const aux = Math.abs(parseInt(item) - parseInt(arr[i]))
        minimum = (!minimum || aux < minimum) ? aux : minimum
        if (minimum == 0) return 0
    }

    if (arr.length == 1) return minimum;

    return btMinimum(arr[0], arr.slice(1, arr.length), minimum)
}

// Complete the minimumAbsoluteDifference function below.
function minimumAbsoluteDifference(arr) {
    let nArr = arr
        .sort((a, b) => a - b)
    let i0 = nArr[0]

    return btMinimum(i0, nArr.slice(1, nArr.length), null);
}

console.log(minimumAbsoluteDifference('-59 -36 -13 1 -53 -92 -2 -96 -54 75'.split(' ').map(a => parseInt(a, 10))))
console.log(minimumAbsoluteDifference('1 -3 71 68 17'.split(' ').map(a => parseInt(a, 10))))
