//https://www.hackerrank.com/challenges/sherlock-and-anagrams/problem

export function sherlockAndAnagrams(s) {
    let arr = s.split('');
    let keys = [];
    let qtde = 0;
    let memo = new Map();

    for (let i = 0; i < arr.length; i++) {
        let key = [];
        key.push(arr[i]);
        addKey(key, keys);

        for (let j = i + 1; j < arr.length; j++) {
            key.push(arr[j]);
            let keyStr = key.sort().join('');
            addKey(keyStr, keys);
        }
    }

    for (let key in keys) {
        let n = keys[key];
        if (n === 1) continue;
        qtde += factorial(n, memo) / (2 * factorial(n - 2, memo));
    }

    return qtde;
}

function factorial(n, memo) {
    if (n <= 1) return 1;
    if (memo.has(n)) return memo.get(n);

    memo.set(n, n * factorial(n - 1, memo));

    return memo.get(n);
}

function addKey(key, keys) {
    if (keys[key] === undefined) keys[key] = 1;
    else keys[key]++;
}
