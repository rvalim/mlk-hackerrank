//https://www.hackerrank.com/challenges/ctci-making-anagrams/problem

export function makeAnagram(a, b) {
    let result = 0;
    let mapChar = {};

    //Map all characters in a
    for (let ch of a) //O(n) - being n the b.size
        mapChar[ch] = (mapChar[ch] || 0) + 1;

    //Map all characters in b, reducing from the ones previous saved
    for (let ch of b) //O(n) - being n the b.size
        mapChar[ch] = (mapChar[ch] || 0) - 1;

    //Map all characters saved
    for (let prop in mapChar) //O(27) - being 27 all the possible characters
        result += Math.abs(mapChar[prop]); //summarize everything

    return result;
}
