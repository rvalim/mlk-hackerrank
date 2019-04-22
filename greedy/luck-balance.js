//https://www.hackerrank.com/challenges/luck-balance

// Complete the luckBalance function below.
function luckBalance(k, contests) {
    let total = 0
    let importantC = []

    contests.forEach((e, i) => {
        total += e[0]
        
        if (e[1] == 1)  
            importantC.push(e[0])
    })

    importantC = importantC.sort((a, b) => a - b)

    // multiplied by 2, because was already sumed up there
    for (let i = 0; i < importantC.length - k; i++)
        total -= 2 * importantC[i]

    return total
}

const _crosswords = {
    x0: [
        '5 1',
        '2 1', 
        '1 1', 
        '8 1', 
        '10 0', 
        '5 0', 
    ]
}

const _wordsT = {
    x0: 3,
}

Object.keys(_crosswords).forEach((e, i) => {
    _crosswords[e].forEach((v, j) => {
        _crosswords[e][j] = v.split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    }) 
});


console.log(luckBalance(_wordsT.x0, _crosswords.x0))