//https://www.hackerrank.com/challenges/ctci-bfs-shortest-reach/problem

// Complete the shortestReach function below.
export function shortestReach(nodes, edges, s) {
    const edgesMapper = {};
    const distances = new Array(nodes + 1).fill(-1); // create with 1 more item to avoid index calcs
    const visitedNodes = new Array(nodes + 1).fill(false); // create with 1 more item to avoid index calcs

    //First of all - map all connections
    edges.forEach((elem) => {
        let start = elem[0];
        let destiny = elem[1];
        let minLen = 0;

        if (!edgesMapper[start]) edgesMapper[start] = {};
        if (!edgesMapper[destiny]) edgesMapper[destiny] = {};

        edgesMapper[start][destiny] = minLen;
        edgesMapper[destiny][start] = minLen;
    });

    let queue = [];
    queue.push(s);
    distances[s] = 0;

    while (queue.length > 0) {
        let currNode = queue.shift();
        let currDistance = distances[currNode];

        visitedNodes[currNode] = true; //marking as visited

        Object.keys(edgesMapper[currNode] || {}).forEach((p) => {
            if (!visitedNodes[p] && distances[p] === -1) {
                queue.push(p);
                distances[p] = currDistance + 6;
            }
        });
    }

    distances.splice(s, 1);
    distances.shift();
    return distances;
}
