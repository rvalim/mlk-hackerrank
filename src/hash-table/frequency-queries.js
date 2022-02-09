//https://www.hackerrank.com/challenges/frequency-queries

export function freqQuery(queries) {
    let bla = [];
    let blb = [];
    let result = [];
    let actionFreq = (value, bl_remove = false) => {
        let qtde = bla[value] || 0;
        let newQtde = qtde + (bl_remove ? -1 : +1);

        if (bl_remove && qtde === 0) return;

        bla[value] = newQtde;
        blb[qtde] -= 1;
        blb[newQtde] = (blb[newQtde] || 0) + 1;
    };

    queries.forEach((e) => {
        let action = Number(e[0]);
        let value = e[1];

        switch (action) {
            case 1:
                actionFreq(value);
                break;
            case 2:
                actionFreq(value, true);
                break;
            case 3:
                result.push(blb[value] ? '1' : '0');
        }
    });

    return result;
}
