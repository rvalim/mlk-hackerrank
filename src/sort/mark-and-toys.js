//https://www.hackerrank.com/challenges/mark-and-toys
export function maximumToys(prices, k) {
    prices.sort((a, b) => a - b);

    let total = 0;
    for (let i = 0; i < prices.length; i++) {
        total += prices[i];

        if (total > k) return i;
    }

    return 0;
}
