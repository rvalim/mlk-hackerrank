//https://www.hackerrank.com/challenges/balanced-brackets/problem
class Stack {
    constructor() {
        this.items = [];
    }

    push(item) {
        this.items.push(item);
    }

    pop() {
        if (this.items.length === 0) return null;
        return this.items.pop();
    }

    isEmpty() {
        return this.items.length === 0;
    }
}

const dict = {
    ']': '[',
    ')': '(',
    '}': '{'
};

// Complete the isBalanced function below.
export function isBalanced(s) {
    const stack = new Stack();
    const items = s.split('');

    for (let i = 0; i < items.length; i++) {
        const p = items[i];

        if (dict[p]) {
            if (dict[p] !== stack.pop()) return 'NO';
        } else stack.push(p);
    }

    return stack.isEmpty() ? 'YES' : 'NO';
}
