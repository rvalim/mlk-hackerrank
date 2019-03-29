//https://www.hackerrank.com/challenges/ctci-recursive-staircase
//https://www.youtube.com/watch?v=eVbOxWVC_GY
let res = {}

function stepPerms(n) {
    if(n < 0)
        return 0;

    if(n == 0)
        return 1;

    if(!res[n]) {
        const count = stepPerms(n-1) + stepPerms(n-2) + stepPerms(n-3);
        res[n] = count
    }
    
    return res[n];
}

console.log(stepPerms(5))

