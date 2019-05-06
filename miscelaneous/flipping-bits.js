//https://www.hackerrank.com/challenges/flipping-bits/


// Complete the flippingBits function below.
function flippingBits(n) {
  return ~n<0?Math.pow(2,32)+~n:~n;
}

const _param0 = [
    '2147483647 1 0'
]
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                  
function facede(){
    _param0.forEach(e => {
        const aux = e.split(' ').map(p => console.log(flippingBits(parseInt(p))))
    })
}

facede()