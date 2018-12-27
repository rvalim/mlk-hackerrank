//https://www.hackerrank.com/challenges/ctci-merge-sort/problem
function merge(arr, ini, fim, mid) {
    let invertions = 0
    // console.log({ left: arr.slice(ini, iFim + 1), right: arr.slice(j, fim + 1), ini, mid, fim })

    let aux = arr.slice(ini, fim + 1)
    mid = Math.floor((aux.length - 1) / 2)
    let i = 0//ini
    let k = ini
    let iFim = mid
    let j = mid + 1
    let jFim = fim - ini


    while (i <= iFim || j <= jFim) {
        if (i > mid) {
            arr[k++] = aux[j++];
        } else if (j > jFim) {
            arr[k++] = aux[i++];
        } else if (aux[i] <= aux[j]) {
            arr[k++] = aux[i++];
        } else {
            arr[k++] = aux[j++];
            invertions += mid + 1 - i;
        }
    }

    return invertions
}

function sort(arr, ini, fim) {
    let invertions = 0;

    if (ini < fim) {

        let mid = ((ini + fim) / 2) | 0

        invertions += sort(arr, ini, mid)
        invertions += sort(arr, mid + 1, fim)

        invertions += merge(arr, ini, fim, mid)
    }
    return invertions
}

// Complete the countInversions function below.
function countInversions(arr) {
    let result = sort(arr, 0, arr.length - 1)
    console.log({ arr, result })
    return result
}


// console.log(countInversions('1 1 1 2 2'.split(' ').map(e => Number(e))))
countInversions('2 1 3 1 2'.split(' ').map(e => Number(e)))

                           //1 1 2 2 3
                           //2 2 3 3 4 6 8 4 5
                           //2 2 3 3 4 4 8 6 8