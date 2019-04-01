//https://www.hackerrank.com/challenges/crossword-puzzle
'use strict';

let coordinates = []
let _words = []
let _table = null

function isBlanck(crossword, x, y) {
    if (x < 0 || x > 9 || y < 0 || y > 9) return false
    return crossword[x][y] === '-'
}

function registerCoordinates(x1, y1, x2, y2) {
    let size = (x2 - x1 || y2 - y1) + 1
    let words = _words.filter(p => p.length === size)

    coordinates.push({
        initial: { x: x1, y: y1 },
        final: { x: x2, y: y2 },
        size,
        words
    })

    if (words.length === 1) {
        registerAnswer(x1, y1, x2, y2, words[0])
    }

}

function registerAnswer(x1, y1, x2, y2, word) {
    console.log('entrou', x1, y1, x2, y2, word, word.length)
    for (let i = 0; i < word.length; i++) {
        if (x1 === x2) {//horizontal
            console.log(1, word)
            _table[x1][y1 + i] = word[i]
        } else { //vertical
            console.log(2, word)
            _table[x1 + i][y1] = word[i]
        }
    }

    console.log(_table[0][0])
}

function checkVertical(crossword, x, y) {
    if (x > 9) return 9

    if (isBlanck(crossword, x, y)) {
        return checkVertical(crossword, x + 1, y)
    }

    return x - 1
}

function checkHorizontal(crossword, x, y) {
    if (y > 9) return 9

    if (isBlanck(crossword, x, y)) {
        if (!isBlanck(crossword, x - 1, y)) {
            let bX = checkVertical(crossword, x, y)
            if (x !== bX) registerCoordinates(x, y, bX, y)
        }

        return checkHorizontal(crossword, x, y + 1)
    }

    return y - 1;
}

function checkBlancks(crossword) {
    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            if (isBlanck(crossword, x, y)) {
                let bY = checkHorizontal(crossword, x, y)
                if (y !== bY) registerCoordinates(x, y, x, bY)

                y = bY
            }
        }
    }
}

function loadWords(hints) {
    return hints
        .split(';')
    // .map(p => {
    //     return {word: p,
    //     size: p.length
    //     }
    // })
}

// Complete the crosswordPuzzle function below.
function crosswordPuzzle(crossword, hints) {
    _table = crossword
    _words = loadWords(hints)
    checkBlancks(crossword)

    console.log(coordinates)
    console.log(_table)
}

const _crosswords = {
    x0: [
        '+-++++++++',
        '+-++++++++',
        '+-++++++++',
        '+-----++++',
        '+-+++-++++',
        '+-+++-++++',
        '+++++-++++',
        '++------++',
        '+++++-++++',
        '+++++-++++'
    ]
}
// const _crosswords = {
//     x0: [
//         '++++++++++',
//         '++++++++++',
//         '++++++++++',
//         '------++++',
//         '++++++++++',
//         '++++++++++',
//         '++++++++++',
//         '++++++++++',
//         '++++++++++',
//         '++++++++++',
//     ]
// }

const _wordsT = {
    x0: 'LONDON;DELHI;ICELAND;ANKARA'
}

_crosswords.x0.forEach((e, i) => {
    _crosswords.x0[i] = e.split('')
});

console.log(crosswordPuzzle(_crosswords.x0, _wordsT.x0))
