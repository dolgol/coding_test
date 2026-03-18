function solution(n, vertex) {
    // n 노드의 개수, vertex 간선에 대한 정보
    let answer = 0;
    let node_arr = Array.from({ length: n + 1 }, () => []);
    let node_cnt = new Array(n + 1).fill(0);

    for (let i = 0; i < vertex.length; i++) {
        node_arr[vertex[i][0]].push(vertex[i][1]);
        node_arr[vertex[i][1]].push(vertex[i][0]);
    }

    // 1번 - 최단경로 - 간선의 개수가 가장 많은 노드 개수
    // --> node_cnt[node] ++ Math.max 가장 큰 수 개수
    let queue = [1];
    let visited = new Array(n + 1).fill(false);
    visited[1] = true;
    
    console.log(node_arr);
    
    while (queue.length > 0) {
        let now = queue.shift();
            
        for (item of node_arr[now]) {
            if (!visited[item]) {
                visited[item] = true;
                node_cnt[item] = node_cnt[now] + 1;
                queue.push(item);
            }
        }
    }
    
    let max = Math.max.apply(null, node_cnt);
    answer = node_cnt.filter((num) => num === max);
    
    return answer.length;
}