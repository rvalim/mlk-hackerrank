//https://www.hackerrank.com/challenges/friend-circle-queries

class Node {
    constructor(item) {
        this._item = item;
        this._parent = null;
        this._childs = 1;
    }

    _moveChildTo(from, destination) {
        destination._childs += from._childs;
        from._childs = 1;
        from._parent = destination;
    }

    root(node) {
        const obj = node || this;
        if (obj._parent === null) return obj;
        return this.root(obj._parent);
    }

    union(b) {
        let rootThis = this.root(this);
        let rootB = this.root(b);
        let parent = null;
        let child = null;

        if (rootThis === rootB) {
            return rootThis.size;
        } else if (rootThis._childs >= rootB._childs) {
            parent = rootThis;
            child = rootB;
        } else {
            child = rootThis;
            parent = rootB;
        }

        this._moveChildTo(child, parent);

        return parent._childs;
    }
}

function union(a, b, tree) {
    if (!tree[a]) tree[a] = new Node(a, tree);

    if (!tree[b]) tree[b] = new Node(b, tree);

    return tree[a].union(tree[b]);
}

// Complete the maxCircle function below.
export function maxCircle(queries) {
    let maxSize = 0;
    let ans = Array(queries.length);
    let tree = {};

    for (let i = 0; i < queries.length; i++) {
        const p = queries[i];
        const a = String(p[0]);
        const b = String(p[1]);

        const size = union(a, b, tree);
        maxSize = size > maxSize ? size : maxSize;

        ans[i] = maxSize;
    }
    return ans;
}
