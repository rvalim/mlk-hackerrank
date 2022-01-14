//https://www.hackerrank.com/challenges/ctci-ransom-note/problem
// Complete the checkMagazine function below.
export function checkMagazine(magazine, note) {
    let magHash = [];

    magazine.forEach((p) => {
        p = p + '$';

        if (magHash[p] === undefined) {
            magHash.push[p];
            magHash[p] = 1;
        } else magHash[p]++;
    });

    for (let i = 0; i < note.length; i++) {
        let p = note[i] + '$';

        if (magHash[p] === undefined || magHash[p] === 0) {
            return 'No';
        } else magHash[p]--;
    }

    return 'Yes';
}
