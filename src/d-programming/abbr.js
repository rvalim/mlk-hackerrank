//https://www.hackerrank.com/challenges/abbr

// Complete the luckBalance function below.
export function abbreviation(a, b) {
    //97 - 122
    let dp = {};
    let nextIndex = 0; //controls the position to be found on the b string
    let lastUsed = '';
    const isLowerCase = (w, i) => {
        const code = w.charCodeAt(i);
        return code >= 97 && code <= 122;
    };

    for (let i = 0; i < a.length; i++) {
        const uA = a[i].toUpperCase();
        const index = b.indexOf(uA, nextIndex);

        //Uppercase at the correct position
        if (isLowerCase(a[i]) && index === nextIndex) {
            dp[uA] = (dp[uA] || 0) + 1;
            lastUsed = uA;
            //If the last lower used usbstitutes the uppercase one
        } else if (!isLowerCase(a[i]) && index !== nextIndex) {
            dp[uA] = (dp[uA] || 0) - 1;

            //There wasnt a lower case used in it position
            if (dp[uA] === -1 || lastUsed !== a[i]) return 'NO';
        }

        //A proxima deve ser sequencial
        if (nextIndex === index) nextIndex++;
    }

    return nextIndex === b.length ? 'YES' : 'NO';
}
