//https://www.hackerrank.com/challenges/special-palindrome-again/problem

export function substrCount(str) {
    let n = str.length;

    // store count of special
    // Palindromic substring
    let count = 0;

    // it will store the count
    // of continues same char
    let sameChar = new Array(n).fill(0);

    let i = 0;

    // traverse string character
    // from left to right
    while (i < n) {
        // store same character count
        let sameCharCount = 1;

        let j = i + 1;

        // Contabiliza a indicencia do mesmo caractere
        while (j < n && str[i] === str[j]) {
            sameCharCount++;
            j++;
        }

        // Case : 1
        // Calcula as combinacoes para sequencia repetida
        count += (sameCharCount * (sameCharCount + 1)) / 2;

        //A utima posicao recebe a quantidade
        sameChar[i] = sameCharCount;

        // i 'e movido para o final da sequencia de caracteres iguais
        i = j;
    }

    // Case 2:
    // Contabiliza sequenciais com o caractere do meio diferente
    for (let j = 1; j < n; j++) {
        // Lembrete: o contador de sequencias seta a quantidade somente na ultima ocorrencia (acima no case 1)
        // Caso o caractere atual = ao anterior, trata-se da mesma sequencia, se repete o contador
        if (str[j] === str[j - 1]) sameChar[j] = sameChar[j - 1];

        // case 2: casos onde o meio e diferente
        if (
            j > 0 &&
            j < n - 1 &&
            str[j - 1] === str[j + 1] && //Compara o anterior e o proximo
            str[j] !== str[j - 1] //Mas o do meio e diferente
        ) {
            //A menor qtde, direita ou esquerda de j, e quem manda
            count += Math.min(sameChar[j - 1], sameChar[j + 1]);
        }
    }

    return count;
}
