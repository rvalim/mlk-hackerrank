//Sgavioli . print only using mathematical operations

let y = 1251209;

printAux = (n) => {
    console.log(n);
    return n;
};

printCharactersByLine = (n) => {
    if (n < 10) return printAux(n);

    let x = (n / 10) | 0;

    printCharactersByLine(x);

    return printAux(n % 10);
};

printCharactersByLine(y);
