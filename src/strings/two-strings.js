//https://www.hackerrank.com/challenges/two-strings

export function twoStrings(s1, s2) {
    let chars = [];

    s1.split('').forEach((p) => {
        p = p + '$';

        if (chars[p] === undefined) {
            chars.push[p];
            chars[p] = 1;
        } else chars[p]++;
    });

    for (let i = 0; i < s2.length; i++)
        if (chars[s2.charAt(i) + '$']) return 'YES';

    return 'NO';
}
