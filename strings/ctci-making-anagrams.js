//https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

// Complete the makeAnagram function below.
function makeAnagram(a, b) {
    let result = 0
    let countChar = []

    for (let i = 97; i <= 122; i++)
        countChar[String.fromCharCode(i)] = 0

    for (let ch of [...a])
        countChar[ch] += 1

    for (let ch of b)
        countChar[ch] -= 1

    for (let q in countChar)
        result += Math.abs(countChar[q])

    return result
}

console.log(makeAnagram('cde', 'abc'))
console.log(makeAnagram('fcrxzwscanmligyxyvym', 'jxwtrhvujlmrpdoqbisbwhmgpmeoke'))
console.log(makeAnagram('showman', 'woman'))
// console.log(String.fromCharCode('a'.charCodeAt(0)))