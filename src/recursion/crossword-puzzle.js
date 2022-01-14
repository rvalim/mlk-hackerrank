//https://www.hackerrank.com/challenges/crossword-puzzle

const puzzle_size = 10;

function isInArray(array, value) {
    return array.indexOf(value) > -1;
}

function* getPossibilities(board, word, puzzle_size) {
    const length = word.length;

    for (let x = 0; x < puzzle_size; x++) {
        for (let y = 0; y < puzzle_size; y++) {
            let hori = true;
            let vert = true;

            for (let k = 0; k < length; k++) {
                const aux = ['-', word[k]]; //ou vazio ou a propria letra

                //Horizontal direction, axis marked as 0:
                if (y < puzzle_size - length + 1) {
                    if (!isInArray(aux, board[x][y + k])) hori = false;
                }

                //Vertical direction, axis marked as 1:
                if (x < puzzle_size - length + 1) {
                    if (!isInArray(aux, board[x + k][y])) vert = false;
                }
            }

            if (hori && y < puzzle_size - length + 1) yield { x, y, axis: 0 };
            if (vert && x < puzzle_size - length + 1) yield { x, y, axis: 1 };
        }
    }
}

function giveATry(board, word, position) {
    let { x, y, axis } = position;
    for (let k = 0; k < word.length; k++) {
        if (axis === 0) board[x][y + k] = word[k];
        else board[x + k][y] = word[k];
    }
}

function rollback(board, word, position) {
    giveATry(board, '-'.repeat(word.length), position);
}

function solve(board, words, puzzle_size) {
    if (words.length === 0) return true;

    const word = words.pop();

    if (!word) return true;

    const possibilities = getPossibilities(board, word, puzzle_size);

    for (let position of possibilities) {
        giveATry(board, word, position);

        if (solve(board, words)) return true;

        rollback(board, word, position);
    }

    words.push(word);

    return false;
}

// Complete the crosswordPuzzle function below.
export function crosswordPuzzle(board, hints) {
    const words = hints.split(';');
    const splitBoard = [];

    board.forEach((row) => splitBoard.push(row.split('')));

    solve(splitBoard, words, puzzle_size);

    let result = [];
    for (let i = 0; i < puzzle_size; i++) {
        result.push(splitBoard[i].join(''));
    }

    return result;
}
