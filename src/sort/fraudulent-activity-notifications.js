//https://www.hackerrank.com/challenges/fraudulent-activity-notifications
//Using counting sort

function getMedian(count, d) {
    let medianPos = Math.round(d / 2);
    let counter = 0;
    let left = 0;
    let right = 0;

    //Counter o contador de itens, medianPos a posicao da mediana (meio da lista)
    while (counter < medianPos) {
        counter += count[left];
        left++;
    }

    right = left;
    left--;

    if (counter > medianPos || d % 2 !== 0) return left;
    else
        while (count[right] === 0) {
            right++;
        }

    return (left + right) / 2;
}

export function activityNotifications(arr, d) {
    //Indices
    let firstOne = 0;
    let current = d;
    let qtdeNotifications = 0;
    //Count array, porque o valor maximo dos itens é 200, trata-se de uma Hashtable que contabiliza a quantidade de items
    //O proprop indice representa um valor (de 0 a 200), o item gravado a quantidade de ocorrencias
    let count = new Array(201).fill(0);

    //contagem de elementos
    for (let i = 0; i < d; i++) {
        ++count[arr[i]];
    }

    while (current < arr.length) {
        let median = getMedian(count, d);

        if (arr[current] >= 2 * median) {
            qtdeNotifications++;
        }

        //Apos utilizar o primeiro subtrai ocorrencia da lista
        --count[arr[firstOne]];
        //Adiciona ocorrencia do atual a lista
        ++count[arr[current]];
        //Move para o proximo da lista(inicio)
        ++firstOne;
        //Avanca o cursor para o proximo (fim da lista)
        ++current;
    }

    return qtdeNotifications;
}
