function solution(info, n, m) {
    let answer = 0;
    let arr = []; // A 누적, B 누적
    const visited = new Array(info.length + 1)
                        .fill(null)
                        .map(() => new Array(n + 1)
                        .fill(null)
                        .map(() => new Array(m + 1).fill(false)));
    
    function thief(num, A, B) {
        if (A <= 0 || B <= 0) return;
        if (visited[num][A][B]) return; 
        visited[num][A][B] = true; 
        
        if (num >= info.length) {
            arr.push([A, B]);
            return;
        }
        
        thief(num + 1, A - info[num][0], B);
        thief(num + 1, A, B - info[num][1]);
    }
    thief(0, n, m);
    
    if (arr.length === 0) {
        return -1;
    } else {
        answer = Math.min(...arr.map(row => n - row[0]));
    }
    
    return answer;
}