function solution(k, dungeons) {
    let answer = 0;
    let visited = new Array(dungeons.length).fill(false);
    
    function explore(k, count) {
        answer = Math.max(answer, count);
        
        for (let i = 0; i < dungeons.length; i++) {
            if (!visited[i] && k >= dungeons[i][0]) {
                visited[i] = true;
                explore(k - dungeons[i][1], count + 1);
                visited[i] = false;
            }
        }
    }
    explore(k, 0);
    
    return answer;
}