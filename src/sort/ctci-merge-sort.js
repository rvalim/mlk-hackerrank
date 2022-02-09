//https://www.hackerrank.com/challenges/ctci-merge-sort

function merge(arr, ini, fim, mid) {
    let invertions = 0;

    let aux = arr.slice(ini, fim + 1);
    mid = Math.floor((aux.length - 1) / 2);
    let i = 0; //ini
    let k = ini;
    let iFim = mid;
    let j = mid + 1;
    let jFim = fim - ini;

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

    return invertions;
}

function sort(arr, ini, fim) {
    let invertions = 0;

    if (ini < fim) {
        let mid = ((ini + fim) / 2) | 0;

        invertions += sort(arr, ini, mid);
        invertions += sort(arr, mid + 1, fim);

        invertions += merge(arr, ini, fim, mid);
    }
    return invertions;
}

// Complete the countInversions function below.
export function countInversions(arr) {
    let result = sort(arr, 0, arr.length - 1);
    return result;
}
