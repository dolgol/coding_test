function solution(maps) {
    let answer = 0;
    
    // bfs
    let ROWS = maps.length;
    let COLS = maps[0].length;
    let direction = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    
    let queue = [[0, 0, 1]];
    let head = 0;
    let visited = Array.from({ length: ROWS }, () => new Array(COLS).fill(false));
    
    while (head < queue.length) {
        let [r, c, len] = queue[head];
        head++;
        
        for ([dr, dc] of direction) {
            let nr = r + dr;
            let nc = c + dc;
            let nlen = len + 1;
            
            // 밖, 벽, 방문
            if (nr < 0 || nc < 0|| nr >= ROWS || nc >= COLS || !maps[nr][nc] || visited[nr][nc]) continue;
            if (nr === ROWS - 1 && nc === COLS - 1) return nlen;
            visited[nr][nc] = true;
            queue.push([nr, nc, nlen]);
        }
        answer++;
    }
    
    return -1;
}