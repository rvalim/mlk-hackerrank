//https://www.hackerrank.com/challenges/ctci-bubble-sort/problem


// Complete the countSwaps function below.
function countSwaps(a) {
    let count = 0;
    let n = a.length;
    let x = 0;

    do{
        let last = 0;
        for (let j = 1; j < n; j++) {
            // Swap adjacent elements if they are in decreasing order
            if (a[j - 1] > a[j] ) {
                let x = a[j]
                a[j] = a[j - 1]
                a[j - 1] = x
                count++
                last = j;
            }
        }

        n = last
    }while(n > 1)

    console.log(`Array is sorted in ${count} swaps.`)
    console.log(`First Element: ${a[0]}`)
    console.log(`Last Element: ${a[a.length - 1]}`)

}

countSwaps([9,8,7,6,5,4,3,2,1,0])

// countSwaps([1, 2 ,3])
// countSwaps([1, 3 ,2])

// console.log('1 sort')

// countSwaps([2, 1, 3])
// countSwaps([2, 3, 1])


// console.log('2 sort')

// countSwaps([3, 1, 2])
// countSwaps([3, 2, 1])


