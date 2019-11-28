//Sgavioli . print only using mathematical operations

let y = 1251209;

printAux = (n) => {
    console.log(n);
    return n;
}

printBla = (n) => {
    if (n < 10) return printAux(n);

    let x = ((n / 10) | 0);

    printBla(x);

    return printAux(n % 10);
}

printBla(y);