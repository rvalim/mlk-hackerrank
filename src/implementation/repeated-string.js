//https://www.hackerrank.com/challenges/repeated-string

function repeatedString(s, n) {
    let fullRepeatCharacters = Math.floor(n / s.length);
    let qtdePerString = (s.match(/a/g) || []).length;
    let qtdeLastOne = (
        s.substring(0, n - fullRepeatCharacters * s.length).match(/a/g) || []
    ).length;

    return qtdePerString * fullRepeatCharacters + qtdeLastOne;
}

// console.log(repeatedString('aba', 10))
// console.log(repeatedString('a', 1000000000000))
console.log(
    repeatedString(
        'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
        534802106762
    )
);
534802106762;
// 534802106762
// 534802106800
// 534802106800
