//https://www.hackerrank.com/challenges/crossword-puzzle

function isInArray(array, value) {
    return array.indexOf(value) > -1;
}

function * getPossibilities  (board, word) {
    const length = word.length

    for (let x = 0; x < 10; x++) {
        for (let y = 0; y < 10; y++) {
            let hori = true
            let vert = true

            for (let k = 0; k < length; k++) {
                const aux = ['-', word[k]] //ou vazio ou a propria letra
                
                //Horizontal direction, axis marked as 0:
                if (y < 10 - length + 1) {
                    if (!isInArray(aux, board[x][y + k]))
                        hori = false
                }

                //Vertical direction, axis marked as 1:        
                if (x < 10 - length + 1) {
                    if (!isInArray(aux, board[x + k][y]))
                        vert = false
                }
            }

            if (hori && y < 10 - length + 1)
                yield {x, y, axis: 0}
            if (vert && x < 10 - length + 1)
                yield {x, y, axis: 1}
        }
    }
}

function loadWords(hints) {
    return hints
        .split(';')
}

function giveATry(board, word, position) {
    let { x, y, axis } = position

    if (axis === 0)
        for (let k = 0; k < word.length; k++) {
            board[x][y + k] = word[k]
        }
    else
        for (let k = 0; k < word.length; k++) {
            board[x + k][y] = word[k]
        }
}

function rollback(board, word, position) {
    giveATry(board, '-'.repeat(word.length), position)
}

function solve(board, words) {
    if (words.length == 0){
        return true
    }

    const word = words.pop();

    if (!word) return true

    const possibilities = getPossibilities(board, word)

    for (let position of possibilities) {
        giveATry(board, word, position)
        
        if (solve(board, words)) return true
        
        rollback(board, word, position)
    }

    words.push(word)
}

// Complete the crosswordPuzzle function below.
function crosswordPuzzle(board, hints) {
    const words = loadWords(hints)
    const splitBoard = []
    
    board.forEach((e1, j) => {
        splitBoard.push(e1.split(''))
    });

    solve(splitBoard, words)

    let result = []
    for(let i = 0; i < 10; i++){
        result.push(splitBoard[i].join(''))
    }

    return result
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
    ],
    x1: [
        '++++++++++',
        '+------+++',
        '+++-++++++',
        '+++-++++++',
        '+++-----++',
        '+++-++-+++',
        '++++++-+++',
        '++++++-+++',
        '++++++-+++',
        '++++++++++'
    ]
}

const _wordsT = {
    x0: 'LONDON;DELHI;ICELAND;ANKARA',
    x1: 'POLAND;LHASA;SPAIN;INDIA'
}

// Object.keys(_crosswords).forEach((e, i) => {
    
// });


console.log(crosswordPuzzle(_crosswords.x0, _wordsT.x0))
console.log(crosswordPuzzle(_crosswords.x1, _wordsT.x1))