//https://www.hackerrank.com/challenges/sherlock-and-valid-string/problem

// Complete the isValid function below.
function isValid(s) {
    let countChar = []

    for (let i = 97; i <= 122; i++)
        countChar[String.fromCharCode(i)] = 0

    for (let ch of [...s])
        countChar[ch] += 1

    var filtered = Object.entries(countChar).filter(([k, v]) => v > 0).map(([k, v]) => v)

    if (filtered.length > 0) {
        let first = filtered[0];
        let tobeRemoved = 1

        for (let i = 0; i < filtered.length; i++) {
            let diff = Math.abs(filtered[i] - first)
            if (diff > 0){
                if (--tobeRemoved < 0) return 'NO'
            }
        }
    }

    return 'YES'
}

console.log(isValid('aabbcd'))
console.log(isValid('abcdefghhgfedecba'))