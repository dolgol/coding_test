const fs = require("fs");
const input = fs.readFileSync("/dev/stdin", "utf8").trim().split("\n");

const [N, M, V] = input[0].split(" ").map(Number);

const graph = Array.from({ length: N + 1 }, () => []);

for (let i = 1; i <= M; i++) {
  const [a, b] = input[i].split(" ").map(Number);
  graph[a].push(b);
  graph[b].push(a);
}

// 정점 번호가 작은 것부터 방문하기 위해 정렬
for (let i = 1; i <= N; i++) {
  graph[i].sort((a, b) => a - b);
}

// DFS - 재귀
let dfs_arr = new Set();
let dfs_visited = new Array(graph.length).fill(false);
function dfs(node) {
  dfs_arr.add(node);
  for (let i = 0; i < graph[node].length; i++) {
    let next = graph[node][i];
    if (!dfs_visited[next]) {
      dfs_visited[next] = true;
      dfs(next);
    }
  }
}

dfs_visited[V] = true;
dfs(V);

// BFS - 큐
let bfs_arr = new Set();
let bfs_visited = new Array(graph.length).fill(false);
function bfs(node) {
  let queue = [node];
  bfs_visited[node] = true;

  while (queue.length > 0) {
    let first = queue.shift();
    bfs_arr.add(first);

    for (let i = 0; i < graph[first].length; i++) {
      if (!bfs_visited[graph[first][i]]) {
        bfs_visited[graph[first][i]] = true;
        queue.push(graph[first][i]);
      }
    }
  }
}

bfs(V);

console.log([...dfs_arr].join(" "));
console.log([...bfs_arr].join(" "));
