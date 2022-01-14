//https://www.hackerrank.com/challenges/alternating-characters/problem

export function alternatingCharacters(s) {
    let count = 0;

    for (let i = 1; i < s.length; i++) count += s[i - 1] !== s[i] ? 0 : 1;

    return count;
}
