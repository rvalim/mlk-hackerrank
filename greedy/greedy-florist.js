//https://www.hackerrank.com/challenges/greedy-florist/

// Complete the getMinimumCost function below.
function getMinimumCost(k, c) {
    let 
        total = 0, 
        n = c.length

    c = c.sort((a, b) => b - a)

    for (let i = 0; i < n; i++) {
        //console.log({n, k, i, calc: Math.floor(i / k) + 1 })
        total += c[i] * (Math.floor(i / k) + 1);
    }

    return total
}

const param1 = {
    x0: '5 3',
    x1: '3 2',
    x2: '3 3',
    x3: '50 3',
    x4: '5 2'
}

const param2 = {
    x0: '1 3 5 7 9',
    x1: '2 5 6',
    x2: '2 5 6',
    x3: '390225 426456 688267 800389 990107 439248 240638 15991 874479 568754 729927 980985 132244 488186 5037 721765 251885 28458 23710 281490 30935 897665 768945 337228 533277 959855 927447 941485 24242 684459 312855 716170 512600 608266 779912 950103 211756 665028 642996 262173 789020 932421 390745 433434 350262 463568 668809 305781 815771 550800',
    x4: '1 2 7 9 100'
}

Object.keys(param1).forEach((e, i) => {
    param1[e] = param1[e].split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
    param2[e] = param2[e].split(' ').map(contestsTemp => parseInt(contestsTemp, 10));
})

console.log(getMinimumCost(param1.x0[1], param2.x0))
console.log(getMinimumCost(param1.x1[1], param2.x1))
console.log(getMinimumCost(param1.x2[1], param2.x2))
console.log(getMinimumCost(param1.x3[1], param2.x3))
console.log(getMinimumCost(param1.x4[1], param2.x4))