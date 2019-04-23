//https://www.hackerrank.com/challenges/angry-children

// Complete the luckBalance function below.
function maxMin(k, arr) {
    let result = null
    arr = arr.sort((a, b) => a - b)

    for (let i = 0; 
        Math.max(k + i - 1, i) < arr.length; 
        i++) {

        //taking first and last once it is ordered
        const min = arr[i]
        const max = arr[k + i - 1]

        if (!result || max - min < result)
            result = max - min

        //console.log({ i, min, max, result })
    }

    return result
}

const _param0 = {
    x0: [
        10,
        100,
        300,
        200,
        1000,
        20,
        30
    ],
    x1: [1,
        2,
        3,
        4,
        10,
        20,
        30,
        40,
        100,
        200],
    x2: [1,
        2,
        1,
        2,
        1]
}

const _param1 = {
    x0: 3,
    x1: 4,
    x2: 2
}

// console.log(maxMin(_param1.x0, _param0.x0))
//console.log(maxMin(_param1.x1, _param0.x1))
console.log(maxMin(_param1.x2, _param0.x2))