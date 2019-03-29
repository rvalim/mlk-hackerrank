//https://www.hackerrank.com/challenges/crossword-puzzle
'use strict';


// Complete the crosswordPuzzle function below.
function crosswordPuzzle(crossword, hints) {
    const _words = hints.split(';')

    const x = {
        qtde: 0,
        position: {
            x: null,
            y: null
        },
        link: {
            obj: null,
            x: null,
            y: null
        }
    }
}

const crosswords = {
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
]}

const words = {
    x0: 'LONDON;DELHI;ICELAND;ANKARA'}

console.log(crosswordPuzzle(crosswords.x0, words0.x0))
