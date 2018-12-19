//https://www.hackerrank.com/challenges/ctci-merge-sort/problem
let invertions = 0;

function merge(arr, ini, fim, mid) {
    let i = ini
    let iFim = mid
    let j = mid + 1
    let x = [...Array(fim - ini + 1)]


    for (let y = 0; y < x.length; y++) {
        let iLess = i <= iFim && (arr[i] < arr[j] || j > fim)
        x[y] = iLess ? arr[i] : arr[j]

        invertions += !iLess && j? 1 : 0;

        if (iLess)
            i++
        else
            j++
    }
    

    for (let y = 0; y < x.length; y++) {
        arr[y + ini] = x[y]
    }
    // console.log({arr: arr, ini, fim, mid} )
}

function sort(arr, ini, fim) {
    if (ini < fim) {
        let mid = ((ini + fim) / 2) | 0

        sort(arr, ini, mid)
        sort(arr, mid + 1, fim)

        merge(arr, ini, fim, mid)
    }
}

// Complete the countInversions function below.
function countInversions(arr) {
    sort(arr, 0, arr.length - 1)
    return arr;
}

console.log(countInversions('2 1 3 1 2'.split(' ').map(e => Number(e))))
console.log(invertions)
                           //1 1 2 2 3
                           //2 2 3 3 4 6 8 4 5
                           //2 2 3 3 4 4 8 6 8