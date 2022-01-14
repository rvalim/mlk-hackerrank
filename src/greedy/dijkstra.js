//https://www.hackerrank.com/challenges/dijkstrashortreach

// Complete the shortestReach function below.
export function shortestReach(nodes, edges, s) {
    const edgesMapper = {};
    const distances = new Array(nodes + 1).fill(Infinity); // create with 1 more item to avoid index calcs
    const previousNodes = new Array(nodes + 1).fill(0);

    //Mapping all connections
    edges.forEach((elem) => {
        let start = elem[0];
        let destiny = elem[1];
        let len = elem[2];

        if (!edgesMapper[start]) edgesMapper[start] = {};
        if (!edgesMapper[destiny]) edgesMapper[destiny] = {};

        //Considering dudplicated paths
        let minLen = Math.min(edgesMapper[start][destiny] || Infinity, len);

        edgesMapper[start][destiny] = minLen;
        edgesMapper[destiny][start] = minLen;
    });

    let stack = [];

    stack.push({ node: s, weight: 0 });
    distances[s] = 0;

    while (stack.length > 0) {
        let curr = stack.pop();
        let currNode = curr.node;

        Object.keys(edgesMapper[currNode]).forEach((p) => {
            let neighbor = { node: p, weight: edgesMapper[currNode][p] };
            let alt = distances[currNode] + neighbor.weight;

            if (alt < distances[neighbor.node]) {
                distances[neighbor.node] = alt;
                previousNodes[neighbor.node] = currNode;
                stack.push(neighbor);
            }
        });
    }

    distances.splice(s, 1);
    distances.shift();
    return distances.map((p) => (p === Infinity ? -1 : p));
}
