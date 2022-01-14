//https://www.hackerrank.com/challenges/swap-nodes-algo/problem
function printTree(root, swapDepth, arr) {
    if (!root) return;

    //muliple of ... dam it
    if (root.depth % swapDepth === 0) {
        const right = root.right;
        root.right = root.left;
        root.left = right;
    }

    printTree(root.left, swapDepth, arr);

    arr.push(root.data);

    printTree(root.right, swapDepth, arr);
}

function buildTree(indexes) {
    const root = { data: 1, depth: 1 }; //new Node(1);
    let queue = [root];

    while (queue.length > 0 && indexes.length > 0) {
        let currNode = queue.shift();
        let currPair = indexes.shift();

        if (currPair[0] !== -1) {
            currNode.left = { data: currPair[0], depth: currNode.depth + 1 };
            queue.push(currNode.left);
        }

        if (currPair[1] !== -1) {
            currNode.right = { data: currPair[1], depth: currNode.depth + 1 };
            queue.push(currNode.right);
        }
    }

    return root;
}

/*
 * Complete the swapNodes function below.
 */
export function swapNodes(indexes, swaps) {  
    const root = buildTree(indexes);
    const values = [];

    for (let i = 0; i < swaps.length; i++) {
        const curr = [];

        printTree(root, swaps[i], curr);
        values.push(curr);
    }

    return values;
}
