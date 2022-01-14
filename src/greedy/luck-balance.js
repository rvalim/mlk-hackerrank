//https://www.hackerrank.com/challenges/luck-balance

// Complete the luckBalance function below.
export function luckBalance(k, contests) {
    let total = 0;
    let importantC = [];

    contests.forEach(e => {
        total += e[0];

        if (e[1] === 1) importantC.push(e[0]);
    });

    importantC = importantC.sort((a, b) => a - b);

    // multiplied by 2, because was already sumed up there
    for (let i = 0; i < importantC.length - k; i++) total -= 2 * importantC[i];

    return total;
}
