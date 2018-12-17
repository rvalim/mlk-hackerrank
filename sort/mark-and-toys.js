//https://www.hackerrank.com/challenges/mark-and-toys/problem
function maximumToys(prices, k) {
    prices.sort((a, b) => a - b)

    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];

        if (total > k)
            return i
    }

    return 0
}


console.log(maximumToys('1 12 5 111 200 1000 10'.split(' ').map(e => Number(e)), 50))