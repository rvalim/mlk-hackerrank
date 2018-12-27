//https://www.hackerrank.com/challenges/alternating-characters/problem

// Complete the alternatingCharacters function below.
function alternatingCharacters(s) {
    let count = 0;

    for (let i = 1; i < s.length; i++) 
        count += s[i-1] != s[i]? 0 : 1

    return count
}

console.log(alternatingCharacters('AAAA'))
console.log(alternatingCharacters('BBBBB'))
console.log(alternatingCharacters('ABABABAB'))
console.log(alternatingCharacters('BABABA'))
console.log(alternatingCharacters('AAABBB'))
