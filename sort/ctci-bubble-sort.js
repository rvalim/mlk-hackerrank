//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem

// Complete the countSwaps function below.
function countSwaps(a) {
    let isSorted = false;
    let count = 0;

    do{
        isSorted = true;

        for (let j = 0; j < a.length - 1; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j] > a[j + 1]) {
                let x = a[j]
                a[j] = a[j + 1]
                a[j + 1] = x

                isSorted = false
                count++
            }
        }

    }while(!isSorted)

    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)

}

countSwaps([1, 2 ,3])



