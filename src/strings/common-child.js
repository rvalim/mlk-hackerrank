//Longest common subsequence problem

export function commonChild(s1, s2) {
    const arS1 = ` ${s1}`.split('');
    const arS2 = ` ${s2}`.split('');
    let aAuxLast = new Array(1 + s2.length).fill(0);
    let aAuxCurr = new Array(1 + s2.length).fill(0);

    arS1.forEach((a) => {
        if (a === ' ') return;

        arS2.forEach((b, j) => {
            if (b === ' ') return;

            if (a === b) {
                aAuxCurr[j] = aAuxLast[j - 1] + 1;
            } else {
                aAuxCurr[j] = Math.max(aAuxCurr[j - 1], aAuxLast[j]);
            }
        });

        aAuxLast = aAuxCurr.slice();
    });

    return aAuxCurr.reduce((a, b) => Math.max(a, b));
}
